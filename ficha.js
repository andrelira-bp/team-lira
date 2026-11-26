// =====================================================================
// L BODY — FICHA DO ALUNO: anamnese, avaliações físicas, fotos e metas.
// Aluno: "Minha evolução" e "Anamnese". Professor: "Ficha completa" do aluno.
// Usa a ponte window.LB criada no index.html.
// =====================================================================
const LB = () => window.LB;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ic = n => `<svg class="ic"><use href="#i-${n}"/></svg>`;
const rid = () => Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-3);
const today = () => LB().today();
const fmtBR = k => { if (!k) return ''; const [y, m, d] = String(k).slice(0, 10).split('-'); return `${d}/${m}/${y}`; };
const daysLeft = k => Math.round((new Date(k + 'T00:00:00') - new Date(today() + 'T00:00:00')) / 86400000);
const num = v => { const n = parseFloat(String(v).replace(',', '.')); return isNaN(n) ? null : n; };
const fix1 = n => (Math.round(n * 10) / 10).toString().replace('.', ',');

// ----------------------------------------------------------------- telas
let _s = null;
function closeSheet() { if (_s) { _s.remove(); _s = null; document.body.style.overflow = ''; } }
function sheet(kicker, title, html) {
  closeSheet();
  const o = document.createElement('div');
  o.className = 'lbs'; o.style.zIndex = 6600;
  o.innerHTML = `<div class="lbs-in"><div class="back-link" data-x="1">${ic('chev-l')}Voltar</div>
    <div class="lux-kicker">${kicker}</div><div class="lux-title">${title}</div><div class="fi-body">${html}</div></div>`;
  o.addEventListener('click', e => { if (e.target.closest('[data-x]')) closeSheet(); });
  document.body.appendChild(o);
  document.body.style.overflow = 'hidden';
  _s = o;
  return o;
}
function pop(html) {
  const o = document.createElement('div');
  o.className = 'tr-ovl'; o.style.zIndex = 8200;
  o.innerHTML = `<div class="tr-modal"><button class="tr-x" data-x="1" aria-label="Fechar">×</button>${html}</div>`;
  o.addEventListener('click', e => { if (e.target === o || e.target.dataset.x) o.remove(); });
  document.body.appendChild(o);
  return o;
}

