// =====================================================================
// L BODY — módulo de TREINOS
//   Aluno:     minhas rotinas → treino → executar → feedback → evolução
//   Professor: biblioteca de exercícios, rotinas, atribuição, feedbacks, frequência
// Usa a ponte window.LB criada no index.html (Firebase já autenticado).
// GIFs e catálogo: https://andrelira-bp.github.io/lbody-gifs/
// =====================================================================
const GIF = 'https://andrelira-bp.github.io/lbody-gifs/';
const GRUPOS = {
  'abdomen-core':'Abdômen','adutores-abdutores':'Adutores e abdutores','antebracos':'Antebraços','biceps':'Bíceps',
  'cardio':'Cardio','corpo-inteiro':'Corpo inteiro','costas':'Costas','gluteos':'Glúteos','lombar':'Lombar',
  'ombros':'Ombros','panturrilhas':'Panturrilhas','peitoral':'Peitoral','posteriores':'Posteriores de coxa',
  'quadriceps':'Quadríceps','trapezio':'Trapézio','triceps':'Tríceps'
};
const RPE = ['Muito leve','Leve','Moderada','Pouco intensa','Intensa','Muito intensa','Muito, muito intensa','Exaustão máxima'];

const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
const uid8 = () => Math.random().toString(36).slice(2, 9);
const ic = n => `<svg class="ic"><use href="#i-${n}"/></svg>`;
const fmtDate = k => { if (!k) return ''; const [y, m, d] = String(k).slice(0, 10).split('-'); return `${d}/${m}/${y}`; };
const dayKey = ts => new Date(ts - 3 * 3600 * 1000).toISOString().slice(0, 10);
const addDays = (k, n) => { const d = new Date(k + 'T12:00:00'); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); };
const mmss = s => { s = Math.max(0, Math.round(s)); return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); };
const dur = s => { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + 'm ' + String(s % 60).padStart(2, '0') + 's'; };
const gif = id => GIF + id + '.webp';
const LB = () => window.LB;

let CAT = null;
async function catalog() {
  if (CAT) return CAT;
  const r = await fetch(GIF + 'catalog.json');
  CAT = await r.json();
  return CAT;
}

