import { parseDurations, statistics } from './metric-core.mjs';

const documents = new Map();
const fmt = value => new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(value);
function download(filename, text) {
  const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url; link.download = filename; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
const license = '\nMaterial original do site Confronto Cibernético. Autorizada adaptação em atividades internas ou de ensino, com atribuição a Confronto Cibernético. Link sugerido, opcional: https://confrontocibernetico.com.br/recursos/. Não se aplica ao livro, sua capa ou outros materiais de terceiros.\n';

const metricsForm = document.querySelector('#metrics-form');
if (metricsForm) metricsForm.addEventListener('submit', event => {
  event.preventDefault();
  const result = document.querySelector('#metrics-result');
  const error = document.querySelector('#metrics-error');
  const button = document.querySelector('[data-download="metrics"]');
  result.replaceChildren(); error.hidden = true; button.hidden = true; documents.delete('metrics');
  try {
    const rows = parseDurations(document.querySelector('#metrics-data').value);
    const labels = ['MTTD: início até detecção', 'Detecção até contenção', 'MTTR definido aqui: detecção até recuperação'];
    const columns = labels.map((label, index) => ({ label, ...statistics(rows.map(row => row[index])) }));
    const summary = document.createElement('p');
    summary.textContent = `${rows.length} incidentes. Valores em minutos; P90 pelo posto mais próximo.`;
    result.append(summary);
    const wrapper = document.createElement('div'); wrapper.className = 'tool-table-scroll';
    const table = document.createElement('table');
    const caption = table.createCaption(); caption.textContent = 'Tempos da amostra em minutos';
    const header = table.createTHead().insertRow();
    for (const label of ['Marco', 'Média', 'Mediana', 'P90']) { const cell = document.createElement('th'); cell.scope = 'col'; cell.textContent = label; header.append(cell); }
    const body = table.createTBody();
    for (const column of columns) { const row = body.insertRow(); [column.label, fmt(column.mean), fmt(column.median), fmt(column.p90)].forEach(value => { const cell = row.insertCell(); cell.textContent = value; }); }
    wrapper.append(table); result.append(wrapper);
    const note = document.createElement('p'); note.className = 'resource-note';
    note.textContent = rows.length < 10 ? 'Amostra pequena: os percentis são descritivos e podem variar muito com um único caso.' : 'Compare amostras de escopo semelhante e documente exclusões, casos em aberto e incertezas de horário.';
    result.append(note);
    documents.set('metrics', `Resumo de tempos de resposta — ${rows.length} incidentes\nUnidade: minutos.\nP90: método do posto mais próximo.\n\n${columns.map(column => `${column.label}: média ${fmt(column.mean)}; mediana ${fmt(column.median)}; P90 ${fmt(column.p90)}`).join('\n')}\n\nContenção e recuperação são medidas desde a detecção. O início deve ser conhecido ou ter incerteza registrada. Uma média menor não comprova melhor resposta.\nFonte da ferramenta: https://confrontocibernetico.com.br/recursos/calculadora-mttd-mttr/\n`);
    button.hidden = false;
  } catch (reason) { error.textContent = reason.message; error.hidden = false; }
});

const planForm = document.querySelector('#plan-form');
if (planForm) planForm.addEventListener('submit', event => {
  event.preventDefault();
  const team = document.querySelector('#plan-team').value.trim() || '[equipe/organização]';
  const environment = document.querySelector('#plan-environment').value;
  const service = document.querySelector('#plan-service').value.trim() || '[serviço prioritário]';
  const text = `# Plano de resposta a incidentes — ${team}\n\nRASCUNHO PARA ADAPTAÇÃO E APROVAÇÃO\nVersão: [preencher] | Responsável: [preencher] | Próxima revisão: [preencher]\n\n## 1. Objetivo e escopo\nContexto: ${environment}.\nServiço prioritário: ${service}.\nPúblico atendido: [preencher]. Ativos e serviços incluídos: [preencher]. Exclusões e dependências de terceiros: [preencher].\n\n## 2. Papéis e autoridade\n- Coordenação do incidente e substituto: [preencher].\n- Investigação e preservação: [preencher].\n- Identidade, rede e aplicações: [preencher].\n- Decisão de contenção com impacto: [preencher autoridade e substituto].\n- Comunicação, privacidade e jurídico quando aplicável: [preencher].\n- Aprovação de recuperação e risco residual: [preencher].\n\n## 3. Acionamento\nCanal principal: [preencher]. Canal alternativo: [preencher].\nCobertura horária, substitutos e critério de urgência: [preencher].\nInformações mínimas do relato: horário e fuso, ativo, sinal observado, impacto conhecido e contato do relator.\n\n## 4. Gravidade e escalonamento\nDefinir exemplos locais por impacto, criticidade, alcance e incerteza. Registrar quem pode alterar a gravidade e quando ela deve ser reavaliada. Não esperar certeza total para envolver quem pode decidir.\n\n## 5. Análise e evidências\nRegistrar fatos, hipóteses, fontes e lacunas separadamente. Preservar horários originais e referência de fuso. Definir retenção, acesso, integridade e cadeia de custódia conforme o uso previsto. Priorizar coleta pelas perguntas investigativas e pelo impacto operacional.\n\n## 6. Contenção e erradicação\nPara cada ação: efeito esperado, responsável, autoridade, dependências, evidências a preservar, condição de reversão e forma de validar o resultado. Revisar identidades, sessões e mecanismos de retorno conhecidos.\n\n## 7. Comunicação\nDefinir públicos, porta-voz, frequência e canal alternativo. Toda atualização deve separar fatos confirmados, incertezas e próximas decisões. Obrigações e prazos específicos devem ser avaliados pelos responsáveis competentes.\n\n## 8. Recuperação\nPrioridade inicial: ${service}.\nConfirmar bases de recuperação, integridade, dependências, identidades e acesso residual. Registrar os critérios de retorno, quem aprova e o período de monitoramento reforçado.\n\n## 9. Encerramento e aprendizado\nDocumentar atividade contida, serviços recuperados, evidências, limitações e aceitação de risco residual. Para cada melhoria: ação, responsável, prazo e comprovação. Definir gatilhos para reabrir a investigação.\n\n## 10. Exercício e manutenção\nExecutar um exercício de mesa, registrar impedimentos e testar novamente as mudanças. Atualizar o plano quando mudarem pessoas, serviços, acessos ou dependências.\n\nEste modelo não certifica conformidade nem substitui avaliação técnica ou jurídica da organização.\nReferências para estudo: NIST SP 800-61 Rev. 3 e FIRST CSIRT Services Framework.\nFonte: https://confrontocibernetico.com.br/recursos/modelo-plano-resposta-incidentes/\n${license}`;
  document.querySelector('#plan-output').value = text;
  document.querySelector('#plan-status').textContent = 'Modelo gerado neste navegador. Revise e adapte antes de aprovar.';
  documents.set('plan', text); document.querySelector('[data-download="plan"]').hidden = false;
});

document.querySelectorAll('[data-download]').forEach(button => button.addEventListener('click', () => {
  const text = documents.get(button.dataset.download);
  if (text) download(button.dataset.download === 'plan' ? 'modelo-plano-resposta.md' : 'resumo-mttd-mttr.txt', text);
}));

const scenarioSelect = document.querySelector('#scenario-select');
if (scenarioSelect) {
  const scenarios = JSON.parse(document.querySelector('#tabletop-data').textContent);
  scenarioSelect.addEventListener('change', () => {
    document.querySelectorAll('[data-scenario]').forEach(section => { section.hidden = scenarioSelect.value !== 'all' && section.dataset.scenario !== scenarioSelect.value; });
    document.querySelector('#scenario-status').textContent = scenarioSelect.value === 'all' ? 'Três cenários disponíveis para leitura.' : `Cenário selecionado: ${scenarios.find(scenario => scenario.id === scenarioSelect.value).name}.`;
  });
  document.querySelectorAll('[data-scenario-download]').forEach(button => button.addEventListener('click', () => {
    const scenario = scenarios.find(item => item.id === button.dataset.scenarioDownload);
    const text = `# Exercício de mesa — ${scenario.name}\n\nCenário fictício para discussão. Duração sugerida: 60 minutos.\nObjetivo: ${scenario.objective}\nFacilitador: [preencher]. Participantes e papéis: [preencher].\n\n${scenario.rounds.map(([time, fact, question], index) => `## Rodada ${index + 1} — ${time}\nInformação: ${fact}\nPergunta: ${question}\nDecisão: [preencher]\nEvidências e lacunas: [preencher]\nResponsável e próxima verificação: [preencher]`).join('\n\n')}\n\n## Revisão\nO que funcionou: [preencher]\nObstáculos: [preencher]\nAção prioritária, responsável, prazo e comprovação: [preencher]\n\nFonte: https://confrontocibernetico.com.br/recursos/simulador-tabletop-ransomware/\n${license}`;
    download(`exercicio-${scenario.id}.md`, text);
  }));
}