// =====================================================================
//                              ANAMNESE
// =====================================================================
const SINT = ['Dor de cabeça', 'Insônia', 'Dor de garganta', 'Aftas', 'Acne', 'Perda de cabelo', 'Suor excessivo', 'Asma ou bronquite', 'Náuseas, vômito', 'Diarréia', 'Constipação', 'Azia', 'Dor muscular (não induzida por exercício)', 'Dor articular (não induzida por exercício)', 'Fadiga', 'Hiperatividade', 'Ansiedade', 'Depressão', 'Frequentemente doente'];
const FREQ = ['Nunca', 'Raramente', 'Ocasionalmente', 'Frequentemente'];
const DIAS = [['seg', 'segunda-feira'], ['ter', 'terça-feira'], ['qua', 'quarta-feira'], ['qui', 'quinta-feira'], ['sex', 'sexta-feira'], ['sab', 'sábado'], ['dom', 'domingo']];
const sel = (a, v) => a.map(x => [x, x]);
// campo: [chave, rótulo, tipo, obrigatório, opções]
const AN = [
  { id: 'pessoal', t: 'Dados pessoais', d: 'Usamos apenas para o seu cadastro e contrato. Se for menor de idade, preencha com os dados do responsável.', f: [
    ['nome', 'Nome completo', 'text', 1], ['plano', 'Plano contratado', 'text', 1], ['nasc', 'Data de nascimento', 'date', 1],
    ['tel', 'Telefone com DDD', 'tel', 1], ['cpf', 'CPF', 'text', 1], ['estado', 'Estado onde mora', 'text', 1],
    ['end', 'Endereço completo (CEP, bairro, rua e número)', 'area', 1]] },
  { id: 'corpo', t: 'Objetivo e saúde', d: 'Quanto mais detalhes, melhor o seu plano.', f: [
    ['obj', 'Em poucas palavras, qual o seu objetivo?', 'text'], ['altura', 'Altura (em metros)', 'text', 1],
    ['peso', 'Peso atual. Quando foi a última vez que se pesou? Tem balança em casa?', 'area', 1],
    ['pesoalt', 'Teve alteração de peso nos últimos 3 meses? Explique', 'area', 1], ['ocup', 'Qual a sua ocupação (trabalho)?', 'area', 1],
    ['renda', 'Renda per capita (por pessoa) da sua residência', 'area', 1], ['sint', 'Sintomas: com que frequência você sente cada um?', 'sint', 1],
    ['sintx', 'Algum sintoma que queira adicionar?', 'area'], ['cozinha', 'Quem cozinha suas refeições?', 'text', 1],
    ['mora', 'Mora com quantas pessoas? Qual o parentesco?', 'text', 1],
    ['bristol', 'Nível das suas fezes na escala de Bristol (1 a 7)', 'select', 1, sel(['1', '2', '3', '4', '5', '6', '7'])],
    ['armstrong', 'Cor da sua urina na escala de Armstrong (1 a 8)', 'select', 1, sel(['1', '2', '3', '4', '5', '6', '7', '8'])]] },
  { id: 'treino', t: 'Treinamento', f: [
    ['exerc', 'Qual exercício físico você pratica?', 'text', 1], ['tempo', 'Há quanto tempo você pratica?', 'area', 1], ['acad', 'Qual o tipo de academia que você frequenta?', 'text', 1],
    ['horario', 'Qual horário você treina?', 'text', 1], ['freq', 'Com que frequência você treina?', 'text', 1], ['disp', 'Quanto tempo tem disponível para treinar?', 'text', 1],
    ['foco1', 'Qual musculatura tem maior enfoque em desenvolver agora?', 'text', 1], ['foco2', 'Qual seria o seu segundo maior enfoque?', 'text', 1],
    ['divisao', 'Qual a sua divisão de treino atual?', 'area', 1], ['exercs', 'Nessa divisão, quais exercícios e quantas séries de cada um?', 'area', 1],
    ['limit', 'Tem alguma limitação ou desconforto articular? Qual?', 'area', 1], ['anab', 'Já fez uso de esteroides anabolizantes? Quais e em que doses?', 'area', 1],
    ['outros', 'Pratica algum outro esporte? Com que frequência e duração?', 'text', 1], ['aparelhos', 'Aparelhos da sua academia (costas, peito, ombros, pernas) e o que sente falta', 'area']] },
  { id: 'vida', t: 'Hábitos de vida', f: [
    ['sono', 'De 0 a 10, quão reparador é o seu sono?', 'scale', 1], ['horas', 'Quantas horas, em média, você dorme por noite?', 'text', 1],
    ['sonoobs', 'Alguma observação sobre o seu sono?', 'area'], ['fuma', 'Você fuma? Se sim, com que frequência?', 'area', 1], ['alcool', 'Consome bebidas alcoólicas? Com que frequência?', 'area', 1]] },
  { id: 'rotina', t: 'Rotina', d: 'Uma das partes mais importantes. Da hora que acorda ao horário que vai dormir, com horários. Se for igual a outro dia, escreva "igual ao dia x".', f:
    DIAS.map(([k, n]) => ['rot_' + k, 'Rotina na ' + n, 'area', 1]) },
  { id: 'alim', t: 'Hábitos alimentares', d: 'Seja o mais específico possível: horário, o que come e onde.', f: [
    ['supl', 'Toma algum suplemento? Qual, como (horários e doses)?', 'area', 1], ['alergia', 'Possui alguma alergia alimentar? Qual?', 'text', 1],
    ['intol', 'Possui alguma intolerância alimentar? Qual?', 'area', 1], ['nogosta', 'Qual alimento você não gosta? (não entra no plano)', 'area', 1],
    ['ansied', 'Você come movido pela ansiedade com frequência? Explique', 'area', 1], ['cafe', 'Café da manhã: horário, o que come e onde', 'area', 1],
    ['lanche1', 'Lanche do meio da manhã: horário, o que come e onde', 'area', 1], ['almoco', 'Almoço: horário, o que come e onde', 'area', 1],
    ['lanche2', 'Refeição do meio da tarde: horário, o que come e onde', 'area', 1], ['fimtarde', 'No final da tarde ou começo da noite você...', 'area', 1],
    ['jantar', 'Jantar: horário, o que come e onde', 'area', 1], ['ceia', 'Ceia: horário, o que come e onde', 'area', 1],
    ['pesa', 'Tem o hábito de pesar o que come? Tem balança de cozinha?', 'area', 1], ['medic', 'Usa algum medicamento contínuo? Qual e que dose?', 'area', 1],
    ['cirurgia', 'Já passou por algum procedimento cirúrgico? Conte', 'area', 1], ['desejo', 'Algum alimento, mesmo não "saudável", que gostaria muito na dieta?', 'area', 1],
    ['objdet', 'Detalhe o seu objetivo: algum número em mente, físico que te inspira, ganho de massa ou perda de gordura?', 'area', 1]] },
  { id: 'regras', t: 'Regras da consultoria', d: 'Para termos a melhor relação entre personal e aluno.', f: [
    ['regras', '', 'rules'], ['ciente', 'Estou ciente das regras da consultoria', 'check', 1]] }
];
const RULES = [
  'Evite mandar áudios. Quando enviar, será considerado um assunto importante, e a resposta pode demorar mais.',
  'Quem ignorar as mensagens e não preencher os formulários de check-in não terá direito a renovação da consultoria.',
  'Atualizações e ajustes do protocolo têm prazo de até 72h úteis. Em dias úteis, você é respondido em até 24h.',
  'Se a atualização do físico não for preenchida em até 15 dias após o envio, não será possível atualizar o protocolo.'
];

