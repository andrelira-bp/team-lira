// =====================================================================
// L BODY — EXTRAS: agenda de compromissos, central de notificações,
// feedback semanal, protocolo nutricional (PDF) e atalho de WhatsApp.
// Usa a ponte window.LB criada no index.html.
// =====================================================================
const LB = () => window.LB;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ic = n => `<svg class="ic"><use href="#i-${n}"/></svg>`;
const rid = () => Math.random().toString(36).slice(2, 9);
const today = () => LB().today();
const addDays = (k, n) => { const d = new Date(k + 'T12:00:00'); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); };
const dow = k => new Date(k + 'T12:00:00').getDay();
const weekStart = k => { const d = dow(k); return addDays(k, d === 0 ? -6 : 1 - d); };
const DOW = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const MONTHS = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const fmtBR = k => { if (!k) return ''; const [y, m, d] = String(k).slice(0, 10).split('-'); return `${d}/${m}/${y}`; };
const fmtDay = k => `${DOW[dow(k)]}, ${k.slice(8, 10)}/${k.slice(5, 7)}`;
const daysLeft = k => Math.round((new Date(k + 'T00:00:00') - new Date(today() + 'T00:00:00')) / 86400000);
const first = n => String(n || '').split(' ')[0];
const byTime = (a, b) => (a.date + (a.time || '')).localeCompare(b.date + (b.time || ''));

// ----------------------------------------------------------------- horários fixos semanais
// Um horário fixo (ex.: Seg, Qua, Qui e Sex às 17:00) vale toda semana e gera os compromissos de cada dia sozinho.
const WD = [[1, 'Seg'], [2, 'Ter'], [3, 'Qua'], [4, 'Qui'], [5, 'Sex'], [6, 'Sáb'], [0, 'Dom']];
const daysTxt = days => { const n = WD.filter(([d]) => (days || []).includes(d)).map(([, x]) => x); return n.length > 1 ? n.slice(0, -1).join(', ') + ' e ' + n[n.length - 1] : n[0] || ''; };
const slotOn = (s, k) => s.active !== false && (s.days || []).includes(dow(k)) && (!s.startDate || k >= s.startDate) && (!s.endDate || k <= s.endDate) && !(s.skips || []).includes(k);
const slotAppt = (s, k) => ({ id: 'fx|' + s.id + '|' + k, fixed: true, slotId: s.id, uid: s.uid, name: s.name, date: k, time: s.time, dur: s.dur, title: s.title, notes: s.notes, status: (s.done || []).includes(k) ? 'concluido' : 'agendado' });
const expandSlots = (slots, from, to) => { const out = []; for (let k = from; k <= to; k = addDays(k, 1)) slots.forEach(s => { if (slotOn(s, k)) out.push(slotAppt(s, k)); }); return out; };

// ----------------------------------------------------------------- WhatsApp
function waLink(phone, text) {
  let d = String(phone || '').replace(/\D/g, '');
  if (!d) return null;
  if (d.length <= 11) d = '55' + d;
  return 'https://wa.me/' + d + (text ? '?text=' + encodeURIComponent(text) : '');
}
function waOpen(user, text) {
  const l = waLink(user && user.phone, text);
  if (!l) { LB().toast('Cadastre o WhatsApp do aluno primeiro (toque no aluno, no Ranking)'); return; }
  window.open(l, '_blank');
}

// ----------------------------------------------------------------- telas cheias (aluno)
let _sheet = null;
function closeSheet() { if (_sheet) { _sheet.remove(); _sheet = null; document.body.style.overflow = ''; } }
function sheet(kicker, title, html) {
  closeSheet();
  const o = document.createElement('div');
  o.className = 'lbs';
  o.innerHTML = `<div class="lbs-in"><div class="back-link" data-x="1">${ic('chev-l')}Voltar</div>
    <div class="lux-kicker">${kicker}</div><div class="lux-title">${title}</div>${html}</div>`;
  o.addEventListener('click', e => { if (e.target.closest('[data-x]')) closeSheet(); });
  document.body.appendChild(o);
  document.body.style.overflow = 'hidden';
  _sheet = o;
  return o;
}
function pop(html) {
  const o = document.createElement('div');
  o.className = 'tr-ovl'; o.style.zIndex = 8000;
  o.innerHTML = `<div class="tr-modal"><button class="tr-x" data-x="1" aria-label="Fechar">×</button>${html}</div>`;
  o.addEventListener('click', e => { if (e.target === o || e.target.dataset.x) o.remove(); });
  document.body.appendChild(o);
  return o;
}

// =====================================================================
//                              ALUNO
// =====================================================================
const ST = { appts: [], loaded: false, notifs: [] };
const seenKey = () => 'lb_seen_' + LB().me().uid;
const seenSet = () => { try { return new Set(JSON.parse(localStorage.getItem(seenKey()) || '[]')); } catch (e) { return new Set(); } };

async function loadMine() {
  const me = LB().me(); if (!me) return;
  let one = [], slots = [];
  try { one = (await LB().listWhere('appointments', 'uid', me.uid)).filter(a => a.status !== 'cancelado'); } catch (e) {}
  try { slots = (await LB().listWhere('fixedSlots', 'uid', me.uid)).filter(s => s.active !== false); } catch (e) {}
  ST.slots = slots;
  ST.appts = [...one, ...expandSlots(slots, addDays(today(), -14), addDays(today(), 45))].sort(byTime);
}

function apptLine(a) {
  const k = a.date, n = daysLeft(k);
  const when = n === 0 ? 'Hoje' : n === 1 ? 'Amanhã' : fmtDay(k);
  return `${when}${a.time ? ' às ' + a.time : ''}`;
}

