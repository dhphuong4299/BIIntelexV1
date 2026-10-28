(function (root) {
  'use strict';

  function cleanText(value) { return String(value == null ? '' : value).trim(); }
  function isEmpty(value) { return cleanText(value) === ''; }

  function uniqueHeaders(headers) {
    var used = {};
    return headers.map(function (header, index) {
      var base = cleanText(header).replace(/^\uFEFF/, '') || ('Cột ' + (index + 1));
      var key = base.toLocaleLowerCase();
      var count = used[key] || 0;
      used[key] = count + 1;
      return count ? base + ' (' + (count + 1) + ')' : base;
    });
  }

  function detectDelimiter(text) {
    var candidates = [',', ';', '\t', '|'];
    var lines = String(text || '').replace(/^\uFEFF/, '').split(/\r?\n/).filter(function (line) { return line.trim(); }).slice(0, 5);
    if (!lines.length) return ',';
    return candidates.map(function (candidate) {
      var total = lines.reduce(function (sum, line) {
        var quoted = false, count = 0;
        for (var index = 0; index < line.length; index += 1) {
          if (line[index] === '"') quoted = !quoted;
          else if (!quoted && line[index] === candidate) count += 1;
        }
        return sum + count;
      }, 0);
      return { candidate: candidate, total: total };
    }).sort(function (a, b) { return b.total - a.total; })[0].candidate;
  }

  function parseDelimited(text, delimiter) {
    var source = String(text == null ? '' : text).replace(/^\uFEFF/, '');
    var rows = [], row = [], cell = '', quoted = false;
    for (var index = 0; index < source.length; index += 1) {
      var character = source[index];
      if (character === '"') {
        if (quoted && source[index + 1] === '"') { cell += '"'; index += 1; }
        else quoted = !quoted;
      } else if (!quoted && character === delimiter) {
        row.push(cell.trim()); cell = '';
      } else if (!quoted && (character === '\n' || character === '\r')) {
        if (character === '\r' && source[index + 1] === '\n') index += 1;
        row.push(cell.trim()); cell = '';
        if (row.some(function (value) { return value !== ''; })) rows.push(row);
        row = [];
      } else cell += character;
    }
    row.push(cell.trim());
    if (row.some(function (value) { return value !== ''; })) rows.push(row);
    if (quoted) throw new Error('Tệp có dấu nháy kép chưa được đóng.');
    return rows;
  }

  function parseNumber(value) {
    var raw = cleanText(value);
    if (!raw) return null;
    var negative = /^\(.*\)$/.test(raw);
    var normalized = raw.replace(/[₫$€£¥]/g, '').replace(/%/g, '').replace(/[()\s]/g, '');
    if (!/^[-+]?([0-9]{1,3}([.,][0-9]{3})+|[0-9]+)([.,][0-9]+)?$/.test(normalized)) return null;
    var comma = normalized.lastIndexOf(','), dot = normalized.lastIndexOf('.');
    if (comma > -1 && dot > -1) {
      normalized = comma > dot ? normalized.replace(/\./g, '').replace(',', '.') : normalized.replace(/,/g, '');
    } else if (comma > -1) {
      var commaTail = normalized.length - comma - 1;
      normalized = commaTail === 3 && normalized.indexOf(',') === comma ? normalized.replace(',', '') : normalized.replace(',', '.');
    } else if (dot > -1) {
      var dotTail = normalized.length - dot - 1;
      normalized = dotTail === 3 && normalized.indexOf('.') === dot ? normalized.replace('.', '') : normalized;
    }
    var number = Number(normalized);
    return Number.isFinite(number) ? (negative ? -Math.abs(number) : number) : null;
  }

  function parseDate(value) {
    var raw = cleanText(value);
    if (!raw) return null;
    var match = raw.match(/^(\d{4})[-/]([01]?\d)[-/]([0-3]?\d)$/) || raw.match(/^([0-3]?\d)[-/]([01]?\d)[-/](\d{4})$/);
    if (!match) return null;
    var year = match[1].length === 4 ? Number(match[1]) : Number(match[3]);
    var month = Number(match[1].length === 4 ? match[2] : match[2]);
    var day = Number(match[1].length === 4 ? match[3] : match[1]);
    var date = new Date(Date.UTC(year, month - 1, day));
    if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return null;
    return date.toISOString().slice(0, 10);
  }

  function inferType(values) {
    var filled = values.filter(function (value) { return !isEmpty(value); }).slice(0, 200);
    if (!filled.length) return 'text';
    var booleans = filled.filter(function (value) { return /^(true|false|yes|no|có|không)$/i.test(cleanText(value)); }).length;
    var dates = filled.filter(function (value) { return parseDate(value); }).length;
    var numbers = filled.filter(function (value) { return parseNumber(value) !== null; }).length;
    if (booleans === filled.length) return 'boolean';
    if (dates / filled.length >= 0.85) return 'date';
    if (numbers / filled.length >= 0.85) {
      if (filled.some(function (value) { return /%/.test(String(value)); })) return 'percent';
      if (filled.some(function (value) { return /[₫$€£¥]/.test(String(value)); })) return 'currency';
      return 'number';
    }
    return 'text';
  }

  function normalizeCell(value, type) {
    if (isEmpty(value)) return null;
    if (type === 'number' || type === 'percent' || type === 'currency') return parseNumber(value);
    if (type === 'date') return parseDate(value) || cleanText(value);
    if (type === 'boolean') return /^(true|yes|có)$/i.test(cleanText(value));
    return cleanText(value);
  }

  function createDataset(headers, rows, meta) {
    var normalizedHeaders = uniqueHeaders(headers || []);
    if (!normalizedHeaders.length) throw new Error('Không tìm thấy hàng tiêu đề.');
    var rectangularRows = (rows || []).map(function (row) {
      return normalizedHeaders.map(function (_, index) { return row && row[index] != null ? row[index] : ''; });
    }).filter(function (row) { return row.some(function (value) { return !isEmpty(value); }); });
    if (!rectangularRows.length) throw new Error('Tệp không có dòng dữ liệu.');
    var columns = normalizedHeaders.map(function (name, index) {
      var values = rectangularRows.map(function (row) { return row[index]; });
      var type = inferType(values);
      return { id: 'column-' + index, name: name, type: type, empty: values.filter(isEmpty).length, unique: new Set(values.filter(function (value) { return !isEmpty(value); }).map(cleanText)).size };
    });
    return {
      name: (meta && meta.name) || 'Dữ liệu đã nhập',
      source: (meta && meta.source) || 'file',
      columns: columns,
      rows: rectangularRows.map(function (row) {
        var record = {};
        columns.forEach(function (column, index) { record[column.name] = normalizeCell(row[index], column.type); });
        return record;
      })
    };
  }

  function parseCsv(text, meta) {
    var delimiter = detectDelimiter(text);
    var matrix = parseDelimited(text, delimiter);
    if (matrix.length < 2) throw new Error('CSV cần một hàng tiêu đề và ít nhất một dòng dữ liệu.');
    return createDataset(matrix[0], matrix.slice(1), Object.assign({}, meta || {}, { source: 'csv' }));
  }

  root.INTELEX_DATA_CORE = {
    createDataset: createDataset,
    detectDelimiter: detectDelimiter,
    parseCsv: parseCsv,
    parseDelimited: parseDelimited,
    parseNumber: parseNumber,
    parseDate: parseDate
  };
}(window));