const emailKey = e => String(e || '').toLowerCase().replace(/[^a-z0-9]/g, '_');
// Anamnese importada do Google Forms fica guardada por e-mail (pré-cadastro) até o aluno entrar no app.
async function anamStatus() {
  const me = LB().me();
  try {
    let a = await LB().get('anamnese', me.uid);
    if (!a && me.email) {
      const key = emailKey(me.email), p = await LB().get('anamnesePre', key);
      if (p) {
        a = { uid: me.uid, name: me.name || '', data: p.data || {}, step: AN.length - 1, done: true, imported: true, updatedAt: Date.now(), completedAt: p.importedAt || Date.now() };
        await LB().set('anamnese', me.uid, a);
        try { await LB().del('anamnesePre', key); } catch (e) {}
        if (!me.phone && a.data.tel) { try { await LB().upd('users', me.uid, { phone: a.data.tel }); } catch (e) {} }
      }
    }
    return !!(a && a.done);
  } catch (e) { return true; }
}

function fieldHtml(f, v) {
  const [k, label, type, req, opts] = f; const val = v == null ? '' : v;
  const L = `<label>${esc(label)}${req ? ' *' : ''}</label>`;
  if (type === 'rules') return `<div class="tr-box">${RULES.map((r, i) => `<p style="font-size:13px;color:#cfc6b2;margin-bottom:10px"><b style="color:var(--gold)">${i + 1}.</b> ${esc(r)}</p>`).join('')}</div>`;
  if (type === 'check') return `<label class="fi-check"><input type="checkbox" data-k="${k}" ${val ? 'checked' : ''}> <span>${esc(label)} *</span></label>`;
  if (type === 'area') return `<div class="tr-field">${L}<textarea data-k="${k}">${esc(val)}</textarea></div>`;
  if (type === 'select') return `<div class="tr-field">${L}<select data-k="${k}"><option value="">Selecione</option>${opts.map(([a, b]) => `<option value="${a}" ${String(val) === a ? 'selected' : ''}>${b}</option>`).join('')}</select></div>`;
  if (type === 'scale') return `<div class="tr-field">${L}<div class="rt rt10" data-sc="${k}">${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => `<button type="button" class="rt-b ${+val === i ? 'on' : ''}" data-v="${i}">${i}</button>`).join('')}</div></div>`;
  if (type === 'sint') {
    const o = (val && typeof val === 'object') ? val : {};
    return `<div class="tr-field">${L}${SINT.map((s, i) => `<div class="fi-sint"><span>${esc(s)}</span><select data-sint="${i}"><option value="">—</option>${FREQ.map(x => `<option ${o[s] === x ? 'selected' : ''}>${x}</option>`).join('')}</select></div>`).join('')}</div>`;
  }
  return `<div class="tr-field">${L}<input type="${type === 'date' ? 'date' : type === 'tel' ? 'tel' : 'text'}" data-k="${k}" value="${esc(val)}"></div>`;
}
function readStep(root, sec, data) {
  sec.f.forEach(f => {
    const [k, , type] = f;
    if (type === 'rules') return;
    if (type === 'check') { const e = $(`[data-k="${k}"]`, root); data[k] = !!(e && e.checked); }
    else if (type === 'scale') { const on = $(`[data-sc="${k}"] .rt-b.on`, root); data[k] = on ? +on.dataset.v : ''; }
    else if (type === 'sint') { const o = {}; $$('[data-sint]', root).forEach(s => { if (s.value) o[SINT[+s.dataset.sint]] = s.value; }); data[k] = o; }
    else { const e = $(`[data-k="${k}"]`, root); data[k] = e ? e.value.trim() : ''; }
  });
}
const filled = (f, d) => { const v = d[f[0]]; return f[2] === 'sint' ? v && Object.keys(v).length >= SINT.length : f[2] === 'check' ? !!v : v !== undefined && v !== null && String(v).trim() !== ''; };

async function anamneseWizard() {
  const me = LB().me();
  const o = sheet('Cadastro completo', 'Minha <em>anamnese</em>', '<div class="tr-empty">Carregando...</div>');
  let cur = null; try { cur = await LB().get('anamnese', me.uid); } catch (e) {}
  const data = Object.assign({ nome: me.name || '' }, (cur && cur.data) || {});
  let step = 0;
  const body = $('.fi-body', o);
  const draw = () => {
    const sec = AN[step];
    body.innerHTML = `<div class="fi-prog"><i style="width:${Math.round((step + 1) / AN.length * 100)}%"></i></div>
      <p class="lux-sub">Etapa ${step + 1} de ${AN.length} · <b style="color:var(--gold-lt)">${sec.t}</b></p>${sec.d ? `<p style="font-size:12px;color:var(--gray);margin:-8px 0 16px">${esc(sec.d)}</p>` : ''}
      <div id="an-f">${sec.f.map(f => fieldHtml(f, data[f[0]])).join('')}</div>
      <div class="tr-row" style="margin-top:14px">${step ? '<button class="tr-btn" id="an-b">Voltar</button>' : ''}<button class="tr-btn solid" id="an-n">${step === AN.length - 1 ? 'Concluir' : 'Continuar'}</button></div>
      <div id="an-e" style="color:#ff8a84;font-size:12px;margin-top:8px"></div>`;
    $$('.rt', body).forEach(g => g.addEventListener('click', e => { const b = e.target.closest('.rt-b'); if (!b) return; $$('.rt-b', g).forEach(x => x.classList.remove('on')); b.classList.add('on'); }));
    const b = $('#an-b', body); if (b) b.onclick = () => { readStep(body, sec, data); step--; draw(); window.scrollTo(0, 0); o.scrollTop = 0; };
    $('#an-n', body).onclick = async () => {
      readStep(body, sec, data);
      const miss = sec.f.filter(f => f[3] && !filled(f, data));
      if (miss.length) { $('#an-e', body).textContent = 'Faltam campos obrigatórios (*): ' + miss.length + '. Preencha para continuar.'; return; }
      const last = step === AN.length - 1, btn = $('#an-n', body); btn.disabled = true;
      try {
        await LB().set('anamnese', me.uid, { uid: me.uid, name: me.name || data.nome || '', data, step: last ? step : step + 1, done: last, updatedAt: Date.now(), completedAt: last ? Date.now() : ((cur && cur.completedAt) || 0) });
        if (last) { LB().toast('Anamnese concluída. Obrigado!'); if (window.LBSound) LBSound.play('win'); closeSheet(); if (window.LBX) LBX.home(); return; }
        step++; draw(); o.scrollTop = 0;
      } catch (e) { btn.disabled = false; $('#an-e', body).textContent = 'Não foi possível salvar agora. Tente de novo.'; }
    };
  };
  if (cur && !cur.done && cur.step) step = Math.min(cur.step, AN.length - 1);
  draw();
}