async function home() {
  const box = $('#home-extras'); if (!box || !LB().me()) return;
  await loadMine();
  const t = today();
  const todays = ST.appts.filter(a => a.date === t && a.status !== 'concluido');
  const next = ST.appts.find(a => a.date > t && a.status !== 'concluido');
  let h = '';
  if (todays.length) {
    h += todays.map(a => `<div class="exp-card"><div class="exp-t">Compromisso hoje · ${esc(a.time || '')}</div>
      <div class="exp-m">${esc(a.title || 'Treino presencial')}${a.notes ? ' — ' + esc(a.notes) : ''}</div></div>`).join('');
  } else if (next) {
    h += `<div class="link-card" data-lbx="agenda"><div><b>Próximo compromisso</b><span>${esc(apptLine(next))} · ${esc(next.title || 'Treino presencial')}</span></div>${ic('chev-r').replace('class="ic"', 'class="ic chev"')}</div>`;
  }
  try {
    if (window.LBF && !(await LBF.anamStatus())) h = `<div class="exp-card" data-lbx="anam" style="cursor:pointer"><div class="exp-t">Complete sua anamnese</div><div class="exp-m">Seu cadastro completo ajuda o professor a montar o plano certo para você. Toque para preencher.</div></div>` + h;
  } catch (e) {}
  h += `<div class="lbx-grid">
    <div class="link-card" data-lbx="agenda">${ic('calendar')}<div><b>Agenda</b><span>Seus compromissos</span></div></div>
    <div class="link-card" data-lbx="nutri">${ic('file')}<div><b>Nutrição</b><span>Protocolo em PDF</span></div></div>
    <div class="link-card" data-lbx="fbsem">${ic('check')}<div><b>Feedback</b><span>Da sua semana</span></div></div>
    <div class="link-card" data-lbx="evo">${ic("pulse")}<div><b>Evolução</b><span>Medidas e fotos</span></div></div>
    <div class="link-card" data-lbx="anam">${ic("list")}<div><b>Anamnese</b><span>Seu cadastro</span></div></div>
  </div>`;
  box.innerHTML = h;
  if (!box.dataset.bound) { box.dataset.bound = '1'; box.addEventListener('click', e => { const c = e.target.closest('[data-lbx]'); if (c) openStudent(c.dataset.lbx); }); }
  refreshNotifs(todays);
}

function openStudent(w) {
  if (w === 'agenda') return studentAgenda();
  if (w === 'nutri') return studentNutri();
  if (w === 'fbsem') return studentWeekly();
  if (w === 'evo') return window.LBF && LBF.evolucao();
  if (w === 'anam') return window.LBF && LBF.anamnese();
  if (w === 'notifs') return openNotifs();
}

// ----------------------------------------------------------------- agenda do aluno
async function studentAgenda() {
  const o = sheet('Seus compromissos', 'Minha <em>agenda</em>', '<div class="tr-empty">Carregando...</div>');
  await loadMine();
  const t = today();
  const up = ST.appts.filter(a => a.date >= t).sort(byTime);
  const past = ST.appts.filter(a => a.date < t).sort((a, b) => byTime(b, a)).slice(0, 6);
  let h = '';
  (ST.slots || []).forEach(s => { h += `<div class="tr-box" style="padding:14px 16px"><div style="font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--gold)">Horário fixo</div><b style="font-size:15px">${esc(daysTxt(s.days))} às ${esc(s.time)}</b><div style="font-size:12px;color:var(--gray)">${esc(s.title || 'Treino presencial')}${s.notes ? ' · ' + esc(s.notes) : ''}</div></div>`; });
  if (!up.length) h += `<div class="tr-empty">${ic('calendar')}<div>Nenhum compromisso marcado.<br>Quando o seu professor marcar qualquer compromisso com você (treino presencial, avaliação física, troca de treino e outros), ele aparece aqui e você recebe o aviso.</div></div>`;
  h += up.slice(0, 16).map(a => `<div class="ap-card ${a.date === t ? 'now' : ''}">
    <div class="ap-day"><b>${a.date.slice(8, 10)}</b><span>${DOW[dow(a.date)]}</span></div>
    <div class="ap-body"><b>${esc(a.title || 'Treino presencial')}</b>
    <span>${esc(apptLine(a))}${a.dur ? ' · ' + a.dur + ' min' : ''}</span>${a.notes ? `<small>${esc(a.notes)}</small>` : ''}</div></div>`).join('');
  if (past.length) h += `<div class="tr-section-title">Anteriores</div>` + past.map(a => `<div class="ap-card past"><div class="ap-day"><b>${a.date.slice(8, 10)}</b><span>${DOW[dow(a.date)]}</span></div>
    <div class="ap-body"><b>${esc(a.title || 'Treino presencial')}</b><span>${fmtBR(a.date)}${a.time ? ' · ' + a.time : ''}${a.status === 'concluido' ? ' · realizado' : ''}</span></div></div>`).join('');
  $('.lbs-in', o).insertAdjacentHTML('beforeend', h);
  $('.tr-empty', o) && $('.tr-empty', o).textContent === 'Carregando...' && $('.tr-empty', o).remove();
}

// ----------------------------------------------------------------- notificações
async function buildNotifs() {
  const me = LB().me(); const out = []; const t = today();
  const add = (key, icon, title, text, go) => out.push({ key, icon, title, text, go });
  try {
    if (me.planEnd) { const n = daysLeft(me.planEnd); if (n <= 7) add('plano-' + me.planEnd, 'clock', n < 0 ? 'Plano vencido' : n === 0 ? 'Plano vence hoje' : `Plano vence em ${n} ${n === 1 ? 'dia' : 'dias'}`, `Seu plano ${n < 0 ? 'venceu' : 'vence'} em ${fmtBR(me.planEnd)}. Fale com o professor para renovar.`); }
    const plan = await LB().get('plans', me.uid);
    ((plan && plan.routines) || []).forEach(r => { if (r.validTo) { const n = daysLeft(r.validTo); if (n <= 7) add('treino-' + r.rid + r.validTo, 'clock', n < 0 ? 'Treino vencido' : n === 0 ? 'Treino vence hoje' : `Treino vence em ${n} ${n === 1 ? 'dia' : 'dias'}`, `A rotina ${r.name || ''} ${n < 0 ? 'venceu' : 'vence'} em ${fmtBR(r.validTo)}.`); } });
  } catch (e) {}
  ST.appts.filter(a => a.status !== 'concluido' && (a.date === t || a.date === addDays(t, 1)))
    .forEach(a => add('ap-' + a.id, 'calendar', a.date === t ? 'Compromisso hoje' : 'Compromisso amanhã', `${a.title || 'Treino presencial'}${a.time ? ' às ' + a.time : ''}${a.notes ? ' — ' + a.notes : ''}`, 'agenda'));
  const since = Date.now() - 14 * 86400000;
  try {
    const m = await LB().get('messages', me.uid);
    ((m && m.msgs) || []).slice(0, 4).forEach(x => { if (Date.parse(x.sentAt) > since) add('msg-' + x.sentAt, 'chat', 'Mensagem do professor', x.text); });
  } catch (e) {}
  try {
    const logs = await LB().listWhere('workoutLogs', 'uid', me.uid);
    logs.filter(l => l.reply && l.finishedAt > since).forEach(l => add('rep-' + l.id, 'chat', 'Resposta ao seu treino', `${l.wname || 'Treino'}: ${l.reply}`));
    const fbs = await LB().listWhere('weeklyFeedback', 'uid', me.uid);
    fbs.filter(f => f.reply && (f.repliedAt || 0) > since).forEach(f => add('wrep-' + f.id, 'chat', 'Resposta ao seu feedback semanal', f.reply, 'fbsem'));
    const ws = weekStart(t), d = dow(t);
    if ((d === 5 || d === 6 || d === 0 || d === 1) && !fbs.some(f => f.week === ws)) add('wk-' + ws, 'check', 'Feedback da semana', 'Conte ao professor como foi a sua semana. Leva 1 minuto.', 'fbsem');
  } catch (e) {}
  try {
    const nu = await LB().get('nutrition', me.uid);
    if (nu && nu.updatedAt > since) add('nut-' + nu.updatedAt, 'file', 'Protocolo nutricional', 'Seu protocolo nutricional foi atualizado.', 'nutri');
  } catch (e) {}
  try { if (window.LBF) (await LBF.notifs(me)).forEach(n => add(n.key, n.icon, n.title, n.text, n.go)); } catch (e) {}
  return out;
}