// ---------------------------------------------------------------- estilo
const CSS = `
.tr-card{display:flex;align-items:center;gap:14px;padding:16px;border:1px solid var(--line);background:var(--dark2);margin-bottom:12px;cursor:pointer;}
.tr-card b{display:block;font-family:var(--head);font-style:italic;text-transform:uppercase;font-size:22px;letter-spacing:.03em;font-weight:700;line-height:1.1;}
.tr-card span,.tr-card small{display:block;font-size:11px;color:var(--gray);letter-spacing:.04em;}
.tr-card .chev{margin-left:auto;color:var(--gray2);}
.tr-empty{border:1px dashed var(--gold-dim);padding:30px 18px;text-align:center;color:var(--gray);font-size:13px;line-height:1.6;}
.tr-empty .ic{width:38px;height:38px;color:var(--gold);margin-bottom:8px;}
.tr-box{border:1px solid var(--line);background:var(--dark2);padding:16px;margin-bottom:12px;}
.tr-box h4{font-family:var(--head);font-style:italic;text-transform:uppercase;font-size:22px;letter-spacing:.03em;margin-bottom:2px;}
.tr-status{font-size:11px;color:var(--gold);letter-spacing:.06em;margin:4px 0 12px;}
.tr-row{display:flex;gap:8px;margin-top:8px;}
.tr-row>*{flex:1;}
.tr-btn{padding:13px 10px;border:1px solid var(--gold-dim);background:transparent;color:var(--gold);font-family:var(--body);font-weight:600;font-size:10px;letter-spacing:.18em;text-transform:uppercase;cursor:pointer;text-align:center;}
.tr-btn.solid{background:var(--gold-grad);color:#14100a;border:0;clip-path:polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%);}
.tr-btn.danger{color:#d9534f;border-color:#d9534f;}
.tr-btn.sm{padding:8px 10px;font-size:9px;}
.tr-banner{border:1px solid var(--gold-dim);background:linear-gradient(160deg,#18130a,#0a0907);padding:16px;margin-bottom:16px;text-align:center;}
.tr-banner p{font-size:12px;color:var(--gray);margin-bottom:12px;}
.tr-timer{position:sticky;top:56px;z-index:50;background:#050505;border:1px solid var(--gold-dim);padding:10px;text-align:center;margin-bottom:14px;font-family:var(--head);font-style:italic;font-size:26px;color:var(--gold);letter-spacing:.06em;}
.tr-ex{display:flex;gap:12px;border:1px solid var(--line);background:var(--dark2);padding:12px;margin-bottom:10px;position:relative;}
.tr-ex.done{opacity:.55;}
.tr-ex.done .tr-ex-meta,.tr-ex.done .tr-ex-note,.tr-ex.done .tr-gif{display:none;}
.tr-chk{width:28px;height:28px;border-radius:50%;border:1px solid #4a4130;background:transparent;flex-shrink:0;cursor:pointer;margin-top:2px;position:relative;}
.tr-ex.done .tr-chk{background:var(--gold-grad);border-color:var(--gold);}
.tr-ex.done .tr-chk::after{content:"";width:6px;height:11px;border:solid #14100a;border-width:0 2px 2px 0;transform:rotate(45deg);position:absolute;top:5px;left:10px;}
.tr-ex-body{flex:1;min-width:0;}
.tr-ex-name{font-weight:500;font-size:14px;margin-bottom:4px;}
.tr-ex-meta{font-size:12px;color:var(--gray);line-height:1.6;}
.tr-ex-meta a{color:var(--gold);cursor:pointer;text-decoration:underline;margin-left:4px;}
.tr-ex-note{font-size:12px;color:#cfc6b2;margin-top:6px;padding:8px 10px;border-left:2px solid var(--gold-dim);white-space:pre-wrap;}
.tr-gif{width:96px;height:96px;object-fit:cover;background:#fff;flex-shrink:0;cursor:pointer;border:1px solid var(--line);}
.tr-fin{width:100%;margin-top:6px;}
.tr-ovl{position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:7000;display:flex;align-items:center;justify-content:center;padding:16px;}
.tr-modal{background:#0c0b09;border:1px solid var(--gold-dim);border-top:2px solid var(--gold);width:100%;max-width:420px;max-height:90vh;overflow:auto;padding:22px;position:relative;}
.tr-modal h3{font-family:var(--head);font-style:italic;text-transform:uppercase;font-size:26px;margin-bottom:12px;padding-right:26px;}
.tr-x{position:absolute;top:8px;right:12px;background:none;border:0;color:#aaa;font-size:28px;cursor:pointer;}
.tr-modal img.big{width:100%;background:#fff;display:block;}
.tr-big{font-family:var(--head);font-style:italic;font-size:70px;text-align:center;color:var(--gold);line-height:1;margin:14px 0 18px;}
.tr-field{margin-bottom:14px;}
.tr-field label{display:block;font-size:10px;letter-spacing:.26em;text-transform:uppercase;color:var(--gray);margin-bottom:6px;}
.tr-field input,.tr-field textarea,.tr-field select,.tr-in{width:100%;background:rgba(255,255,255,.03);border:0;border-bottom:1px solid #3a3222;color:var(--white);font-family:var(--body);font-size:14px;padding:11px 4px;outline:none;border-radius:0;}
.tr-field select option{background:#111;}
.tr-field input:focus,.tr-field textarea:focus,.tr-in:focus{border-bottom-color:var(--gold);}
.tr-field textarea{min-height:84px;resize:vertical;}
.tr-pill{display:inline-block;font-size:10px;letter-spacing:.1em;color:var(--gold);border:1px solid var(--gold-dim);padding:3px 8px;margin:0 6px 6px 0;}
.tr-fb{border-left:2px solid var(--gold-dim);padding:6px 0 6px 12px;margin-bottom:14px;}
.tr-fb small{color:var(--gray);font-size:11px;display:block;}
.tr-reply{background:rgba(201,164,92,.08);border:1px solid var(--gold-dim);padding:10px 12px;margin-top:8px;font-size:13px;}
.tr-reply small{color:var(--gold);letter-spacing:.2em;text-transform:uppercase;font-size:9px;display:block;margin-bottom:4px;}
.tr-chips{display:flex;gap:6px;overflow-x:auto;padding-bottom:6px;margin-bottom:10px;}
.tr-chip{padding:7px 12px;border:1px solid var(--line);color:var(--gray);font-size:10px;letter-spacing:.12em;text-transform:uppercase;white-space:nowrap;cursor:pointer;background:transparent;font-family:var(--body);}
.tr-chip.on{background:var(--gold-grad);color:#14100a;border-color:var(--gold);}
.tr-pick{display:flex;align-items:center;gap:12px;padding:8px;border:1px solid var(--line);margin-bottom:8px;cursor:pointer;}
.tr-pick img{width:56px;height:56px;object-fit:cover;background:#fff;flex-shrink:0;}
.tr-pick b{font-size:13px;font-weight:500;display:block;}
.tr-pick small{font-size:10px;color:var(--gray);letter-spacing:.08em;text-transform:uppercase;}
.tr-ed-ex{border:1px solid var(--line);padding:10px;margin-bottom:8px;background:#0b0a08;}
.tr-ed-ex .top{display:flex;gap:10px;align-items:center;margin-bottom:8px;}
.tr-ed-ex img{width:48px;height:48px;object-fit:cover;background:#fff;}
.tr-ed-ex .grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;}
.tr-ed-ex .grid .tr-in{font-size:13px;padding:8px 4px;}
.tr-mini{display:flex;gap:6px;margin-left:auto;}
.tr-mini button{background:transparent;border:1px solid var(--line);color:var(--gray);width:30px;height:30px;cursor:pointer;font-size:13px;}
.tr-wk{border:1px solid var(--gold-dim);padding:12px;margin-bottom:14px;background:linear-gradient(160deg,#120f08,#080706);}
.tr-st{display:flex;align-items:center;gap:10px;padding:10px;border:1px solid var(--line);margin-bottom:6px;font-size:13px;}
.tr-st input{width:18px;height:18px;accent-color:#C9A45C;}
.tr-table{width:100%;border-collapse:collapse;font-size:13px;}
.tr-table td,.tr-table th{padding:9px 6px;border-bottom:1px solid var(--line);text-align:left;}
.tr-table th{font-size:10px;letter-spacing:.2em;color:var(--gold);text-transform:uppercase;font-weight:500;}
.tr-section-title{font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:var(--gold);margin:16px 0 10px;display:flex;align-items:center;gap:12px;}
.tr-section-title::before{content:"";width:28px;height:1px;background:var(--gold);}
`;
document.head.appendChild(Object.assign(document.createElement('style'), { id: 'treinos-css', textContent: CSS }));

// ---------------------------------------------------------------- modal
let _tick = null, _rest = null;
function modal(html, onClose) {
  closeModal();
  const o = document.createElement('div');
  o.className = 'tr-ovl'; o.id = 'tr-modal';
  o.innerHTML = `<div class="tr-modal"><button class="tr-x" data-x="1" aria-label="Fechar">×</button>${html}</div>`;
  o.addEventListener('click', e => { if (e.target === o || e.target.dataset.x) { closeModal(); onClose && onClose(); } });
  document.body.appendChild(o);
  return o;
}
function closeModal() {
  if (_rest) { clearInterval(_rest); _rest = null; }
  const o = $('#tr-modal'); if (o) o.remove();
}

// =====================================================================
//                                ALUNO
// =====================================================================
const S = { view: 'list', plan: null, logs: [], r: 0, w: 0, run: null, loaded: false };
const runKey = () => 'lb_run_' + (LB().me() || {}).uid;
function loadRun() { try { S.run = JSON.parse(localStorage.getItem(runKey()) || 'null'); } catch (e) { S.run = null; } }
function saveRun() { if (S.run) localStorage.setItem(runKey(), JSON.stringify(S.run)); else localStorage.removeItem(runKey()); }

const validRoutines = () => ((S.plan && S.plan.routines) || [])
  .map((r, i) => ({ r, i }))
  .filter(x => { const t = LB().today(); return (!x.r.validFrom || t >= x.r.validFrom) && (!x.r.validTo || t <= x.r.validTo); });