async function anamneseEntry() {
  const me = LB().me();
  let a = null; try { a = await LB().get('anamnese', me.uid); } catch (e) {}
  if (!a || !a.done) return anamneseWizard();
  const o = sheet('Cadastro completo', 'Minha <em>anamnese</em>', `<div class="tr-box"><b>Anamnese concluída</b><div class="tr-status">Atualizada em ${fmtBR(new Date(a.updatedAt - 3 * 3600000).toISOString().slice(0, 10))}</div>
    <p style="font-size:12px;color:var(--gray);margin-bottom:10px">Se algo mudou (rotina, saúde, objetivo), atualize para o professor ajustar o seu plano.</p>
    <button class="tr-btn solid tr-fin" id="an-edit">Atualizar minhas respostas</button></div>`);
  $('#an-edit', o).onclick = anamneseWizard;
}

function anamneseView(a) {
  if (!a) return '<div class="tr-empty">O aluno ainda não preencheu a anamnese.</div>';
  const d = a.data || {};
  let h = `<div class="tr-status" style="margin-bottom:12px">${a.done ? 'Concluída' : 'Em andamento (etapa ' + ((a.step || 0) + 1) + ' de ' + AN.length + ')'} · atualizada em ${fmtBR(new Date(a.updatedAt - 3 * 3600000).toISOString().slice(0, 10))}</div>`;
  AN.forEach(sec => {
    const rows = sec.f.filter(f => f[2] !== 'rules' && f[2] !== 'check' && d[f[0]] !== undefined && d[f[0]] !== '' && !(f[2] === 'sint' && !Object.keys(d[f[0]] || {}).length));
    if (!rows.length) return;
    h += `<div class="tr-section-title">${sec.t}</div>` + rows.map(f => {
      const v = d[f[0]];
      const txt = f[2] === 'sint' ? Object.entries(v).map(([k, x]) => `${k}: ${x}`).join('\n') : f[2] === 'date' ? fmtBR(v) : String(v);
      return `<div class="fi-row"><small>${esc(f[1])}</small><div>${esc(txt)}</div></div>`;
    }).join('');
  });
  return h;
}