async function refreshNotifs(todays) {
  try {
    ST.notifs = await buildNotifs();
    const seen = seenSet(), n = ST.notifs.filter(x => !seen.has(x.key)).length;
    const dot = $('#bell-dot'); if (dot) { dot.style.display = n ? 'grid' : 'none'; dot.textContent = n > 9 ? '9+' : n; }
    // aviso do aparelho, uma vez por dia, para o compromisso de hoje
    if (todays && todays.length && window.Notification && Notification.permission === 'granted') {
      const key = 'lb_ap_notif_' + LB().me().uid;
      if (localStorage.getItem(key) !== today()) {
        localStorage.setItem(key, today());
        const a = todays[0], reg = navigator.serviceWorker && await navigator.serviceWorker.getRegistration();
        const opts = { body: `${a.title || 'Treino presencial'} às ${a.time || ''}`, icon: 'icon-192.png', tag: 'lb-appt' };
        if (reg) reg.showNotification('L Body · Compromisso hoje', opts); else new Notification('L Body · Compromisso hoje', opts);
      }
    }
  } catch (e) {}
}

async function openNotifs() {
  const o = sheet('Central', 'Minhas <em>notificações</em>', '<div class="tr-empty">Carregando...</div>');
  await refreshNotifs();
  const seen = seenSet();
  const list = ST.notifs;
  let h = '';
  if (!list.length) h = `<div class="tr-empty">${ic('bell')}<div>Tudo em dia.<br>Quando houver um aviso, ele aparece aqui.</div></div>`;
  else h = list.map(n => `<div class="nt-card ${seen.has(n.key) ? '' : 'new'}" ${n.go ? `data-go="${n.go}"` : ''}>
    <div class="nt-ic">${ic(n.icon)}</div><div class="nt-b"><b>${esc(n.title)}</b><span>${esc(n.text)}</span></div></div>`).join('');
  const inner = $('.lbs-in', o); const ph = $('.tr-empty', o); if (ph) ph.remove();
  inner.insertAdjacentHTML('beforeend', h);
  inner.addEventListener('click', e => { const c = e.target.closest('[data-go]'); if (c) openStudent(c.dataset.go); });
  const all = new Set([...seen, ...list.map(n => n.key)]);
  localStorage.setItem(seenKey(), JSON.stringify([...all].slice(-120)));
  const dot = $('#bell-dot'); if (dot) dot.style.display = 'none';
  if (window.Notification && Notification.permission === 'default')
    inner.insertAdjacentHTML('beforeend', '<button class="eng-btn ghost" style="width:100%;margin-top:14px" id="nt-allow">Ativar avisos no celular</button>');
  const b = $('#nt-allow', o); if (b) b.onclick = async () => { await Notification.requestPermission(); b.remove(); };
}

// ----------------------------------------------------------------- feedback semanal (aluno)
const RATES = [['treino', 'Treinos', 'Como foi a sua dedicação nos treinos?'], ['alim', 'Alimentação', 'Como foi a sua alimentação?'], ['sono', 'Sono', 'Como foi o seu sono?'], ['energia', 'Energia', 'Como esteve a sua energia?']];
const RLAB = ['', 'Fraca', 'Regular', 'Boa', 'Muito boa', 'Excelente'];

async function studentWeekly() {
  const me = LB().me(), ws = weekStart(today());
  const o = sheet('Acompanhamento', 'Feedback da <em>semana</em>', '<div class="tr-empty">Carregando...</div>');
  let mine = [];
  try { mine = (await LB().listWhere('weeklyFeedback', 'uid', me.uid)).sort((a, b) => b.week.localeCompare(a.week)); } catch (e) {}
  const cur = mine.find(f => f.week === ws);
  const inner = $('.lbs-in', o); const ph = $('.tr-empty', o); if (ph) ph.remove();
  const val = { treino: 0, alim: 0, sono: 0, energia: 0, ...(cur ? cur.ratings : {}) };
  let h = `<p class="lux-sub">Semana de ${fmtBR(ws)} a ${fmtBR(addDays(ws, 6))}. ${cur ? 'Você já enviou — pode atualizar se quiser.' : 'Conte ao professor como foi.'}</p>`;
  RATES.forEach(([k, , q]) => {
    h += `<div class="tr-field"><label>${q}</label><div class="rt" data-k="${k}">${[1, 2, 3, 4, 5].map(i => `<button type="button" class="rt-b ${val[k] === i ? 'on' : ''}" data-v="${i}">${i}</button>`).join('')}</div></div>`;
  });
  h += `<div class="tr-field"><label>Peso de hoje (kg) — opcional</label><input id="fw-peso" type="number" step="0.1" inputmode="decimal" value="${cur && cur.weight ? esc(cur.weight) : ''}"></div>
    <div class="tr-field"><label>Dores ou desconfortos</label><textarea id="fw-dor" placeholder="Algo doeu ou incomodou?">${cur ? esc(cur.pain || '') : ''}</textarea></div>
    <div class="tr-field"><label>Comentário para o professor</label><textarea id="fw-com" placeholder="O que mais quer contar?">${cur ? esc(cur.comment || '') : ''}</textarea></div>
    <button class="tr-btn solid tr-fin" id="fw-send">${cur ? 'Atualizar feedback' : 'Enviar feedback'}</button>`;
  const past = mine.filter(f => f.week !== ws).slice(0, 6);
  if (past.length) h += `<div class="tr-section-title">Anteriores</div>` + past.map(f => `<div class="tr-box"><b>${fmtBR(f.week)}</b>
    <div class="fb-rates">${RATES.map(([k, n]) => `<span>${n} ${(f.ratings || {})[k] || '-'}</span>`).join('')}</div>
    ${f.reply ? `<div class="tr-reply"><small>Resposta do professor</small>${esc(f.reply)}</div>` : '<small style="color:var(--gray)">Sem resposta ainda</small>'}</div>`).join('');
  if (cur && cur.reply) h = `<div class="tr-reply" style="margin-bottom:16px"><small>Resposta do professor</small>${esc(cur.reply)}</div>` + h;
  inner.insertAdjacentHTML('beforeend', h);
  $$('.rt', inner).forEach(g => g.addEventListener('click', e => { const b = e.target.closest('.rt-b'); if (!b) return; $$('.rt-b', g).forEach(x => x.classList.remove('on')); b.classList.add('on'); val[g.dataset.k] = +b.dataset.v; }));
  $('#fw-send', inner).onclick = async () => {
    if (RATES.some(([k]) => !val[k])) { LB().toast('Avalie os quatro itens de 1 a 5'); return; }
    const btn = $('#fw-send', inner); btn.disabled = true; btn.textContent = 'Enviando...';
    const peso = parseFloat(String($('#fw-peso', inner).value).replace(',', '.'));
    const doc = { uid: me.uid, name: me.name || '', week: ws, ratings: { ...val }, weight: isNaN(peso) ? null : peso, pain: $('#fw-dor', inner).value.trim(), comment: $('#fw-com', inner).value.trim(),
      createdAt: Date.now(), reply: cur ? (cur.reply || '') : '', resolved: cur ? !!cur.resolved : false, repliedAt: cur ? (cur.repliedAt || 0) : 0 };
    try { await LB().set('weeklyFeedback', me.uid + '_' + ws, doc); LB().toast('Feedback enviado. Obrigado!'); if (window.LBSound) LBSound.play('win'); closeSheet(); refreshNotifs(); }
    catch (e) { btn.disabled = false; btn.textContent = 'Enviar feedback'; LB().toast('Não foi possível enviar agora'); }
  };
}