async function student() {
  const root = $('#treinos-root'); if (!root) return;
  const me = LB().me(); if (!me) return;
  if (!S.loaded) root.innerHTML = '<div class="tr-empty">Carregando seus treinos...</div>';
  try {
    S.plan = await LB().get('plans', me.uid);
    S.logs = await LB().listWhere('workoutLogs', 'uid', me.uid);
    S.loaded = true;
  } catch (e) {
    root.innerHTML = '<div class="tr-empty">Não foi possível carregar seus treinos agora. Tente de novo em instantes.</div>';
    return;
  }
  loadRun();
  if (S.run) { const f = findRun(); if (f) { S.r = f.r; S.w = f.w; S.view = 'workout'; } else { S.run = null; saveRun(); } }
  else if (S.view === 'workout') S.view = 'routine';
  renderStudent();
  if (!root.dataset.bound) { root.dataset.bound = '1'; root.addEventListener('click', studentClick); }
}
function findRun() {
  if (!S.run || !S.plan) return null;
  const [rid, wid] = S.run.key.split('|');
  const rs = S.plan.routines || [];
  for (let r = 0; r < rs.length; r++) if (rs[r].rid === rid) {
    const ws = rs[r].workouts || [];
    for (let w = 0; w < ws.length; w++) if (ws[w].id === wid) return { r, w };
  }
  return null;
}
const curR = () => (S.plan.routines || [])[S.r];
const curW = () => (curR().workouts || [])[S.w];

function renderStudent() {
  const root = $('#treinos-root'); if (!root) return;
  const y = window.scrollY;
  if (S.view === 'list') root.innerHTML = vList();
  else if (S.view === 'routine') root.innerHTML = vRoutine();
  else if (S.view === 'workout') root.innerHTML = vWorkout();
  else if (S.view === 'evo') root.innerHTML = vEvo();
  else if (S.view === 'fb') root.innerHTML = vFb();
  if (S.view === 'workout') startTick(); else stopTick();
  window.scrollTo(0, S.view === 'workout' ? y : 0);
}

function vList() {
  const rs = validRoutines();
  let h = `<div class="lux-kicker">Seus treinos</div><div class="lux-title">Minha <em>rotina</em></div>
    <p class="lux-sub">Montada pelo seu professor, com a demonstração de cada exercício.</p>`;
  if (!rs.length) {
    h += `<div class="tr-empty">${ic('dumbbell')}<div>Você ainda não tem uma rotina ativa.<br>Quando o seu professor atribuir um treino, ele aparece aqui.</div></div>`;
  } else {
    h += rs.map(({ r, i }) => `<div class="tr-card" data-act="openR" data-i="${i}">
      <div><b>${esc(r.name)}</b><span>${fmtDate(r.validFrom)} – ${fmtDate(r.validTo)}</span><small>${esc([r.goal, r.level].filter(Boolean).join(' | '))}</small></div>
      ${ic('chev-r').replace('class="ic"', 'class="ic chev"')}</div>`).join('');
  }
  return h;
}

function logsOf(rid, wid) { return S.logs.filter(l => l.rid === rid && l.wid === wid).sort((a, b) => b.finishedAt - a.finishedAt); }

function vRoutine() {
  const r = curR();
  let h = `<div class="back-link" data-act="toList">${ic('chev-l')}Rotinas</div>
    <div class="lux-kicker">${esc([r.goal, r.level].filter(Boolean).join(' | ') || 'Rotina')}</div>
    <div class="lux-title">${esc(r.name)}</div>
    <p class="lux-sub">${fmtDate(r.validFrom)} – ${fmtDate(r.validTo)}</p>`;
  if (r.notes) h += `<div class="tr-box" data-act="notes" style="cursor:pointer"><div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--gold)">Orientações gerais</span>${ic('chev-r')}</div></div>`;
  h += (r.workouts || []).map((w, wi) => {
    const ls = logsOf(r.rid, w.id);
    const st = ls.length ? `Executado ${ls.length} ${ls.length > 1 ? 'vezes' : 'vez'}, última execução em ${fmtDate(dayKey(ls[0].finishedAt))}` : 'Você ainda não realizou esse treino';
    return `<div class="tr-box"><h4>${esc(w.name)}</h4>${w.desc ? `<div style="font-size:12px;color:var(--gray)">${esc(w.desc)}</div>` : ''}
      <div class="tr-status">${st}</div>
      <div class="tr-row"><button class="tr-btn" data-act="evo" data-w="${wi}">Evolução</button><button class="tr-btn" data-act="fb" data-w="${wi}">Feedbacks</button></div>
      <button class="tr-btn solid tr-fin" data-act="openW" data-w="${wi}" style="margin-top:10px">Ver treino</button></div>`;
  }).join('');
  return h;
}

function runLoad(ex) { return (S.run && S.run.loads && S.run.loads[ex.id] != null) ? S.run.loads[ex.id] : (ex.carga || '—'); }

function vWorkout() {
  const r = curR(), w = curW();
  const running = S.run && S.run.key === r.rid + '|' + w.id;
  let h = `<div class="back-link" data-act="${running ? 'noop' : 'toRoutine'}">${running ? '' : ic('chev-l') + 'Rotina'}</div>
    <div class="lux-kicker">${esc(r.name)}</div><div class="lux-title">${esc(w.name)}</div>`;
  if (w.desc) h += `<p class="lux-sub">${esc(w.desc)}</p>`;
  if (running) h += `<div class="tr-timer" id="tr-timer">${dur((Date.now() - S.run.start) / 1000)}</div>`;
  else h += `<div class="tr-banner"><p>Você está no modo visualização.<br>Toque em INICIAR para começar seu treino.</p><button class="tr-btn solid" data-act="start" style="width:100%">Iniciar</button></div>`;
  h += (w.exercises || []).map((ex, i) => {
    const done = running && S.run.done && S.run.done[ex.id];
    return `<div class="tr-ex ${done ? 'done' : ''}">
      ${running ? `<button class="tr-chk" data-act="chk" data-i="${i}" aria-label="Marcar como feito"></button>` : ''}
      <div class="tr-ex-body"><div class="tr-ex-name">${esc(ex.n)}</div>
        <div class="tr-ex-meta">Séries: ${esc(ex.series || '—')}</div>
        <div class="tr-ex-meta">Carga: ${esc(runLoad(ex))}${running ? `<a data-act="load" data-i="${i}">Editar</a>` : ''}</div>
        ${ex.descanso ? `<div class="tr-ex-meta"><a data-act="rest" data-i="${i}" style="margin-left:0">Intervalo: ${esc(ex.descanso)}s</a></div>` : ''}
        ${ex.notas ? `<div class="tr-ex-note">${esc(ex.notas)}</div>` : ''}</div>
      <img class="tr-gif" src="${gif(ex.id)}" loading="lazy" alt="${esc(ex.n)}" data-act="gif" data-i="${i}">
    </div>`;
  }).join('');
  if (running) h += `<button class="tr-btn solid tr-fin" data-act="finish">Finalizar treino</button>
    <button class="tr-btn danger tr-fin" data-act="cancel" style="margin-top:10px">Cancelar treino</button>`;
  return h;
}