// =====================================================================
//                         AVALIAÇÕES (gráfico)
// =====================================================================
const MEDS = [['cintura', 'Cintura'], ['abdomen', 'Abdômen'], ['quadril', 'Quadril'], ['peito', 'Peitoral'], ['bracoD', 'Braço dir.'], ['bracoE', 'Braço esq.'], ['coxaD', 'Coxa dir.'], ['coxaE', 'Coxa esq.'], ['pant', 'Panturrilha']];
function chart(pts, unit) {
  if (pts.length < 2) return '<div class="tr-empty" style="padding:16px;margin-bottom:12px">Registre pelo menos duas avaliações para ver o gráfico.</div>';
  const W = 320, H = 140, P = 30, vs = pts.map(p => p.v); let mn = Math.min(...vs), mx = Math.max(...vs); if (mn === mx) { mn -= 1; mx += 1; }
  const x = i => P + i * (W - 2 * P) / (pts.length - 1), y = v => H - P - (v - mn) * (H - 2 * P) / (mx - mn);
  const line = pts.map((p, i) => `${x(i)},${y(p.v)}`).join(' ');
  const lab = (i, anchor) => `<text x="${x(i)}" y="${y(pts[i].v) - 9}" text-anchor="${anchor}" class="ch-v">${fix1(pts[i].v)}${unit}</text>`;
  return `<svg viewBox="0 0 ${W} ${H}" class="chart"><defs><linearGradient id="chg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#C9A45C" stop-opacity=".35"/><stop offset="1" stop-color="#C9A45C" stop-opacity="0"/></linearGradient></defs>
    <polygon points="${x(0)},${H - P} ${line} ${x(pts.length - 1)},${H - P}" fill="url(#chg)"/>
    <polyline points="${line}" fill="none" stroke="#E8CE92" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
    ${pts.map((p, i) => `<circle cx="${x(i)}" cy="${y(p.v)}" r="3.5" fill="#050505" stroke="#E8CE92" stroke-width="2"/>`).join('')}
    ${lab(0, 'start')}${lab(pts.length - 1, 'end')}
    <text x="${P}" y="${H - 8}" class="ch-d">${fmtBR(pts[0].d).slice(0, 5)}</text><text x="${W - P}" y="${H - 8}" text-anchor="end" class="ch-d">${fmtBR(pts[pts.length - 1].d).slice(0, 5)}</text></svg>`;
}
async function loadAssess(uid) {
  try { return (await LB().listWhere('assessments', 'uid', uid)).sort((a, b) => a.date.localeCompare(b.date) || (a.createdAt || 0) - (b.createdAt || 0)); } catch (e) { return []; }
}
function assessHtml(list) {
  const series = k => list.filter(a => a[k] != null && a[k] !== '').map(a => ({ d: a.date, v: +a[k] }));
  const ps = series('peso'), bf = series('bf');
  let h = '';
  if (ps.length) { const dp = ps.length > 1 ? ps[ps.length - 1].v - ps[0].v : 0; h += `<div class="card-title">Peso${ps.length > 1 ? ` · ${dp > 0 ? '+' : ''}${fix1(dp)} kg desde o início` : ''}</div>${chart(ps, ' kg')}`; }
  if (bf.length) { const db = bf.length > 1 ? bf[bf.length - 1].v - bf[0].v : 0; h += `<div class="card-title">% de gordura${bf.length > 1 ? ` · ${db > 0 ? '+' : ''}${fix1(db)} pontos` : ''}</div>${chart(bf, '%')}`; }
  if (!list.length) return '<div class="tr-empty">Nenhuma avaliação registrada ainda.</div>';
  const desc = [...list].reverse();
  h += `<div class="card-title" style="margin-top:6px">Histórico</div>` + desc.map((a, i) => {
    const prev = desc[i + 1], d = (k) => prev && prev[k] != null && a[k] != null && prev[k] !== '' && a[k] !== '' ? +a[k] - +prev[k] : null;
    const dl = (v, u) => v == null ? '' : ` <em class="${v < 0 ? 'dn' : v > 0 ? 'up' : ''}">${v > 0 ? '+' : ''}${fix1(v)}${u}</em>`;
    const meds = MEDS.filter(([k]) => a[k] != null && a[k] !== '').map(([k, n]) => `<span>${n} ${fix1(+a[k])} cm${dl(d(k), '')}</span>`).join('');
    return `<div class="tr-box"><div class="fbk-h"><b>${fmtBR(a.date)}</b><span class="fbk-ok">${a.source === 'aluno' ? 'enviada pelo aluno' : 'professor'}</span>${a.canDel ? '' : ''}</div>
      <div class="fb-rates">${a.peso != null && a.peso !== '' ? `<span>Peso ${fix1(+a.peso)} kg${dl(d('peso'), ' kg')}</span>` : ''}${a.bf != null && a.bf !== '' ? `<span>Gordura ${fix1(+a.bf)}%${dl(d('bf'), '')}</span>` : ''}${meds}</div>
      ${a.notes ? `<div class="fbk-t">${esc(a.notes)}</div>` : ''}<button class="tr-btn sm danger" data-as-del="${a.id}">Excluir</button></div>`;
  }).join('');
  return h;
}
function assessForm(ctx, done) {
  const o = pop(`<h3>Nova avaliação</h3>
    <div class="tr-field"><label>Data</label><input id="as-d" type="date" value="${today()}"></div>
    <div class="tr-row"><div class="tr-field"><label>Peso (kg)</label><input id="as-p" inputmode="decimal"></div><div class="tr-field"><label>Gordura (%)</label><input id="as-bf" inputmode="decimal"></div></div>
    <div class="tr-section-title">Medidas (cm) — opcional</div>
    <div class="fi-meds">${MEDS.map(([k, n]) => `<div class="tr-field"><label>${n}</label><input data-m="${k}" inputmode="decimal"></div>`).join('')}</div>
    <div class="tr-field"><label>Observações</label><textarea id="as-n"></textarea></div>
    <button class="tr-btn solid tr-fin" id="as-ok">Salvar avaliação</button>`);
  $('#as-ok', o).onclick = async () => {
    const doc = { uid: ctx.uid, name: ctx.name || '', date: $('#as-d', o).value || today(), peso: num($('#as-p', o).value), bf: num($('#as-bf', o).value), notes: $('#as-n', o).value.trim(), source: ctx.admin ? 'professor' : 'aluno', createdAt: Date.now() };
    MEDS.forEach(([k]) => { doc[k] = num($(`[data-m="${k}"]`, o).value); });
    if (doc.peso == null && doc.bf == null && !MEDS.some(([k]) => doc[k] != null)) { LB().toast('Preencha pelo menos um valor'); return; }
    try { await LB().set('assessments', rid(), doc); o.remove(); LB().toast('Avaliação salva'); done(); } catch (e) { LB().toast('Erro ao salvar: ' + (e.code || e.message)); }
  };
}