// ----------------------------------------------------------------- nutrição (aluno)
async function pdfBlob(uid, meta) {
  let b64 = '';
  for (let i = 0; i < meta.chunks; i++) { const c = await LB().get('nutritionFiles', uid + '_' + i); b64 += (c && c.d) || ''; }
  const bin = atob(b64), arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return new Blob([arr], { type: 'application/pdf' });
}
async function studentNutri() {
  const me = LB().me();
  const o = sheet('Alimentação', 'Protocolo <em>nutricional</em>', '<div class="tr-empty">Carregando...</div>');
  let meta = null; try { meta = await LB().get('nutrition', me.uid); } catch (e) {}
  const inner = $('.lbs-in', o); const ph = $('.tr-empty', o); if (ph) ph.remove();
  if (!meta) { inner.insertAdjacentHTML('beforeend', `<div class="tr-empty">${ic('file')}<div>Seu protocolo nutricional ainda não foi enviado.<br>Quando o professor anexar o PDF, ele aparece aqui.</div></div>`); return; }
  inner.insertAdjacentHTML('beforeend', `<div class="tr-box"><b>${esc(meta.name || 'Protocolo.pdf')}</b>
    <div class="tr-status">Atualizado em ${fmtBR(new Date(meta.updatedAt - 3 * 3600000).toISOString().slice(0, 10))} · ${Math.round((meta.size || 0) / 1024)} KB</div>
    <div class="tr-row"><button class="tr-btn solid" id="nu-open">Abrir PDF</button><button class="tr-btn" id="nu-dl">Baixar</button></div></div>`);
  const go = async (download) => {
    LB().toast('Preparando o arquivo...');
    try {
      const blob = await pdfBlob(me.uid, meta), url = URL.createObjectURL(blob);
      if (download) { const a = document.createElement('a'); a.href = url; a.download = meta.name || 'protocolo.pdf'; document.body.appendChild(a); a.click(); a.remove(); }
      else window.open(url, '_blank');
      setTimeout(() => URL.revokeObjectURL(url), 60000);
    } catch (e) { LB().toast('Não foi possível abrir o arquivo'); }
  };
  $('#nu-open', inner).onclick = () => go(false);
  $('#nu-dl', inner).onclick = () => go(true);
}

// =====================================================================
//                            PROFESSOR
// =====================================================================
const AD = { users: [], appts: [], view: 'day', day: null, month: null, loaded: false, wk: null };
async function adminLoad() {
  const [us, ap, sl] = await Promise.all([LB().list('users'), LB().list('appointments'), LB().list('fixedSlots').catch(() => [])]);
  AD.users = us.filter(u => u.status !== 'deleted' && u.status !== 'pending' && u.status !== 'blocked').sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  AD.appts = ap.sort(byTime);
  AD.slots = sl;
  AD.loaded = true;
}
// compromissos de um dia: avulsos + horários fixos
AD.dayList = k => [...AD.appts.filter(a => a.date === k && a.status !== 'cancelado'), ...(AD.slots || []).filter(s => slotOn(s, k)).map(s => slotAppt(s, k))].sort((a, b) => (a.time || '').localeCompare(b.time || ''));
const findAppt = id => { if (String(id).startsWith('fx|')) { const [, sid, k] = id.split('|'); const s = (AD.slots || []).find(x => x.id === sid); return s ? slotAppt(s, k) : null; } return AD.appts.find(x => x.id === id); };
const userOf = id => AD.users.find(u => u.uid === id) || { name: '', uid: id };
function reminderText(a) {
  const when = a.date === today() ? 'hoje' : a.date === addDays(today(), 1) ? 'amanhã' : 'no dia ' + fmtBR(a.date);
  return `Oi ${first(a.name)}! Passando para lembrar do nosso ${(a.title || 'treino presencial').toLowerCase()} ${when}${a.time ? ' às ' + a.time : ''}. Até lá! 💪`;
}