function vEvo() {
  const r = curR(), w = curW();
  const ls = logsOf(r.rid, w.id).slice().reverse();
  let h = `<div class="back-link" data-act="toRoutine">${ic('chev-l')}Rotina</div><div class="lux-kicker">Progresso de cargas</div><div class="lux-title">${esc(w.name)}</div>`;
  const rows = (w.exercises || []).map(ex => {
    const pts = ls.filter(l => l.loads && l.loads[ex.id] != null && String(l.loads[ex.id]).trim() !== '' && l.loads[ex.id] !== '—').slice(-6);
    if (!pts.length) return '';
    const last = parseFloat(pts[pts.length - 1].loads[ex.id]), prev = pts.length > 1 ? parseFloat(pts[pts.length - 2].loads[ex.id]) : NaN;
    const trend = (!isNaN(last) && !isNaN(prev)) ? (last > prev ? ' ▲' : last < prev ? ' ▼' : ' ＝') : '';
    return `<div class="tr-box"><div style="font-weight:500;font-size:13px;margin-bottom:8px">${esc(ex.n)}<span style="color:var(--gold)">${trend}</span></div>
      ${pts.map(p => `<span class="tr-pill">${fmtDate(dayKey(p.finishedAt)).slice(0, 5)} · ${esc(p.loads[ex.id])}</span>`).join('')}</div>`;
  }).join('');
  h += rows || `<div class="tr-empty">${ic('target')}<div>Assim que você registrar suas cargas, sua evolução aparecerá aqui.</div></div>`;
  return h;
}

function vFb() {
  const r = curR(), w = curW();
  const ls = logsOf(r.rid, w.id);
  let h = `<div class="back-link" data-act="toRoutine">${ic('chev-l')}Rotina</div><div class="lux-kicker">Feedbacks</div><div class="lux-title">${esc(w.name)}</div>`;
  h += ls.length ? ls.map(l => `<div class="tr-fb"><small>${fmtDate(dayKey(l.finishedAt))} · ${esc(RPE[l.rpe] || '')}</small>
      <div style="font-size:13px">${l.comment ? esc(l.comment) : '<span style="color:var(--gray)">Sem comentário</span>'}</div>
      ${l.reply ? `<div class="tr-reply"><small>Resposta do professor</small>${esc(l.reply)}</div>` : ''}</div>`).join('')
    : `<div class="tr-empty">${ic('chat')}<div>Você ainda não enviou nenhum feedback deste treino.</div></div>`;
  return h;
}

function startTick() {
  stopTick();
  _tick = setInterval(() => {
    const el = $('#tr-timer'); if (!el || !S.run) return;
    el.textContent = dur((Date.now() - S.run.start) / 1000);
  }, 1000);
}
function stopTick() { if (_tick) { clearInterval(_tick); _tick = null; } }

function studentClick(e) {
  const a = e.target.closest('[data-act]'); if (!a) return;
  const act = a.dataset.act, i = +a.dataset.i, wi = +a.dataset.w;
  if (act === 'noop') return;
  if (act === 'toList') { S.view = 'list'; return renderStudent(); }
  if (act === 'openR') { S.r = i; S.view = 'routine'; return renderStudent(); }
  if (act === 'toRoutine') { S.view = 'routine'; return renderStudent(); }
  if (act === 'notes') return modal(`<h3>Orientações gerais</h3><div style="font-size:13px;line-height:1.7;white-space:pre-wrap;color:#d9d0bd">${esc(curR().notes)}</div>`);
  if (act === 'openW') { S.w = wi; S.view = 'workout'; return renderStudent(); }
  if (act === 'evo') { S.w = wi; S.view = 'evo'; return renderStudent(); }
  if (act === 'fb') { S.w = wi; S.view = 'fb'; return renderStudent(); }
  if (act === 'gif') { const ex = curW().exercises[i]; return modal(`<h3>${esc(ex.n)}</h3><img class="big" src="${gif(ex.id)}" alt="${esc(ex.n)}">`); }
  if (act === 'start') {
    const r = curR(), w = curW();
    S.run = { key: r.rid + '|' + w.id, start: Date.now(), done: {}, loads: {} }; saveRun(); return renderStudent();
  }
  if (act === 'chk') { const ex = curW().exercises[i]; S.run.done[ex.id] = !S.run.done[ex.id]; saveRun(); return renderStudent(); }
  if (act === 'load') {
    const ex = curW().exercises[i];
    const o = modal(`<h3>Carga utilizada</h3><div class="tr-field"><label>Atualize a carga utilizada</label><input id="tr-load" value="${esc(S.run.loads[ex.id] != null ? S.run.loads[ex.id] : (ex.carga || ''))}" placeholder="Ex: 40kg"></div><button class="tr-btn solid tr-fin" id="tr-load-ok">Atualizar</button>`);
    $('#tr-load-ok', o).onclick = () => { S.run.loads[ex.id] = $('#tr-load', o).value.trim(); saveRun(); closeModal(); renderStudent(); };
    return;
  }
  if (act === 'rest') { const ex = curW().exercises[i]; return restModal(ex.n, +ex.descanso || 60); }
  if (act === 'cancel') {
    const o = modal(`<h3>Cancelar treino?</h3><p style="font-size:13px;color:var(--gray);margin-bottom:16px">O que você marcou até agora será descartado.</p><div class="tr-row"><button class="tr-btn" data-x="1">Voltar</button><button class="tr-btn danger" id="tr-cancel-ok">Cancelar treino</button></div>`);
    $('#tr-cancel-ok', o).onclick = () => { S.run = null; saveRun(); closeModal(); S.view = 'routine'; renderStudent(); };
    return;
  }
  if (act === 'finish') return finishModal();
}