// =====================================================================
//                              FOTOS
// =====================================================================
const POSES = [['frente', 'Frente'], ['costas', 'Costas'], ['lado', 'Lado'], ['livre', 'Livre']];
function compress(file, max = 1000) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => {
      const im = new Image();
      im.onload = () => {
        const s = Math.min(1, max / Math.max(im.width, im.height)), w = Math.round(im.width * s), h = Math.round(im.height * s);
        const c = document.createElement('canvas'); c.width = w; c.height = h; c.getContext('2d').drawImage(im, 0, 0, w, h);
        let q = 0.72, d = c.toDataURL('image/jpeg', q);
        while (d.length > 850000 && q > 0.35) { q -= 0.1; d = c.toDataURL('image/jpeg', q); }
        res(d);
      };
      im.onerror = rej; im.src = r.result;
    };
    r.onerror = rej; r.readAsDataURL(file);
  });
}
async function loadPhotos(uid) {
  try { return (await LB().listWhere('progressPhotos', 'uid', uid)).sort((a, b) => b.date.localeCompare(a.date) || b.createdAt - a.createdAt); } catch (e) { return []; }
}
function photosHtml(list) {
  let h = `<div class="tr-box"><b>Adicionar foto</b><div class="tr-field" style="margin-top:10px"><label>Posição</label><select id="ph-pose">${POSES.map(([k, n]) => `<option value="${k}">${n}</option>`).join('')}</select></div>
    <div class="tr-field"><label>Data</label><input id="ph-d" type="date" value="${today()}"></div>
    <label class="tr-btn solid tr-fin fi-up">${ic('camera')} Tirar ou escolher foto<input id="ph-f" type="file" accept="image/*" hidden></label>
    <p style="font-size:11px;color:var(--gray);margin-top:8px">Dica: celular na altura do tronco, boa iluminação, corpo todo à vista. As fotos ficam visíveis só para você e o professor.</p></div>`;
  if (!list.length) return h + '<div class="tr-empty">Nenhuma foto enviada ainda.</div>';
  // comparação: primeira x mais recente por posição
  const cmp = POSES.map(([k, n]) => { const l = list.filter(p => p.pose === k); return l.length > 1 ? { n, a: l[l.length - 1], b: l[0] } : null; }).filter(Boolean);
  if (cmp.length) h += `<div class="card-title" style="margin-top:6px">Antes e depois</div>` + cmp.map(c => `<div class="tr-box"><b>${c.n}</b><div class="fi-cmp"><figure><img src="${c.a.d}" data-ph="${c.a.id}"><figcaption>${fmtBR(c.a.date)}</figcaption></figure><figure><img src="${c.b.d}" data-ph="${c.b.id}"><figcaption>${fmtBR(c.b.date)}</figcaption></figure></div></div>`).join('');
  const byDate = {}; list.forEach(p => { (byDate[p.date] = byDate[p.date] || []).push(p); });
  h += `<div class="card-title" style="margin-top:6px">Todas as fotos</div>` + Object.keys(byDate).sort().reverse().map(d => `<div class="fi-day"><b>${fmtBR(d)}</b><div class="fi-grid">${byDate[d].map(p => `<figure><img src="${p.d}" data-ph="${p.id}" loading="lazy"><figcaption>${(POSES.find(x => x[0] === p.pose) || [0, p.pose])[1]}</figcaption></figure>`).join('')}</div></div>`).join('');
  return h;
}

