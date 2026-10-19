import { parseDurations, statistics } from './metric-core.mjs';

// A pure presentation model keeps the browser and downloaded report consistent.
export function createMetricsReport(input, language = 'pt-BR') {
  const en = language.startsWith('en');
  const rows = parseDurations(input, language);
  const fmt = value => new Intl.NumberFormat(en ? 'en-US' : 'pt-BR', { maximumFractionDigits: 2 }).format(value);
  const labels = en
    ? ['MTTD: initial activity to detection', 'Detection to containment', 'MTTR defined here: detection to recovery']
    : ['MTTD: início até detecção', 'Detecção até contenção', 'MTTR definido aqui: detecção até recuperação'];
  const columns = labels.map((label, index) => ({ label, ...statistics(rows.map(row => row[index])) }));
  const headers = en ? ['Time boundary', 'Mean', 'Median', 'P90'] : ['Marco', 'Média', 'Mediana', 'P90'];
  const summary = en ? `${rows.length} incidents. Values in minutes; nearest-rank P90.` : `${rows.length} incidentes. Valores em minutos; P90 pelo posto mais próximo.`;
  const caption = en ? 'Sample response times in minutes' : 'Tempos da amostra em minutos';
  const note = rows.length < 10
    ? (en ? 'Small sample: percentiles are descriptive and a single case can change them substantially.' : 'Amostra pequena: os percentis são descritivos e podem variar muito com um único caso.')
    : (en ? 'Compare cases of similar scope. Document exclusions, open cases and uncertain timestamps.' : 'Compare amostras de escopo semelhante e documente exclusões, casos em aberto e incertezas de horário.');
  const source = `https://confrontocibernetico.com.br${en ? '/en/mttd-mttr-calculator/' : '/recursos/calculadora-mttd-mttr/'}`;
  const definitions = en
    ? 'Containment and recovery are measured from detection. The start time must be known or its uncertainty documented. A lower mean does not prove a better response.'
    : 'Contenção e recuperação são medidas desde a detecção. O início deve ser conhecido ou ter incerteza registrada. Uma média menor não comprova melhor resposta.';
  const text = en
    ? `Response-time summary — ${rows.length} incidents\nUnit: minutes.\nP90: nearest-rank method.\n\n${columns.map(column => `${column.label}: mean ${fmt(column.mean)}; median ${fmt(column.median)}; P90 ${fmt(column.p90)}`).join('\n')}\n\n${definitions}\n${note}\nTool source: ${source}\n`
    : `Resumo de tempos de resposta — ${rows.length} incidentes\nUnidade: minutos.\nP90: método do posto mais próximo.\n\n${columns.map(column => `${column.label}: média ${fmt(column.mean)}; mediana ${fmt(column.median)}; P90 ${fmt(column.p90)}`).join('\n')}\n\n${definitions}\n${note}\nFonte da ferramenta: ${source}\n`;
  return { columns, headers, summary, caption, note, text, displayRows: columns.map(column => [column.label, fmt(column.mean), fmt(column.median), fmt(column.p90)]) };
}