function restModal(name, secs) {
  let left = secs, running = false;
  const o = modal(`<h3>Intervalo</h3><div style="font-size:12px;color:var(--gray);text-align:center">${esc(name)}</div>
    <div class="tr-big" id="tr-rest-n">${mmss(left)}</div>
    <div class="tr-row"><button class="tr-btn solid" id="tr-rest-go">Iniciar</button><button class="tr-btn" id="tr-rest-stop">Zerar</button></div>`);
  const n = $('#tr-rest-n', o), go = $('#tr-rest-go', o);
  go.onclick = () => {
    if (running) { clearInterval(_rest); _rest = null; running = false; go.textContent = 'Continuar'; return; }
    running = true; go.textContent = 'Pausar';
    _rest = setInterval(() => {
      left--; n.textContent = mmss(left);
      if (left <= 0) { clearInterval(_rest); _rest = null; running = false; go.textContent = 'Iniciar'; left = secs; n.textContent = mmss(left); try { navigator.vibrate && navigator.vibrate([300, 150, 300]); } catch (e) {} LB().toast('Descanso finalizado'); }
    }, 1000);
  };
  $('#tr-rest-stop', o).onclick = () => { if (_rest) { clearInterval(_rest); _rest = null; } running = false; left = secs; n.textContent = mmss(left); go.textContent = 'Iniciar'; };
}

function finishModal() {
  const secs = (Date.now() - S.run.start) / 1000;
  const o = modal(`<h3>Concluir treino</h3>
    <div class="tr-box" style="margin-bottom:14px"><div style="font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--gray)">Tempo de treino</div><div class="tr-big" style="font-size:44px;margin:6px 0 0">${dur(secs)}</div></div>
    <div class="tr-field"><label>O que você achou dessa atividade?</label><select id="tr-rpe"><option value="">Selecione</option>${RPE.map((x, i) => `<option value="${i}">${x}</option>`).join('')}</select></div>
    <div class="tr-field"><label>Deixe seu comentário aqui</label><textarea id="tr-cmt" placeholder="Seu comentário aqui"></textarea></div>
    <button class="tr-btn solid tr-fin" id="tr-ok">Concluir</button>`);
  $('#tr-ok', o).onclick = async () => {
    const btn = $('#tr-ok', o); btn.disabled = true; btn.textContent = 'Salvando...';
    const me = LB().me(), r = curR(), w = curW(), now = Date.now();
    const loads = {}; (w.exercises || []).forEach(ex => { loads[ex.id] = runLoad(ex); });
    const rp = $('#tr-rpe', o).value;
    const log = {
      uid: me.uid, name: me.name || '', rid: r.rid, rname: r.name, wid: w.id, wname: w.name,
      startedAt: S.run.start, finishedAt: now, secs: Math.round(secs), rpe: rp === '' ? null : +rp,
      comment: $('#tr-cmt', o).value.trim(), loads, done: Object.keys(S.run.done || {}).filter(k => S.run.done[k]),
      reply: '', resolved: false
    };
    try {
      await LB().set('workoutLogs', me.uid + '_' + now, log);
      S.logs.push({ id: me.uid + '_' + now, ...log });
      S.run = null; saveRun();
      try { await LB().checkTreino(); } catch (e) {}
      closeModal();
      const o2 = modal(`<h3>Parabéns!</h3><div style="text-align:center;font-size:14px;margin-bottom:6px">Você concluiu o seu treino.</div>
        <div class="tr-big" style="font-size:54px">${dur(secs)}</div>
        <div style="text-align:center;font-size:12px;color:var(--gray);margin-bottom:18px">${esc(w.name)} · ${fmtDate(dayKey(now))}</div>
        <button class="tr-btn solid tr-fin" data-x="1">Fechar</button>`, () => { S.view = 'routine'; renderStudent(); });
      return o2;
    } catch (e) {
      btn.disabled = false; btn.textContent = 'Concluir';
      LB().toast('Não foi possível salvar. Tente novamente.');
    }
  };
}

// =====================================================================
//                              PROFESSOR
// =====================================================================
const A = { tab: 'rotinas', routines: [], students: [], logs: [], edit: null, loaded: false, fbDone: false };

async function admin() {
  const root = $('#admin-treinos-section'); if (!root) return;
  if (!root.dataset.bound) { root.dataset.bound = '1'; root.addEventListener('click', adminClick); root.addEventListener('input', adminInput); root.addEventListener('change', adminInput); }
  root.innerHTML = '<div class="tr-empty">Carregando...</div>';
  try {
    A.routines = await LB().list('routines');
    A.students = (await LB().list('users')).filter(u => !['pending', 'blocked', 'deleted'].includes(u.status)).sort((a, b) => String(a.name).localeCompare(String(b.name)));
    A.logs = await LB().list('workoutLogs');
    A.loaded = true;
  } catch (e) { root.innerHTML = '<div class="tr-empty">Não foi possível carregar. Confira a conexão e as regras.</div>'; return; }
  A.edit = null; A.tab = 'rotinas';
  renderAdmin();
}

function aSeg() {
  const t = [['rotinas', 'Rotinas'], ['exercicios', 'Exercícios'], ['feedbacks', 'Feedbacks'], ['frequencia', 'Frequência']];
  const pend = A.logs.filter(l => !l.resolved).length;
  return `<div class="seg" style="margin-bottom:16px">${t.map(([k, v]) => `<button class="${A.tab === k ? 'on' : ''}" data-act="tab" data-t="${k}">${v}${k === 'feedbacks' && pend ? ' (' + pend + ')' : ''}</button>`).join('')}</div>`;
}

function renderAdmin() {
  const root = $('#admin-treinos-section'); if (!root) return;
  if (A.edit) { root.innerHTML = vEditor(); return; }
  let h = aSeg();
  if (A.tab === 'rotinas') h += vRotinas();
  else if (A.tab === 'exercicios') h += vExerciciosTab();
  else if (A.tab === 'feedbacks') h += vFeedbacks();
  else if (A.tab === 'frequencia') h += vFreq();
  root.innerHTML = h;
  if (A.tab === 'exercicios') pickerRender($('#tr-lib'), null);
}

