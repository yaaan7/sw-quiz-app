// 문제 은행 검증: node tools/validate.js
const fs = require('fs'), path = require('path'), cp = require('child_process');
global.window = global;
const dir = path.join(__dirname, '..', 'data');
['bank', 'u1', 'u2', 'u3', 'u4', 'u5', 'u6', 'u7', 'u8', 'u9'].forEach(f => {
  eval(fs.readFileSync(path.join(dir, f + '.js'), 'utf8').replace(/^/, ''));
});
const Q = global.QB;
let errs = 0, warns = 0;
const bad = (q, m) => { errs++; console.log('✗ [' + q.id + '] ' + m + '\n    ' + q.q.slice(0, 60)); };
const warn = (q, m) => { warns++; console.log('! [' + q.id + '] ' + m + '\n    ' + q.q.slice(0, 60)); };
const norm = s => String(s).replace(/["'\s]/g, '').replace(/,$/, '');
const run = code => {
  try { return cp.execFileSync('node', ['-e', code], { encoding: 'utf8', timeout: 5000, stdio: ['ignore', 'pipe', 'pipe'] }).trim(); }
  catch (e) { return '__ERR__:' + (e.stderr || e.message).split('\n').find(l => /Error/.test(l)); }
};
const ids = new Set(), perUnit = {}, perCat = {};
for (const q of Q) {
  if (ids.has(q.id)) bad(q, '중복 id');
  ids.add(q.id);
  perUnit[q.u] = (perUnit[q.u] || 0) + 1;
  perCat[q.cat] = (perCat[q.cat] || 0) + 1;
  if (q.t === 'mc') {
    if (!(q.a >= 0 && q.a < q.opts.length)) bad(q, '정답 번호 범위 오류');
    if (new Set(q.opts).size !== q.opts.length) bad(q, '보기 중복');
    if (q.opts.length < 2 || q.opts.length > 5) warn(q, '보기 개수 ' + q.opts.length);
    if (q.cat === 'predict' && !q.code) warn(q, 'predict인데 code 없음');
    if (q.run) {
      const out = run(q.run);
      const hit = q.opts.map(norm).indexOf(norm(out.split('\n').join(', ')));
      const errOk = out.startsWith('__ERR__') && /오류|Error/.test(q.opts[q.a]);
      if (hit !== q.a && !errOk) bad(q, '실행 결과 "' + out + '" ≠ 정답 "' + q.opts[q.a] + '" (일치 보기 ' + hit + ')');
    }
  } else if (q.t === 'fb') {
    const n = (q.code.match(/___/g) || []).length;
    if (n !== q.answers.length) bad(q, '빈칸 ' + n + '개 / 정답 ' + q.answers.length + '개');
    q.answers.forEach(a => { if (q.bank.indexOf(a) < 0) warn(q, '보기에 정답 "' + a + '" 없음(자동 추가됨)'); });
    if (q.exec) { const o = run(q.exec); if (o.startsWith('__ERR__')) bad(q, 'exec 오류 ' + o); }
  } else if (q.t === 'or') {
    if (q.run) {
      const out = run(q.run).split('\n').map(s => s.trim());
      if (JSON.stringify(out) !== JSON.stringify(q.seq)) bad(q, '실행 결과 ' + JSON.stringify(out) + ' ≠ seq ' + JSON.stringify(q.seq));
    }
    q.extra.forEach(e => { if (q.seq.indexOf(e) >= 0) warn(q, 'extra가 seq와 겹침: ' + e); });
  }
  if (!q.why) bad(q, '해설 없음');
}
console.log('\n총 ' + Q.length + '문제', perUnit, perCat);
console.log('오류 ' + errs + ' / 경고 ' + warns);
process.exit(errs ? 1 : 0);
