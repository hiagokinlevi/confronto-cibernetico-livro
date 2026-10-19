import test from 'node:test';
import assert from 'node:assert/strict';
import { parseDurations, statistics } from './frontend/public/metric-core.mjs';

test('calculates separate clocks and a median for a skewed sample', () => {
  const rows = parseDurations('60;20;120\n180;45;240\n30;10;60');
  assert.deepEqual(statistics(rows.map(row => row[0])), { count: 3, mean: 90, median: 60, p90: 180 });
  assert.equal(statistics(rows.map(row => row[1])).mean, 25);
  assert.equal(statistics(rows.map(row => row[2])).mean, 140);
});
test('accepts zero and decimal comma without mutating caller data', () => {
  assert.deepEqual(parseDurations('0;0;0\n1,5;2,5;3,5'), [[0,0,0],[1.5,2.5,3.5]]);
  const input = [4,1,3,2];
  assert.equal(statistics(input).median, 2.5);
  assert.deepEqual(input, [4,1,3,2]);
});
test('rejects missing, negative and non-numeric measurements', () => {
  for (const input of ['', '1;2', '-1;2;3', '1;;3', '1;NaN;4', '1;2;Infinity', '1;2;3;4', 'abc;2;3']) assert.throws(() => parseDurations(input));
});
test('rejects inconsistent response clocks and invalid aggregate input', () => {
  assert.throws(() => parseDurations('1;30;20'));
  assert.throws(() => statistics([]));
  assert.throws(() => statistics([NaN]));
  assert.throws(() => statistics([-1]));
});
test('uses nearest-rank P90 for ten observations', () => {
  assert.equal(statistics([10,9,8,7,6,5,4,3,2,1]).p90, 9);
});