function vRotinas() {
  let h = `<button class="tr-btn solid tr-fin" data-act="newR" style="margin-bottom:14px">Nova rotina</button>`;
  if (!A.routines.length) return h + `<div class="tr-empty">${ic('list')}<div>Nenhuma rotina criada ainda.<br>Crie a primeira para atribuir aos alunos.</div></div>`;
  h += A.routines.sort((a, b) => String(a.name).localeCompare(String(b.name))).map(r => {
    const nw = (r.workouts || []).length, ne = (r.workouts || []).reduce((s, w) => s + (w.exercises || []).length, 0);
    return `<div class="tr-box"><h4>${esc(r.name)}</h4><div style="font-size:11px;color:var(--gray)">${esc([r.goal, r.level].filter(Boolean).join(' | '))} · ${nw} treino${nw !== 1 ? 's' : ''} · ${ne} exercício${ne !== 1 ? 's' : ''}</div>
      <div class="tr-row"><button class="tr-btn sm" data-act="editR" data-id="${r.id}">Editar</button><button class="tr-btn sm solid" data-act="assignR" data-id="${r.id}">Atribuir</button></div>
      <div class="tr-row"><button class="tr-btn sm" data-act="dupR" data-id="${r.id}">Duplicar</button><button class="tr-btn sm danger" data-act="delR" data-id="${r.id}">Excluir</button></div></div>`;
  }).join('');
  return h;
}

function vExerciciosTab() {
  return `<div class="tr-section-title">Biblioteca de exercícios</div><div id="tr-lib"></div>`;
}

function vFeedbacks() {
  const list = A.logs.filter(l => !!l.resolved === A.fbDone).sort((a, b) => b.finishedAt - a.finishedAt);
  let h = `<div class="tr-row" style="margin-bottom:14px"><button class="tr-btn sm ${A.fbDone ? '' : 'solid'}" data-act="fbTab" data-d="0">Pendentes</button><button class="tr-btn sm ${A.fbDone ? 'solid' : ''}" data-act="fbTab" data-d="1">Resolvidos</button></div>`;
  if (!list.length) return h + `<div class="tr-empty">${ic('chat')}<div>${A.fbDone ? 'Nenhum feedback resolvido.' : 'Nenhum feedback pendente.'}</div></div>`;
  h += list.map(l => `<div class="tr-box"><div style="display:flex;justify-content:space-between;gap:8px"><b style="font-size:14px">${esc(String(l.name || '').split(' ')[0] || 'Aluno')}</b><span class="tr-pill" style="margin:0">Treino</span></div>
      <div style="font-size:11px;color:var(--gray);margin:2px 0 8px">${esc(l.rname)} · ${esc(l.wname)} · ${fmtDate(dayKey(l.finishedAt))}</div>
      <div style="font-size:12px"><span style="color:var(--gray)">Intensidade:</span> ${esc(RPE[l.rpe] || '—')} · <span style="color:var(--gray)">Tempo:</span> ${dur(l.secs || 0)}</div>
      ${l.comment ? `<div style="font-size:13px;margin-top:8px">${esc(l.comment)}</div>` : ''}
      ${l.reply ? `<div class="tr-reply"><small>Sua resposta</small>${esc(l.reply)}</div>` : ''}
      ${l.resolved ? '' : `<div class="tr-field" style="margin:12px 0 8px"><textarea data-reply="${l.id}" placeholder="Responder ao aluno (opcional)"></textarea></div><button class="tr-btn solid tr-fin" data-act="resolve" data-id="${l.id}">Responder e resolver</button>`}</div>`).join('');
  return h;
}

function vFreq() {
  const since = Date.now() - 7 * 86400000;
  const by = {};
  A.logs.filter(l => l.finishedAt >= since).forEach(l => { by[l.uid] = by[l.uid] || { name: l.name, n: 0 }; by[l.uid].n++; });
  const rows = Object.values(by).sort((a, b) => b.n - a.n);
  const total = rows.reduce((s, x) => s + x.n, 0);
  const inactive = A.students.filter(s => !by[s.uid]).length;
  let h = `<div class="tr-section-title">Últimos 7 dias</div>`;
  h += rows.length ? `<table class="tr-table"><tr><th>Aluno</th><th style="text-align:right">Treinos</th></tr>${rows.map(r => `<tr><td>${esc(String(r.name || '').split(' ').slice(0, 2).join(' '))}</td><td style="text-align:right;color:var(--gold)">${r.n}</td></tr>`).join('')}
    <tr><td><b>Total</b></td><td style="text-align:right"><b>${total}</b></td></tr></table>` : `<div class="tr-empty">Nenhum treino finalizado nos últimos 7 dias.</div>`;
  h += `<div style="font-size:12px;color:var(--gray);margin-top:12px">${inactive} aluno${inactive !== 1 ? 's' : ''} sem nenhum treino na semana.</div>`;
  return h;
}