async function adminToday() {
  const box = $('#admin-today'); if (!box) return;
  try { await adminLoad(); } catch (e) { box.innerHTML = ''; return; }
  const t = today(), list = AD.dayList(t);
  box.innerHTML = `<div class="card-title">Compromissos de hoje</div>` + (list.length ? list.map(apptRow).join('') : '<div style="color:var(--gray);font-size:13px">Nenhum compromisso marcado para hoje.</div>')
    + `<button class="eng-btn ghost" style="width:100%;margin-top:12px" data-ag="open">Abrir agenda</button>`
    + ((window.Notification && Notification.permission === 'default') ? `<button class="eng-btn ghost" style="width:100%;margin-top:8px" data-ag="allow">Ativar avisos no celular</button>` : '');
  bindAppts(box);
  // aviso do aparelho, uma vez por dia, com o resumo dos compromissos de hoje
  try {
    if (list.length && window.Notification && Notification.permission === 'granted' && localStorage.getItem('lb_admin_ap_' + t) !== '1') {
      localStorage.setItem('lb_admin_ap_' + t, '1');
      const reg = navigator.serviceWorker && await navigator.serviceWorker.getRegistration();
      const opts = { body: list.slice(0, 5).map(a => `${a.time || ''} ${first(a.name)}`).join(' · '), icon: 'icon-192.png', tag: 'lb-day' };
      const title = `L Body · ${list.length} ${list.length === 1 ? 'compromisso' : 'compromissos'} hoje`;
      if (reg) reg.showNotification(title, opts); else new Notification(title, opts);
    }
  } catch (e) {}
}
function apptRow(a) {
  const u = userOf(a.uid);
  return `<div class="ap-row ${a.status === 'concluido' ? 'done' : ''}" data-id="${a.id}">
    <div class="ap-time">${esc(a.time || '--:--')}</div>
    <div class="ap-who"><b>${esc(a.name || u.name)}</b><span>${esc(a.title || 'Treino presencial')}${a.dur ? ' · ' + a.dur + ' min' : ''}${a.fixed ? ' · fixo' : ''}${a.notes ? ' · ' + esc(a.notes) : ''}</span></div>
    <div class="ap-act">
      <button class="ap-b wa" data-ag="wa" aria-label="WhatsApp">${ic('wa')}</button>
      <button class="ap-b" data-ag="done" aria-label="Concluir">${ic('check')}</button>
      <button class="ap-b x" data-ag="del" aria-label="Excluir">×</button>
    </div></div>`;
}
function bindAppts(root) {
  if (root.dataset.apBound) return; root.dataset.apBound = '1';
  root.addEventListener('click', async e => {
    const b = e.target.closest('[data-ag]'); if (!b) return;
    const act = b.dataset.ag, row = b.closest('[data-id]'), a = row && findAppt(row.dataset.id);
    if (act === 'open') return window.showAdminTab('agenda');
    if (act === 'allow') { await Notification.requestPermission(); return adminToday(); }
    if (act === 'wa' && a) return waOpen({ phone: (userOf(a.uid) || {}).phone }, reminderText(a));
    const refreshAll = async () => { await adminLoad(); adminToday(); if (!$('#admin-agenda-section').classList.contains('hidden')) renderAgenda(); };
    if (act === 'done' && a && a.fixed) { const s = AD.slots.find(x => x.id === a.slotId), d = new Set(s.done || []); d.has(a.date) ? d.delete(a.date) : d.add(a.date); await LB().upd('fixedSlots', s.id, { done: [...d] }); return refreshAll(); }
    if (act === 'del' && a && a.fixed) { if (!confirm('Pular só este dia? O horário fixo continua nos outros dias.')) return; const s = AD.slots.find(x => x.id === a.slotId); await LB().upd('fixedSlots', s.id, { skips: [...(s.skips || []), a.date] }); return refreshAll(); }
    if (act === 'done' && a) { await LB().upd('appointments', a.id, { status: a.status === 'concluido' ? 'agendado' : 'concluido' }); await adminLoad(); adminToday(); if (!$('#admin-agenda-section').classList.contains('hidden')) renderAgenda(); return; }
    if (act === 'del' && a) { if (!confirm('Excluir este compromisso?')) return; await LB().del('appointments', a.id); await adminLoad(); adminToday(); if (!$('#admin-agenda-section').classList.contains('hidden')) renderAgenda(); return; }
  });
}