// =====================================================================
//                              METAS
// =====================================================================
const METRICS = [['peso', 'Peso (kg)'], ['bf', 'Gordura (%)'], ['livre', 'Outra meta (marco manual)']];
async function loadGoals(uid) { try { const g = await LB().get('goals', uid); return (g && g.items) || []; } catch (e) { return []; } }
function goalsHtml(items, assess) {
  const lastOf = k => { const a = [...assess].reverse().find(x => x[k] != null && x[k] !== ''); return a ? +a[k] : null; };
  let h = '<button class="tr-btn solid tr-fin" data-g="new" style="margin-bottom:14px">' + ic('plus') + ' Nova meta</button>';
  if (!items.length) return h + '<div class="tr-empty">Nenhuma meta definida. Que tal começar com uma?</div>';
  h += items.map(g => {
    let prog = g.done ? 100 : 0, txt = '';
    if (g.metric !== 'livre' && !g.done) {
      const cur = lastOf(g.metric), s = +g.start, t = +g.target;
      if (cur != null && !isNaN(s) && !isNaN(t) && s !== t) { prog = Math.max(0, Math.min(100, Math.round((cur - s) / (t - s) * 100))); txt = `Atual ${fix1(cur)} · meta ${fix1(t)} · faltam ${fix1(Math.abs(t - cur))}`; }
      else txt = `Meta ${fix1(t)}`;
    }
    const dl = g.deadline ? daysLeft(g.deadline) : null;
    const when = g.deadline ? (g.done ? '' : dl < 0 ? `prazo venceu em ${fmtBR(g.deadline)}` : dl === 0 ? 'prazo é hoje' : `faltam ${dl} dias (${fmtBR(g.deadline)})`) : '';
    return `<div class="tr-box ${g.done ? 'gdone' : ''}"><div class="fbk-h"><b>${esc(g.title)}</b>${g.done ? '<span class="fbk-ok">concluída</span>' : ''}</div>
      <div class="xp-bar-bg" style="margin:10px 0 6px"><div class="xp-bar-fill" style="width:${prog}%"></div></div>
      <div style="font-size:11px;color:var(--gray)">${esc([txt, when].filter(Boolean).join(' · '))}</div>
      <div class="tr-row"><button class="tr-btn sm" data-g="done" data-id="${g.id}">${g.done ? 'Reabrir' : 'Concluir'}</button><button class="tr-btn sm danger" data-g="del" data-id="${g.id}">Excluir</button></div></div>`;
  }).join('');
  return h;
}
function goalForm(ctx, assess, items, done) {
  const lastOf = k => { const a = [...assess].reverse().find(x => x[k] != null && x[k] !== ''); return a ? a[k] : ''; };
  const o = pop(`<h3>Nova meta</h3>
    <div class="tr-field"><label>Título</label><input id="gl-t" placeholder="Ex.: Chegar a 78 kg"></div>
    <div class="tr-field"><label>Tipo</label><select id="gl-m">${METRICS.map(([k, n]) => `<option value="${k}">${n}</option>`).join('')}</select></div>
    <div class="tr-row"><div class="tr-field"><label>Valor atual</label><input id="gl-s" inputmode="decimal" value="${esc(lastOf('peso'))}"></div><div class="tr-field"><label>Valor da meta</label><input id="gl-g" inputmode="decimal"></div></div>
    <div class="tr-field"><label>Prazo</label><input id="gl-d" type="date"></div>
    <button class="tr-btn solid tr-fin" id="gl-ok">Salvar meta</button>`);
  $('#gl-m', o).onchange = e => { $('#gl-s', o).value = e.target.value === 'livre' ? '' : lastOf(e.target.value); };
  $('#gl-ok', o).onclick = async () => {
    const title = $('#gl-t', o).value.trim(); if (!title) { LB().toast('Dê um título à meta'); return; }
    const m = $('#gl-m', o).value;
    if (m !== 'livre' && num($('#gl-g', o).value) == null) { LB().toast('Informe o valor da meta'); return; }
    const item = { id: rid(), title, metric: m, start: num($('#gl-s', o).value), target: num($('#gl-g', o).value), deadline: $('#gl-d', o).value || '', done: false, createdAt: Date.now() };
    try { await LB().set('goals', ctx.uid, { uid: ctx.uid, items: [...items, item] }); o.remove(); LB().toast('Meta salva'); done(); } catch (e) { LB().toast('Erro ao salvar: ' + (e.code || e.message)); }
  };
}

// =====================================================================
//                    PAINÉIS (aluno e professor)
// =====================================================================
const UPD = [['adesao', 'Adesão ao protocolo (0 a 10)'], ['just', 'Justificativa'], ['altura', 'Altura'], ['peso', 'Peso em jejum'], ['fome', 'Fome'], ['cardio', 'Meta de cardio'], ['livres', 'Refeições livres'], ['percep', 'Percepção das mudanças do físico'], ['recup', 'Recuperação entre treinos'], ['volume', 'Margem para mais volume de treino'], ['tempo', 'Tempo para as séries extras'], ['carga', 'Dificuldade para progredir carga'], ['extra', 'Mais alguma coisa']];
function updCard(u) {
  const d = u.d || {};
  return `<div class="tr-box"><div class="fbk-h"><b>${fmtBR(u.date)}</b>${d.adesao ? `<span class="fbk-ok">adesão ${esc(d.adesao)}/10</span>` : ''}</div>
    ${UPD.filter(([k]) => d[k] && k !== 'adesao').map(([k, n]) => `<div class="fi-row"><small>${n}</small><div>${esc(d[k])}</div></div>`).join('')}
    <div style="font-size:10px;color:var(--gray);margin-top:8px">${u.src === 'forms' ? 'Importado do formulário Atualização do Físico' : 'Enviado pelo aluno'}</div></div>`;
}
function tabs(list, cur) { return `<div class="seg fi-seg">${list.map(([k, n]) => `<button class="${k === cur ? 'on' : ''}" data-t="${k}">${n}</button>`).join('')}</div><div id="fi-c"></div>`; }