// ---------- editor de rotina
const newWorkout = () => ({ id: uid8(), name: 'Treino ' + (A.edit.workouts.length + 1), desc: '', exercises: [] });
function vEditor() {
  const r = A.edit;
  let h = `<div class="back-link" data-act="cancelEdit">${ic('chev-l')}Rotinas</div>
    <div class="lux-title" style="font-size:28px">${r._new ? 'Nova rotina' : 'Editar rotina'}</div>
    <div class="tr-field"><label>Nome da rotina</label><input data-bind="name" value="${esc(r.name)}" placeholder="Ex: Hipertrofia – Avançado"></div>
    <div class="tr-row"><div class="tr-field"><label>Objetivo</label><input data-bind="goal" value="${esc(r.goal)}" placeholder="Hipertrofia"></div>
      <div class="tr-field"><label>Nível</label><select data-bind="level">${['', 'Iniciante', 'Intermediário', 'Avançado'].map(x => `<option ${r.level === x ? 'selected' : ''}>${x}</option>`).join('')}</select></div></div>
    <div class="tr-field"><label>Orientações gerais (o aluno vê)</label><textarea data-bind="notes" placeholder="Aquecimento, cadência, descanso...">${esc(r.notes)}</textarea></div>`;
  h += (r.workouts || []).map((w, wi) => `<div class="tr-wk">
    <div class="tr-field"><label>Treino ${wi + 1}</label><input data-bind="w.${wi}.name" value="${esc(w.name)}" placeholder="Ex: Peito / Tríceps"></div>
    <div class="tr-field"><label>Descrição (opcional)</label><input data-bind="w.${wi}.desc" value="${esc(w.desc)}"></div>
    ${(w.exercises || []).map((ex, ei) => `<div class="tr-ed-ex"><div class="top"><img src="${gif(ex.id)}" loading="lazy" alt=""><b style="font-size:13px;font-weight:500;flex:1">${esc(ex.n)}</b>
        <div class="tr-mini"><button data-act="exUp" data-w="${wi}" data-e="${ei}">↑</button><button data-act="exDn" data-w="${wi}" data-e="${ei}">↓</button><button data-act="exRm" data-w="${wi}" data-e="${ei}">×</button></div></div>
      <div class="grid"><input class="tr-in" data-bind="w.${wi}.e.${ei}.series" value="${esc(ex.series)}" placeholder="Séries (3x10)"><input class="tr-in" data-bind="w.${wi}.e.${ei}.carga" value="${esc(ex.carga)}" placeholder="Carga"><input class="tr-in" data-bind="w.${wi}.e.${ei}.descanso" value="${esc(ex.descanso)}" placeholder="Descanso (s)" inputmode="numeric"></div>
      <input class="tr-in" style="margin-top:8px;font-size:13px" data-bind="w.${wi}.e.${ei}.notas" value="${esc(ex.notas)}" placeholder="Instruções (opcional)"></div>`).join('')}
    <div class="tr-row"><button class="tr-btn sm solid" data-act="addEx" data-w="${wi}">Adicionar exercício</button><button class="tr-btn sm danger" data-act="rmW" data-w="${wi}">Remover treino</button></div></div>`).join('');
  h += `<button class="tr-btn tr-fin" data-act="addW" style="margin-bottom:10px">Adicionar treino</button>
    <button class="tr-btn solid tr-fin" data-act="saveR">Salvar rotina</button>`;
  return h;
}

function setBind(path, val) {
  const p = path.split('.'), r = A.edit;
  if (p.length === 1) r[p[0]] = val;
  else if (p[0] === 'w' && p.length === 3) r.workouts[+p[1]][p[2]] = val;
  else if (p[0] === 'w' && p[2] === 'e') r.workouts[+p[1]].exercises[+p[3]][p[4]] = val;
}
function adminInput(e) { const b = e.target.dataset && e.target.dataset.bind; if (b && A.edit) setBind(b, e.target.value); }

// ---------- seletor de exercícios (também usado na aba Exercícios)
const P = { q: '', g: '' };
async function pickerRender(host, onPick) {
  if (!host) return;
  host.innerHTML = '<div class="tr-empty">Carregando exercícios...</div>';
  let cat; try { cat = await catalog(); } catch (e) { host.innerHTML = '<div class="tr-empty">Não foi possível carregar o catálogo de exercícios.</div>'; return; }
  const draw = () => {
    const q = P.q.trim().toLowerCase();
    const res = cat.filter(x => (!P.g || x.g === P.g) && (!q || x.n.toLowerCase().includes(q))).slice(0, 40);
    $('#tr-res', host).innerHTML = res.length ? res.map(x => `<div class="tr-pick" data-id="${esc(x.i)}"><img src="${gif(x.i)}" loading="lazy" alt=""><div><b>${esc(x.n)}</b><small>${esc(GRUPOS[x.g] || x.g)}</small></div></div>`).join('') : '<div class="tr-empty">Nenhum exercício encontrado.</div>';
  };
  host.innerHTML = `<div class="tr-field"><input id="tr-q" class="tr-in" placeholder="Buscar exercício..." value="${esc(P.q)}"></div>
    <div class="tr-chips"><button class="tr-chip ${P.g === '' ? 'on' : ''}" data-g="">Todos</button>${Object.keys(GRUPOS).map(g => `<button class="tr-chip ${P.g === g ? 'on' : ''}" data-g="${g}">${GRUPOS[g]}</button>`).join('')}</div>
    <div id="tr-res"></div>`;
  draw();
  $('#tr-q', host).oninput = ev => { P.q = ev.target.value; draw(); };
  host.querySelectorAll('.tr-chip').forEach(c => c.onclick = () => { P.g = c.dataset.g; host.querySelectorAll('.tr-chip').forEach(x => x.classList.toggle('on', x === c)); draw(); });
  $('#tr-res', host).onclick = ev => {
    const p = ev.target.closest('.tr-pick'); if (!p) return;
    const x = cat.find(c => c.i === p.dataset.id);
    if (onPick) onPick(x); else modal(`<h3>${esc(x.n)}</h3><img class="big" src="${gif(x.i)}" alt=""><div style="margin-top:10px;font-size:11px;color:var(--gray);letter-spacing:.1em;text-transform:uppercase">${esc(GRUPOS[x.g] || x.g)}</div>`);
  };
}

