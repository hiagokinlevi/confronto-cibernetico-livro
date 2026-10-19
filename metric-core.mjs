export function parseDurations(text, language = 'pt-BR') {
  const en = language.startsWith('en');
  const lines = text.trim().split(/\r?\n/).filter(line => line.trim());
  if (!lines.length) throw new Error(en ? 'Enter at least one row of durations.' : 'Informe pelo menos uma linha de durações.');
  if (lines.length > 10000) throw new Error(en ? 'Use up to 10,000 incidents per calculation.' : 'Use até 10.000 incidentes por cálculo.');
  return lines.map((line, index) => {
    const parts = line.split(';').map(value => value.trim());
    if (parts.length !== 3 || parts.some(value => !/^\d+(?:[.,]\d+)?$/.test(value))) throw new Error(en ? `Row ${index + 1}: enter three non-negative numbers separated by semicolons.` : `Linha ${index + 1}: informe três números não negativos separados por ponto e vírgula.`);
    const values = parts.map(value => Number(value.replace(',', '.')));
    if (values.some(value => !Number.isFinite(value) || value > 52560000)) throw new Error(en ? `Row ${index + 1}: duration exceeds the accepted range.` : `Linha ${index + 1}: duração fora do intervalo aceito.`);
    if (values[2] < values[1]) throw new Error(en ? `Row ${index + 1}: recovery cannot precede containment; both are measured from detection.` : `Linha ${index + 1}: a recuperação não pode anteceder a contenção, pois ambas são medidas desde a detecção.`);
    return values;
  });
}

export function statistics(values) {
  if (!values.length || values.some(value => !Number.isFinite(value) || value < 0)) throw new Error('A amostra precisa conter números não negativos.');
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return { count: sorted.length, mean: sorted.reduce((sum, value) => sum + value, 0) / sorted.length, median: sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2, p90: sorted[Math.ceil(sorted.length * .9) - 1] };
}