async function renderTab(root, ctx, tab) {
  const box = $('#fi-c', root); box.innerHTML = '<div class="tr-empty">Carregando...</div>';
  if (tab === 'anam') {
    let a = null; try { a = await LB().get('anamnese', ctx.uid); } catch (e) {}
    box.innerHTML = anamneseView(a);
  } else if (tab === 'upd') {
    let l = []; try { l = await LB().listWhere('monthlyUpdates', 'uid', ctx.uid); if (ctx.email) { const e2 = await LB().listWhere('monthlyUpdates', 'email', String(ctx.email).toLowerCase()); e2.forEach(x => { if (!l.some(y => y.id === x.id)) l.push(x); }); } l.sort((a, b) => String(b.date).localeCompare(String(a.date))); } catch (e) {}
    box.innerHTML = l.length ? l.map(updCard).join('') : '<div class="tr-empty">Nenhuma atualização do físico registrada para este aluno.</div>';
  } else if (tab === 'aval') {
    const list = await loadAssess(ctx.uid);
    box.innerHTML = '<button class="tr-btn solid tr-fin" data-as="new" style="margin-bottom:14px">' + ic('plus') + ' Nova avaliação</button>' + assessHtml(list);
    $('[data-as="new"]', box).onclick = () => assessForm(ctx, () => renderTab(root, ctx, 'aval'));
    $$('[data-as-del]', box).forEach(b => b.onclick = async () => { if (!confirm('Excluir esta avaliação?')) return; await LB().del('assessments', b.dataset.asDel); renderTab(root, ctx, 'aval'); });
  } else if (tab === 'fotos') {
    const list = await loadPhotos(ctx.uid);
    box.innerHTML = photosHtml(list);
    const f = $('#ph-f', box);
    if (f) f.onchange = async () => {
      const file = f.files[0]; if (!file) return;
      LB().toast('Enviando foto...');
      try { const d = await compress(file); await LB().set('progressPhotos', rid(), { uid: ctx.uid, name: ctx.name || '', date: $('#ph-d', box).value || today(), pose: $('#ph-pose', box).value, d, by: ctx.admin ? 'professor' : 'aluno', createdAt: Date.now() }); LB().toast('Foto enviada'); renderTab(root, ctx, 'fotos'); }
      catch (e) { LB().toast('Não foi possível enviar a foto'); }
    };
    $$('img[data-ph]', box).forEach(im => im.onclick = () => {
      const p = list.find(x => x.id === im.dataset.ph); if (!p) return;
      const o = pop(`<img class="big" src="${p.d}" style="background:#000;border-radius:14px"><p style="margin:10px 0;font-size:12px;color:var(--gray)">${fmtBR(p.date)} · ${(POSES.find(x => x[0] === p.pose) || [0, p.pose])[1]}</p><button class="tr-btn danger tr-fin" id="ph-del">Excluir foto</button>`);
      $('#ph-del', o).onclick = async () => { if (!confirm('Excluir esta foto?')) return; await LB().del('progressPhotos', p.id); o.remove(); renderTab(root, ctx, 'fotos'); };
    });
  } else if (tab === 'metas') {
    const [items, assess] = await Promise.all([loadGoals(ctx.uid), loadAssess(ctx.uid)]);
    box.innerHTML = goalsHtml(items, assess);
    const reload = () => renderTab(root, ctx, 'metas');
    box.onclick = async e => {
      const b = e.target.closest('[data-g]'); if (!b) return;
      if (b.dataset.g === 'new') return goalForm(ctx, assess, items, reload);
      const next = b.dataset.g === 'del' ? items.filter(g => g.id !== b.dataset.id) : items.map(g => g.id === b.dataset.id ? { ...g, done: !g.done } : g);
      if (b.dataset.g === 'del' && !confirm('Excluir esta meta?')) return;
      await LB().set('goals', ctx.uid, { uid: ctx.uid, items: next }); reload();
    };
  }
}
function openPanel(kicker, title, ctx, tabList, first) {
  const o = sheet(kicker, title, tabs(tabList, first));
  const go = t => { $$('.fi-seg button', o).forEach(b => b.classList.toggle('on', b.dataset.t === t)); renderTab(o, ctx, t); };
  $('.fi-seg', o).addEventListener('click', e => { const b = e.target.closest('[data-t]'); if (b) go(b.dataset.t); });
  go(first);
}
function evolucao() { const me = LB().me(); openPanel('Acompanhamento', 'Minha <em>evolução</em>', { uid: me.uid, name: me.name, admin: false }, [['aval', 'Avaliações'], ['fotos', 'Fotos'], ['metas', 'Metas']], 'aval'); }
function ficha(u) {
  if (!u || !u.uid) return;
  openPanel('Ficha do aluno', esc((u.name || '').split(' ')[0]) + ' <em>completa</em>', { uid: u.uid, name: u.name, email: u.email, admin: true }, [['anam', 'Anamnese'], ['upd', 'Atualiz.'], ['aval', 'Avaliações'], ['fotos', 'Fotos'], ['metas', 'Metas']], 'anam');
}

// avisos para a central de notificações do aluno
async function notifs(me) {
  const out = [];
  try { if (!(await anamStatus())) out.push({ key: 'anam-pend', icon: 'file', title: 'Complete sua anamnese', text: 'Preencha o seu cadastro completo para o professor montar o seu plano.', go: 'anam' }); } catch (e) {}
  try {
    (await loadGoals(me.uid)).filter(g => !g.done && g.deadline && daysLeft(g.deadline) <= 7).forEach(g => { const n = daysLeft(g.deadline); out.push({ key: 'goal-' + g.id + g.deadline, icon: 'clock', title: n < 0 ? 'Meta com prazo vencido' : 'Meta perto do prazo', text: `${g.title}: ${n < 0 ? 'o prazo venceu em ' + fmtBR(g.deadline) : n === 0 ? 'o prazo é hoje' : 'faltam ' + n + ' dias'}.`, go: 'evo' }); });
  } catch (e) {}
  return out;
}

window.LBF = { anamnese: anamneseEntry, evolucao, ficha, anamStatus, notifs };
