const assert = require('assert');

global.window = global;
require('../src/assets/js/data-core.js');

const core = global.INTELEX_DATA_CORE;

function column(dataset, name) {
  return dataset.columns.find((item) => item.name === name);
}

// Comma, semicolon and tab separated input all remain supported.
assert.strictEqual(core.detectDelimiter('a;b;c\n1;2;3'), ';');
assert.strictEqual(core.detectDelimiter('a\tb\tc\n1\t2\t3'), '\t');

const csv = core.parseCsv('Tên;Doanh thu;Tỷ lệ;Ngày;Hoạt động\n"Đội, A";"1.234,50 ₫";"12,5%";31/01/2026;Có\n"Đội B";2.000;5%;2026-02-01;Không', { name: 'test.csv' });
assert.strictEqual(csv.rows.length, 2);
assert.strictEqual(csv.columns.length, 5);
assert.strictEqual(column(csv, 'Doanh thu').type, 'currency');
assert.strictEqual(column(csv, 'Tỷ lệ').type, 'percent');
assert.strictEqual(column(csv, 'Ngày').type, 'date');
assert.strictEqual(column(csv, 'Hoạt động').type, 'boolean');
assert.strictEqual(csv.rows[0]['Tên'], 'Đội, A');
assert.strictEqual(csv.rows[0]['Doanh thu'], 1234.5);
assert.strictEqual(csv.rows[0]['Tỷ lệ'], 12.5);
assert.strictEqual(csv.rows[0]['Ngày'], '2026-01-31');
assert.strictEqual(csv.rows[1]['Hoạt động'], false);

// Quoted fields can contain a line break and duplicate/blank headers are made safe.
const quoted = core.parseCsv('Name,Name,\n"Hà\nNội",2,3');
assert.deepStrictEqual(quoted.columns.map((item) => item.name), ['Name', 'Name (2)', 'Cột 3']);
assert.strictEqual(quoted.rows[0].Name, 'Hà\nNội');

// Missing cells are retained as null instead of shifting later values into another column.
const sparse = core.parseCsv('A,B,C\n1,,3\n2,4,');
assert.strictEqual(sparse.rows[0].B, null);
assert.strictEqual(sparse.rows[1].C, null);

// This mirrors the matrix returned by the Excel reader before it becomes a dataset.
const spreadsheet = core.createDataset(['Mã', 'Số lượng', 'Giá'], [['SP-01', 12, '45,000 ₫'], ['SP-02', 0, '50,500 ₫']], { name: 'bang-gia.xlsx' });
assert.strictEqual(spreadsheet.rows.length, 2);
assert.strictEqual(column(spreadsheet, 'Số lượng').type, 'number');
assert.strictEqual(column(spreadsheet, 'Giá').type, 'currency');
assert.strictEqual(spreadsheet.rows[1]['Số lượng'], 0);
assert.strictEqual(spreadsheet.rows[0]['Giá'], 45000);

assert.throws(() => core.parseCsv('A,B\n"unclosed,2'), /dấu nháy/i);
assert.throws(() => core.parseCsv('A,B'), /ít nhất một dòng/i);

console.log('data-core tests passed');