async function adminAgenda() {
  const box = $('#admin-agenda-section');
  if (!AD.day) { AD.day = today(); AD.month = today().slice(0, 7); }
  box.innerHTML = '<div class="tr-empty">Carregando agenda...</div>';
  try { await adminLoad(); } catch (e) { box.innerHTML = '<div class="tr-empty">Não foi possível carregar a agenda.</div>'; return; }
  renderAgenda();
}
function renderAgenda() {
  const box = $('#admin-agenda-section');
  const v = AD.view, t = today();
  let h = `<div class="seg"><button class="${v === 'day' ? 'on' : ''}" data-ag="view" data-v="day">Dia</button><button class="${v === 'week' ? 'on' : ''}" data-ag="view" data-v="week">Semana</button><button class="${v === 'month' ? 'on' : ''}" data-ag="view" data-v="month">Mês</button></div>`;
  let nav = '', body = '';
  const visible = a => a.status !== 'cancelado';
  if (v === 'day') {
    nav = `${fmtDay(AD.day)}${AD.day === t ? ' · hoje' : ''}`;
    const l = AD.dayList(AD.day);
    body = l.length ? l.map(apptRow).join('') : '<div class="tr-empty" style="padding:20px">Nada marcado neste dia.</div>';
  } else if (v === 'week') {
    const ws = weekStart(AD.day); nav = `${fmtBR(ws).slice(0, 5)} a ${fmtBR(addDays(ws, 6)).slice(0, 5)}`;
    for (let i = 0; i < 7; i++) {
      const k = addDays(ws, i), l = AD.dayList(k);
      body += `<div class="ag-day ${k === t ? 'today' : ''}"><div class="ag-dh"><b>${fmtDay(k)}</b><span>${l.length ? l.length + (l.length === 1 ? ' compromisso' : ' compromissos') : 'livre'}</span></div>${l.map(apptRow).join('')}</div>`;
    }
  } else {
    const [y, m] = AD.month.split('-').map(Number); nav = `${MONTHS[m - 1]} ${y}`;
    const first1 = `${AD.month}-01`, lead = (dow(first1) + 6) % 7, days = new Date(y, m, 0).getDate();
    body = `<div class="cal">${['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map(d => `<i>${d}</i>`).join('')}`;
    for (let i = 0; i < lead; i++) body += '<u></u>';
    for (let d = 1; d <= days; d++) {
      const k = `${AD.month}-${String(d).padStart(2, '0')}`, n = AD.dayList(k).length;
      body += `<button class="${k === t ? 'today' : ''} ${k === AD.day ? 'sel' : ''}" data-ag="pick" data-k="${k}">${d}${n ? `<em>${n}</em>` : ''}</button>`;
    }
    body += '</div>';
    const l = AD.dayList(AD.day);
    body += `<div class="tr-section-title">${fmtDay(AD.day)}</div>` + (l.length ? l.map(apptRow).join('') : '<div style="color:var(--gray);font-size:13px">Nada marcado neste dia.</div>');
  }
  h += `<div class="ag-nav"><button class="ap-b" data-ag="prev">${ic('chev-l')}</button><b>${nav}</b><button class="ap-b" data-ag="next">${ic('chev-r')}</button></div>
    <div class="tr-row" style="margin:0 0 14px"><button class="tr-btn" data-ag="todaybtn">Hoje</button><button class="tr-btn solid" data-ag="new">${ic('plus')} Novo compromisso</button></div>` + body + slotsHtml();
  box.innerHTML = h;
  if (!box.dataset.agBound) {
    box.dataset.agBound = '1';
    box.addEventListener('click', e => {
      const b = e.target.closest('[data-ag]'); if (!b) return;
      const a = b.dataset.ag;
      if (a === 'view') { AD.view = b.dataset.v; renderAgenda(); }
      else if (a === 'pick') { AD.day = b.dataset.k; renderAgenda(); }
      else if (a === 'todaybtn') { AD.day = today(); AD.month = today().slice(0, 7); renderAgenda(); }
      else if (a === 'prev' || a === 'next') {
        const s = a === 'next' ? 1 : -1;
        if (AD.view === 'day') AD.day = addDays(AD.day, s); else if (AD.view === 'week') AD.day = addDays(AD.day, 7 * s);
        else { const [y, m] = AD.month.split('-').map(Number), d = new Date(y, m - 1 + s, 1); AD.month = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0'); AD.day = AD.month + '-01'; }
        renderAgenda();
      } else if (a === 'new') apptForm();
      else if (a === 'sp' || a === 'sd') {
        const s = (AD.slots || []).find(x => x.id === b.closest('[data-sid]').dataset.sid); if (!s) return;
        (async () => {
          if (a === 'sp') await LB().upd('fixedSlots', s.id, { active: s.active === false });
          else { if (!confirm('Excluir o horário fixo de ' + s.name + '? Os compromissos futuros dele somem da agenda.')) return; await LB().del('fixedSlots', s.id); }
          await adminLoad(); renderAgenda(); adminToday();
        })();
      }
    });
    bindAppts(box);
  }
}
function apptForm() {
  const opts = AD.users.map(u => `<option value="${u.uid}">${esc(u.name)}</option>`).join('');
  const o = pop(`<h3>Novo compromisso</h3>
    <div class="tr-field"><label>Aluno</label><select id="ap-u"><option value="">Selecione</option>${opts}</select></div>
    <div class="seg" style="margin-bottom:14px"><button type="button" class="on" data-ty="once">Avulso</button><button type="button" data-ty="fixed">Fixo toda semana</button></div>
    <div class="tr-field" id="g-d"><label>Data</label><input id="ap-d" type="date" value="${AD.day || today()}"></div>
    <div class="tr-field" id="g-w" style="display:none"><label>Dias da semana</label><div class="wd">${WD.map(([d, n]) => `<button type="button" data-wd="${d}">${n}</button>`).join('')}</div></div>
    <div class="tr-field"><label>Horário</label><input id="ap-h" type="time"></div>
    <div class="tr-field"><label>Duração</label><select id="ap-dur"><option>30</option><option>45</option><option selected>60</option><option>90</option></select></div>
    <div class="tr-field"><label>Título</label><input id="ap-t" value="Treino presencial"></div>
    <div class="tr-field"><label>Local ou observação</label><input id="ap-n" placeholder="Ex.: Academia, sala 2"></div>
    <div class="tr-field" id="g-r"><label>Repetir toda semana por</label><select id="ap-r"><option value="1">Só esta vez</option><option value="4">4 semanas</option><option value="8">8 semanas</option><option value="12">12 semanas</option></select></div>
    <div class="tr-field" id="g-s" style="display:none"><label>Começa em</label><input id="ap-s" type="date" value="${today()}"></div>
    <button class="tr-btn solid tr-fin" id="ap-ok">Salvar compromisso</button>`);
  let type = 'once'; const days = new Set();
  const setType = t => { type = t; $$('[data-ty]', o).forEach(b => b.classList.toggle('on', b.dataset.ty === t)); $('#g-d', o).style.display = $('#g-r', o).style.display = t === 'once' ? '' : 'none'; $('#g-w', o).style.display = $('#g-s', o).style.display = t === 'fixed' ? '' : 'none'; };
  $$('[data-ty]', o).forEach(b => b.onclick = () => setType(b.dataset.ty));
  $$('[data-wd]', o).forEach(b => b.onclick = () => { const d = +b.dataset.wd; days.has(d) ? days.delete(d) : days.add(d); b.classList.toggle('on', days.has(d)); });
  $('#ap-ok', o).onclick = async () => {
    const uid = $('#ap-u', o).value, h = $('#ap-h', o).value;
    if (!uid || !h) { LB().toast('Escolha o aluno e o horário'); return; }
    const u = userOf(uid), btn = $('#ap-ok', o), base = { uid, name: u.name || '', time: h, dur: +$('#ap-dur', o).value, title: $('#ap-t', o).value.trim() || 'Treino presencial', notes: $('#ap-n', o).value.trim(), createdAt: Date.now() };
    if (type === 'fixed' && !days.size) { LB().toast('Escolha pelo menos um dia da semana'); return; }
    if (type === 'once' && !$('#ap-d', o).value) { LB().toast('Escolha a data'); return; }
    btn.disabled = true; btn.textContent = 'Salvando...';
    try {
      if (type === 'fixed') {
        await LB().set('fixedSlots', rid(), { ...base, days: [...days], startDate: $('#ap-s', o).value || today(), active: true, done: [], skips: [] });
        o.remove(); LB().toast('Horário fixo salvo: ' + daysTxt([...days]) + ' às ' + h);
        await adminLoad(); renderAgenda(); adminToday();
        return;
      }
      const d = $('#ap-d', o).value, n = +$('#ap-r', o).value;
      for (let i = 0; i < n; i++) await LB().set('appointments', rid(), { ...base, date: addDays(d, 7 * i), status: 'agendado' });
      o.remove(); LB().toast('Compromisso salvo');
      AD.day = d; AD.month = d.slice(0, 7); await adminLoad(); renderAgenda(); adminToday();
    } catch (e) { btn.disabled = false; btn.textContent = 'Salvar compromisso'; LB().toast('Erro ao salvar: ' + (e.code || e.message)); }
  };
}
// lista dos horários fixos, com pausar e excluir
function slotsHtml() {
  const sl = AD.slots || [];
  if (!sl.length) return '';
  return `<div class="tr-section-title" style="margin-top:22px">Horários fixos (${sl.length})</div>` + sl.map(s => `<div class="ap-row ${s.active === false ? 'done' : ''}" data-sid="${s.id}">
    <div class="ap-time">${esc(s.time || '')}</div>
    <div class="ap-who"><b>${esc(s.name)}</b><span>${esc(daysTxt(s.days))} · ${esc(s.title || 'Treino presencial')}${s.active === false ? ' · pausado' : ''}</span></div>
    <div class="ap-act"><button class="ap-b" data-ag="sp" aria-label="Pausar">${s.active === false ? '▶' : '⏸'}</button><button class="ap-b x" data-ag="sd" aria-label="Excluir">×</button></div></div>`).join('');
}

// ----------------------------------------------------------------- acompanhamento (professor)
async function adminAcomp() {
  const box = $('#admin-acomp-section');
  if (!AD.wk) AD.wk = weekStart(today());
  box.innerHTML = '<div class="tr-empty">Carregando...</div>';
  let fbs = [], plans = [];
  try { await adminLoad(); [fbs, plans] = await Promise.all([LB().list('weeklyFeedback'), LB().list('plans')]); }
  catch (e) { box.innerHTML = '<div class="tr-empty">Não foi possível carregar agora.</div>'; return; }
  const week = fbs.filter(f => f.week === AD.wk).sort((a, b) => (a.resolved ? 1 : 0) - (b.resolved ? 1 : 0) || b.createdAt - a.createdAt);
  const sent = new Set(week.map(f => f.uid));
  const missing = AD.users.filter(u => !sent.has(u.uid));
  const low = f => Object.values(f.ratings || {}).some(v => v <= 2);
  let h = `<div class="ag-nav"><button class="ap-b" data-ac="prev">${ic('chev-l')}</button><b>Semana ${fmtBR(AD.wk).slice(0, 5)} a ${fmtBR(addDays(AD.wk, 6)).slice(0, 5)}</b><button class="ap-b" data-ac="next">${ic('chev-r')}</button></div>`;
  h += `<div class="card-title">Feedbacks recebidos (${week.length})</div>`;
  h += week.length ? week.map(f => `<div class="tr-box fbk ${low(f) ? 'alert' : ''}" data-id="${f.id}">
      <div class="fbk-h"><b>${esc(f.name)}</b>${f.resolved ? '<span class="fbk-ok">respondido</span>' : low(f) ? '<span class="fbk-al">atenção</span>' : ''}</div>
      <div class="fb-rates">${RATES.map(([k, n]) => `<span class="${(f.ratings || {})[k] <= 2 ? 'lo' : ''}">${n} ${(f.ratings || {})[k] || '-'}</span>`).join('')}${f.weight ? `<span>Peso ${f.weight} kg</span>` : ''}</div>
      ${f.pain ? `<div class="fbk-t"><small>Dores</small>${esc(f.pain)}</div>` : ''}${f.comment ? `<div class="fbk-t"><small>Comentário</small>${esc(f.comment)}</div>` : ''}
      <textarea class="fbk-r" placeholder="Sua resposta ao aluno...">${esc(f.reply || '')}</textarea>
      <div class="tr-row"><button class="tr-btn solid" data-ac="reply">Responder</button><button class="tr-btn" data-ac="wa">${ic('wa')} WhatsApp</button></div></div>`).join('')
    : '<div style="color:var(--gray);font-size:13px;margin-bottom:14px">Nenhum feedback recebido nesta semana.</div>';
  h += `<div class="card-title" style="margin-top:18px">Ainda não enviaram (${missing.length})</div>`;
  h += missing.length ? missing.map(u => `<div class="ap-row" data-uid="${u.uid}"><div class="ap-who"><b>${esc(u.name)}</b><span>${u.lastCheckinDate ? 'Último check-in: ' + fmtBR(u.lastCheckinDate) : 'Sem check-ins'}</span></div>
      <div class="ap-act"><button class="ap-b wa" data-ac="cobrar" aria-label="WhatsApp">${ic('wa')}</button></div></div>`).join('') : '<div style="color:var(--success);font-size:13px">Todos enviaram. 🎉</div>';
  // vencimentos
  const pl = {}; plans.forEach(p => { pl[p.id] = p; });
  const ven = [];
  AD.users.forEach(u => {
    if (u.planEnd) ven.push({ u, kind: 'Plano', d: u.planEnd });
    ((pl[u.uid] || {}).routines || []).forEach(r => { if (r.validTo) ven.push({ u, kind: 'Treino ' + (r.name || ''), d: r.validTo }); });
  });
  const near = ven.map(x => ({ ...x, n: daysLeft(x.d) })).filter(x => x.n <= 10).sort((a, b) => a.n - b.n);
  h += `<div class="card-title" style="margin-top:18px">Vencimentos (${near.length})</div>`;
  h += near.length ? near.map(x => `<div class="ap-row ${x.n < 0 ? 'late' : ''}" data-uid="${x.u.uid}" data-k="${esc(x.kind)}" data-d="${x.d}"><div class="ap-who"><b>${esc(x.u.name)}</b><span>${esc(x.kind)} · ${x.n < 0 ? 'venceu há ' + (-x.n) + ' d' : x.n === 0 ? 'vence hoje' : 'vence em ' + x.n + ' d'} (${fmtBR(x.d)})</span></div>
      <div class="ap-act"><button class="ap-b wa" data-ac="venc" aria-label="WhatsApp">${ic('wa')}</button></div></div>`).join('') : '<div style="color:var(--success);font-size:13px">Nada vencendo nos próximos 10 dias.</div>';
  // sem treinar
  const idle = AD.users.filter(u => !u.lastCheckinDate || daysLeft(u.lastCheckinDate) <= -7).sort((a, b) => (a.lastCheckinDate || '').localeCompare(b.lastCheckinDate || ''));
  h += `<div class="card-title" style="margin-top:18px">Sem check-in há 7+ dias (${idle.length})</div>`;
  h += idle.length ? idle.slice(0, 15).map(u => `<div class="ap-row" data-uid="${u.uid}"><div class="ap-who"><b>${esc(u.name)}</b><span>${u.lastCheckinDate ? 'há ' + (-daysLeft(u.lastCheckinDate)) + ' dias' : 'nunca fez check-in'}</span></div>
      <div class="ap-act"><button class="ap-b wa" data-ac="idle" aria-label="WhatsApp">${ic('wa')}</button></div></div>`).join('') : '<div style="color:var(--success);font-size:13px">Todos ativos.</div>';
  box.innerHTML = h;
  if (!box.dataset.acBound) {
    box.dataset.acBound = '1';
    box.addEventListener('click', async e => {
      const b = e.target.closest('[data-ac]'); if (!b) return;
      const a = b.dataset.ac, row = b.closest('[data-id],[data-uid]');
      if (a === 'prev') { AD.wk = addDays(AD.wk, -7); return adminAcomp(); }
      if (a === 'next') { AD.wk = addDays(AD.wk, 7); return adminAcomp(); }
      if (a === 'reply') {
        const id = row.dataset.id, txt = $('.fbk-r', row).value.trim(); if (!txt) { LB().toast('Escreva a resposta'); return; }
        await LB().upd('weeklyFeedback', id, { reply: txt, resolved: true, repliedAt: Date.now() }); LB().toast('Resposta enviada'); return adminAcomp();
      }
      const u = AD.users.find(x => x.uid === (row.dataset.uid || (fbs.find(f => f.id === row.dataset.id) || {}).uid));
      if (!u) return;
      if (a === 'wa') return waOpen(u, `Oi ${first(u.name)}! Vi o seu feedback da semana. `);
      if (a === 'cobrar') return waOpen(u, `Oi ${first(u.name)}! Como foi a sua semana? Não esqueça de enviar o seu feedback pelo app L Body. 💪`);
      if (a === 'idle') return waOpen(u, `Oi ${first(u.name)}! Senti sua falta nos treinos. Está tudo bem? Vamos retomar essa semana? 💪`);
      if (a === 'venc') { const k = row.dataset.k, d = row.dataset.d, n = daysLeft(d); return waOpen(u, `Oi ${first(u.name)}! Seu ${k.toLowerCase()} ${n < 0 ? 'venceu' : 'vence'} em ${fmtBR(d)}. Vamos renovar? 💪`); }
    });
  }
}

// ----------------------------------------------------------------- nutrição (professor)
const MAX_PDF = 2 * 1024 * 1024, CHUNK = 500000;
async function adminNutri() {
  const box = $('#admin-nutri-section');
  box.innerHTML = '<div class="tr-empty">Carregando...</div>';
  let metas = [];
  try { await adminLoad(); metas = await LB().list('nutrition'); } catch (e) { box.innerHTML = '<div class="tr-empty">Não foi possível carregar agora.</div>'; return; }
  const mm = AD.mm = {}; metas.forEach(m => { mm[m.id] = m; });
  let h = `<div class="card-title">Protocolo nutricional (PDF)</div>
    <p style="font-size:12px;color:var(--gray);margin-bottom:12px">Escolha o aluno e anexe o PDF (até 2 MB). O aluno vê na tela inicial, em Nutrição.</p>
    <div class="tr-field"><label>Aluno</label><select id="nu-u"><option value="">Selecione</option>${AD.users.map(u => `<option value="${u.uid}">${esc(u.name)}${mm[u.uid] ? ' ✓' : ''}</option>`).join('')}</select></div>
    <div class="tr-field"><label>Arquivo PDF</label><input id="nu-f" type="file" accept="application/pdf"></div>
    <button class="tr-btn solid tr-fin" id="nu-up">Enviar PDF</button>
    <div class="card-title" style="margin-top:20px">Alunos com protocolo (${metas.length})</div>`;
  h += metas.length ? metas.map(m => `<div class="ap-row" data-uid="${m.id}"><div class="ap-who"><b>${esc(userOf(m.id).name || m.id)}</b><span>${esc(m.name || '')} · ${Math.round((m.size || 0) / 1024)} KB · ${fmtBR(new Date(m.updatedAt - 3 * 3600000).toISOString().slice(0, 10))}</span></div>
    <div class="ap-act"><button class="ap-b" data-nu="open" aria-label="Abrir">${ic('file')}</button><button class="ap-b x" data-nu="del" aria-label="Remover">×</button></div></div>`).join('') : '<div style="color:var(--gray);font-size:13px">Nenhum protocolo anexado ainda.</div>';
  box.innerHTML = h;
  $('#nu-up', box).onclick = async () => {
    const uid = $('#nu-u', box).value, f = $('#nu-f', box).files[0];
    if (!uid) { LB().toast('Escolha o aluno'); return; }
    if (!f) { LB().toast('Escolha o arquivo PDF'); return; }
    if (f.type !== 'application/pdf') { LB().toast('O arquivo precisa ser PDF'); return; }
    if (f.size > MAX_PDF) { LB().toast('PDF muito grande (máximo 2 MB). Comprima o arquivo.'); return; }
    const btn = $('#nu-up', box); btn.disabled = true; btn.textContent = 'Enviando...';
    try {
      const b64 = await new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(String(r.result).split(',')[1]); r.onerror = rej; r.readAsDataURL(f); });
      const n = Math.ceil(b64.length / CHUNK), old = (mm[uid] || {}).chunks || 0;
      for (let i = 0; i < n; i++) await LB().set('nutritionFiles', uid + '_' + i, { uid, i, d: b64.slice(i * CHUNK, (i + 1) * CHUNK) });
      for (let i = n; i < old; i++) await LB().del('nutritionFiles', uid + '_' + i);
      await LB().set('nutrition', uid, { uid, name: f.name, size: f.size, chunks: n, updatedAt: Date.now() });
      LB().toast('Protocolo enviado'); adminNutri();
    } catch (e) { btn.disabled = false; btn.textContent = 'Enviar PDF'; LB().toast('Erro ao enviar: ' + (e.code || e.message)); }
  };
  if (!box.dataset.nuBound) box.dataset.nuBound = '1', box.addEventListener('click', async e => {
    const b = e.target.closest('[data-nu]'); if (!b) return;
    const row = b.closest('[data-uid]'), uid = row.dataset.uid, m = AD.mm[uid];
    if (b.dataset.nu === 'open') { try { const blob = await pdfBlob(uid, m); window.open(URL.createObjectURL(blob), '_blank'); } catch (er) { LB().toast('Não foi possível abrir'); } }
    if (b.dataset.nu === 'del') {
      if (!confirm('Remover o protocolo deste aluno?')) return;
      for (let i = 0; i < (m.chunks || 0); i++) await LB().del('nutritionFiles', uid + '_' + i);
      await LB().del('nutrition', uid); LB().toast('Protocolo removido'); adminNutri();
    }
  });
}

// ----------------------------------------------------------------- exportação
window.LBX = {
  home, openNotifs, waOpen, adminToday,
  admin: tab => { if (tab === 'agenda') adminAgenda(); else if (tab === 'acomp') adminAcomp(); else if (tab === 'nutri') adminNutri(); }
};
window.lbOpenNotifs = openNotifs;