function adminClick(e) {
  const a = e.target.closest('[data-act]'); if (!a) return;
  const act = a.dataset.act, id = a.dataset.id, wi = +a.dataset.w, ei = +a.dataset.e;
  if (act === 'tab') { A.tab = a.dataset.t; return renderAdmin(); }
  if (act === 'fbTab') { A.fbDone = a.dataset.d === '1'; return renderAdmin(); }
  if (act === 'newR') { A.edit = { _new: true, id: uid8() + uid8(), name: '', goal: '', level: '', notes: '', workouts: [] }; A.edit.workouts.push(newWorkout()); return renderAdmin(); }
  if (act === 'editR') { const r = A.routines.find(x => x.id === id); A.edit = JSON.parse(JSON.stringify(r)); A.edit.workouts = A.edit.workouts || []; return renderAdmin(); }
  if (act === 'dupR') { const r = JSON.parse(JSON.stringify(A.routines.find(x => x.id === id))); r.id = uid8() + uid8(); r.name = r.name + ' (cópia)'; r._new = true; r.workouts.forEach(w => w.id = uid8()); A.edit = r; return renderAdmin(); }
  if (act === 'delR') {
    const r = A.routines.find(x => x.id === id);
    const o = modal(`<h3>Excluir rotina?</h3><p style="font-size:13px;color:var(--gray);margin-bottom:16px">“${esc(r.name)}” será removida da biblioteca. Alunos que já a receberam continuam com a cópia deles.</p><div class="tr-row"><button class="tr-btn" data-x="1">Cancelar</button><button class="tr-btn danger" id="tr-del-ok">Excluir</button></div>`);
    $('#tr-del-ok', o).onclick = async () => { try { await LB().del('routines', id); A.routines = A.routines.filter(x => x.id !== id); closeModal(); renderAdmin(); } catch (er) { LB().toast('Não foi possível excluir'); } };
    return;
  }
  if (act === 'cancelEdit') { A.edit = null; return renderAdmin(); }
  if (act === 'addW') { A.edit.workouts.push(newWorkout()); return renderAdmin(); }
  if (act === 'rmW') { A.edit.workouts.splice(wi, 1); return renderAdmin(); }
  if (act === 'exRm') { A.edit.workouts[wi].exercises.splice(ei, 1); return renderAdmin(); }
  if (act === 'exUp' && ei > 0) { const l = A.edit.workouts[wi].exercises; [l[ei - 1], l[ei]] = [l[ei], l[ei - 1]]; return renderAdmin(); }
  if (act === 'exDn') { const l = A.edit.workouts[wi].exercises; if (ei < l.length - 1) { [l[ei + 1], l[ei]] = [l[ei], l[ei + 1]]; return renderAdmin(); } return; }
  if (act === 'addEx') {
    const o = modal(`<h3>Adicionar exercício</h3><div id="tr-pk"></div><button class="tr-btn solid tr-fin" data-x="1" style="margin-top:10px">Concluir</button>`, () => renderAdmin());
    pickerRender($('#tr-pk', o), x => { A.edit.workouts[wi].exercises.push({ id: x.i, n: x.n, g: x.g, series: '3x10', carga: '', descanso: 60, notas: '' }); LB().toast('Adicionado: ' + x.n); });
    return;
  }
  if (act === 'saveR') return saveRoutine();
  if (act === 'assignR') return assignModal(id);
  if (act === 'resolve') return resolveLog(id);
}

async function saveRoutine() {
  const r = A.edit;
  if (!String(r.name).trim()) return LB().toast('Dê um nome à rotina');
  if (!r.workouts.length || r.workouts.some(w => !(w.exercises || []).length)) return LB().toast('Cada treino precisa de ao menos 1 exercício');
  const clean = {
    name: r.name.trim(), goal: (r.goal || '').trim(), level: r.level || '', notes: (r.notes || '').trim(), updatedAt: Date.now(),
    workouts: r.workouts.map(w => ({ id: w.id, name: String(w.name).trim() || 'Treino', desc: (w.desc || '').trim(),
      exercises: w.exercises.map(x => ({ id: x.id, n: x.n, g: x.g || '', series: String(x.series || '').trim(), carga: String(x.carga || '').trim(), descanso: parseInt(x.descanso, 10) || 0, notas: String(x.notas || '').trim() })) }))
  };
  try {
    await LB().set('routines', r.id, clean);
    const i = A.routines.findIndex(x => x.id === r.id);
    if (i >= 0) A.routines[i] = { id: r.id, ...clean }; else A.routines.push({ id: r.id, ...clean });
    A.edit = null; LB().toast('Rotina salva'); renderAdmin();
  } catch (e) { LB().toast('Não foi possível salvar a rotina'); }
}

function assignModal(id) {
  const r = A.routines.find(x => x.id === id);
  const o = modal(`<h3>Atribuir rotina</h3><div style="font-size:12px;color:var(--gray);margin-bottom:12px">${esc(r.name)}</div>
    <div class="tr-field"><label>Validade (dias)</label><input id="tr-days" class="tr-in" value="30" inputmode="numeric"></div>
    <div class="tr-field"><label>Alunos</label><div style="max-height:34vh;overflow:auto">${A.students.map(s => `<label class="tr-st"><input type="checkbox" value="${s.uid}"> ${esc(s.name)}</label>`).join('') || '<div style="color:var(--gray);font-size:13px">Nenhum aluno ativo.</div>'}</div></div>
    <button class="tr-btn solid tr-fin" id="tr-as-ok">Atribuir</button>`);
  $('#tr-as-ok', o).onclick = async () => {
    const uids = [...o.querySelectorAll('input[type=checkbox]:checked')].map(c => c.value);
    if (!uids.length) return LB().toast('Escolha ao menos um aluno');
    const days = Math.max(1, parseInt($('#tr-days', o).value, 10) || 30), today = LB().today();
    const btn = $('#tr-as-ok', o); btn.disabled = true; btn.textContent = 'Atribuindo...';
    try {
      for (const uid of uids) {
        const plan = (await LB().get('plans', uid)) || { routines: [] };
        const rs = (plan.routines || []).filter(x => x.rid !== r.id);
        rs.push({ rid: r.id, name: r.name, goal: r.goal || '', level: r.level || '', notes: r.notes || '', validFrom: today, validTo: addDays(today, days), workouts: r.workouts });
        await LB().set('plans', uid, { routines: rs, updatedAt: Date.now() });
      }
      closeModal(); LB().toast('Rotina atribuída a ' + uids.length + ' aluno' + (uids.length > 1 ? 's' : ''));
    } catch (e) { btn.disabled = false; btn.textContent = 'Atribuir'; LB().toast('Não foi possível atribuir'); }
  };
}

async function resolveLog(id) {
  const ta = document.querySelector(`[data-reply="${id}"]`);
  const reply = ta ? ta.value.trim() : '';
  try {
    await LB().upd('workoutLogs', id, { reply, resolved: true, repliedAt: Date.now() });
    const l = A.logs.find(x => x.id === id); if (l) { l.reply = reply; l.resolved = true; }
    LB().toast('Feedback resolvido'); renderAdmin();
  } catch (e) { LB().toast('Não foi possível salvar a resposta'); }
}

window.LBT = { student, admin };
