/* 단원 9 — 콜스택 · 비동기 (Deep Dive 42·45·46장 자료) — 슬라이드 범위만 */
(function () {
  var U = 'u9';

  // ── 실행 컨텍스트 · 콜 스택 ─────────────────
  mc(U, '실행 컨텍스트(Execution Context)란?',
    ['코드가 실행되는 환경(문맥)', '변수의 자료형', 'HTML 문서의 구조', '서버와의 연결 상태'], 0,
    '소스 코드는 전역 코드, 함수 코드, eval 코드, 모듈 코드 4가지로 구분되고, 각각 별도의 실행 컨텍스트와 스코프를 생성해요.',
    '8주차 · 실행 컨텍스트', { tag: '실행 컨텍스트' });

  mc(U, '자바스크립트가 소스 코드를 구분하는 4가지가 아닌 것은?',
    ['이벤트 코드', '전역 코드', '함수 코드', '모듈 코드'], 0,
    '전역 코드, 함수 코드, eval 코드, 모듈 코드예요.',
    '8주차 · 실행 컨텍스트', { tag: '실행 컨텍스트' });

  mc(U, '마지막 줄 console.log(y)의 결과는?',
    ['에러 (y는 foo 함수 스코프 안에 있다)', '2', 'undefined', '1'], 0,
    'y는 foo 함수 컨텍스트에 있는 변수라 전역에서는 찾을 수 없어요. foo 안의 console.log(x)는 전역 스코프에서 x를 찾아 1을 출력해요.',
    '8주차 · 실행 컨텍스트', { cat: 'predict', tag: '스코프', code: 'var x = 1;\nfunction foo() {\n  var y = 2;\n  console.log(x);\n  console.log(y);\n}\nfoo();\nconsole.log(y);' });

  mc(U, '실행 컨텍스트 스택(콜 스택)에 대한 설명으로 맞는 것은?',
    ['생성된 실행 컨텍스트가 저장되어 실행 순서를 관리하며, 상단(마지막으로 push된) 컨텍스트만 처리한다', '실행 컨텍스트를 무작위로 실행한다', '비동기 함수의 콜백을 보관하는 큐다', 'HTTP 요청을 처리하는 곳이다'], 0,
    '자바스크립트는 싱글 스레드라 콜 스택의 상단에 있는 실행 컨텍스트만 처리할 수 있어요.',
    '8주차 · 실행 컨텍스트 스택', { tag: '콜 스택' });

  or(U, 'foo(); bar(); 를 호출할 때 콜 스택의 상태를 순서대로 누르세요.',
    'const foo = () => {};\nconst bar = () => {};\nfoo();\nbar();',
    ['전역 EC', '전역 EC + foo EC', '전역 EC (foo 종료)', '전역 EC + bar EC', '전역 EC (bar 종료)'], [],
    '전역 EC가 먼저 쌓이고, foo 호출 때 foo EC가 위에 push → 끝나면 pop → bar도 같은 방식이에요.',
    '8주차 · 실행 컨텍스트 스택', { cat: 'quiz', tag: '콜 스택' });

  mc(U, '자바스크립트가 싱글 스레드라는 말의 의미는?',
    ['콜 스택이 하나라서 한 번에 하나의 실행 컨텍스트만 처리한다', '여러 함수를 동시에 병렬 실행한다', '함수마다 스레드를 만든다', '코드를 한 줄로만 쓸 수 있다'], 0,
    '그래서 비동기 처리에는 브라우저, Node.js 같은 작동 환경의 기능(Web API 등)이 필요해요.',
    '8주차 · 비동기 처리', { tag: '싱글 스레드' });

  // ── 이벤트 루프 · 태스크 큐 ─────────────────
  mc(U, '태스크 큐(task queue)에는 무엇이 일시적으로 보관될까?',
    ['비동기 함수의 콜백 함수, 프로미스의 후속 처리 메서드 등', '변수 이름', 'HTML 태그', '실행이 끝난 실행 컨텍스트'], 0,
    '타이머가 끝난 setTimeout의 콜백처럼 "실행 대기 중인 함수"가 큐에서 순서를 기다려요.',
    '8주차 · 비동기 처리', { tag: '태스크 큐' });

  mc(U, '이벤트 루프(event loop)의 역할은?',
    ['콜 스택이 비어 있는지, 태스크 큐에 대기 중인 함수가 있는지 확인해 있으면 콜 스택으로 옮긴다', '자바스크립트 코드를 컴파일한다', '메모리를 해제한다', '이벤트를 삭제한다'], 0,
    '콜 스택이 비어 있고 큐에 대기 중인 함수가 있을 때에만 순차적으로 콜 스택으로 이동시켜요.',
    '8주차 · 비동기 처리', { tag: '이벤트 루프' });

  or(U, '출력 순서대로 누르세요. (setTimeout 5초)',
    'function foo() { console.log("foo"); }\nfunction bar() { console.log("bar"); }\nsetTimeout(foo, 5000);\nbar();',
    ['bar', 'foo'], [],
    'setTimeout은 타이머를 Web API에 맡기고 바로 끝나요. bar()가 먼저 실행되고, 5초 후 foo가 태스크 큐 → 콜 스택으로 와서 실행돼요.',
    '8주차 · setTimeout 예제', { tag: 'setTimeout', run: 'function foo(){ console.log("foo"); } function bar(){ console.log("bar"); } setTimeout(foo, 50); bar();' });

  mc(U, 'setTimeout(foo, 5000)을 호출했을 때 5초를 세는 것은?',
    ['Web API의 Timer 기능 (콜 스택이 아니다)', '콜 스택의 foo 실행 컨텍스트', '이벤트 루프', '힙(heap)'], 0,
    '타이머가 끝나면 foo가 태스크 큐에 들어가고, 이벤트 루프가 콜 스택이 비었을 때 foo를 콜 스택으로 옮겨요.',
    '8주차 · setTimeout 예제', { tag: 'setTimeout' });

  mc(U, 'Web API 영역에 속하는 것으로 슬라이드에 나온 것은?',
    ['DOM API, Timer 함수, HTTP request', '콜 스택, 힙', '태스크 큐, 이벤트 루프', '전역 실행 컨텍스트'], 0,
    '자바스크립트 엔진은 heap과 call stack을 가지고, 이벤트 루프·태스크 큐·Web API는 작동 환경이 제공해요.',
    '8주차 · 비동기 처리', { tag: 'Web API', x: { 1: '이건 자바스크립트 엔진 내부 영역이에요.', 2: '이벤트 루프와 태스크 큐는 Web API 자체가 아니에요.' } });

  or(U, '출력 순서대로 누르세요. (콜 스택을 오래 점유하는 sleep)',
    'function sleep(func, delay) {\n  const delayUntil = Date.now() + delay;\n  while (Date.now() < delayUntil);\n  func();\n}\nfunction foo() { console.log("foo"); }\nfunction bar() { console.log("bar"); }\nsetTimeout(foo, 0);\nsleep(bar, 3000);',
    ['bar', 'foo'], [],
    'setTimeout(foo, 0)의 foo는 태스크 큐에서 기다려요. sleep이 3초 동안 콜 스택을 차지하고 bar까지 실행한 뒤에야 콜 스택이 비어 foo가 실행돼요.',
    '8주차 · sleep 예제', { tag: '이벤트 루프', run: 'function sleep(func, delay){ const d = Date.now() + delay; while (Date.now() < d); func(); } function foo(){ console.log("foo"); } function bar(){ console.log("bar"); } setTimeout(foo, 0); sleep(bar, 100);' });

  mc(U, '위 sleep 예제에서 foo가 3초 넘게 실행되지 못한 이유는?',
    ['콜 스택이 비어야 태스크 큐의 함수가 실행되는데 sleep이 콜 스택을 계속 차지했기 때문', '지연 시간이 0이라서', 'foo가 잘못 선언되어서', '타이머가 3초 걸려서'], 0,
    '지연 0ms라도 콜 스택의 동기 작업이 끝날 때까지는 실행되지 못해요.',
    '8주차 · sleep 예제', { tag: '이벤트 루프' });

  // ── 프로미스 ────────────────────────────────
  mc(U, '프로미스(Promise)에 대한 설명으로 맞는 것은?',
    ['비동기 작업의 미래 결과를 나타내는 객체로, 아직 없는 값의 자리표시자다', '동기 작업의 결과를 즉시 담는 변수다', '함수의 매개변수 이름이다', 'HTML 태그다'], 0,
    '작업이 끝나면 값과 함께 fulfilled 되거나 에러와 함께 rejected 돼요.',
    '8주차 · 프로미스', { tag: 'Promise' });

  mc(U, '프로미스의 3가지 상태는?',
    ['pending, fulfilled, rejected', 'wait, success, fail', 'ready, done, error', 'open, closed, locked'], 0,
    '생성 직후는 pending이고 값은 undefined예요. resolve(value) 호출 시 fulfilled, reject(error) 호출 시 rejected가 돼요.',
    '8주차 · 프로미스의 값과 상태', { tag: 'Promise 상태' });

  mc(U, 'settled 상태란?',
    ['fulfilled 또는 rejected 상태', 'pending 상태', 'fulfilled 상태만', '프로미스가 삭제된 상태'], 0,
    '결과가 정해진 상태를 settled라고 불러요.',
    '8주차 · 프로미스의 값과 상태', { tag: 'Promise 상태' });

  mc(U, '마지막 console.log(n)의 출력은?',
    ['2', '1', 'undefined', 'pending'], 0,
    '프로미스의 실행자(executor) 함수는 동기적으로 실행돼요. 그래서 n++가 바로 실행되어 n은 2예요.',
    '8주차 · 프로미스 객체', { cat: 'predict', tag: '실행자 함수', code: 'n = 1;\np = new Promise(resolve => {\n  n++;\n  resolve(n);\n});\nconsole.log(n);', run: 'n = 1; p = new Promise(resolve => { n++; resolve(n); }); console.log(n);' });

  fb(U, '프로미스를 만드는 코드를 채우세요. (실행자 함수의 인자)',
    'new Promise((___, ___) => { ... })', ['resolve', 'reject'], ['resolve', 'reject', 'then', 'catch', 'finally'],
    '실행자 함수는 resolve, reject를 인자로 받아요. reject는 생략할 수도 있어요: new Promise(resolve => { ... })',
    '8주차 · 프로미스 객체', { tag: 'Promise 생성' });

  mc(U, '실행 결과는?',
    ['1', '2', '3', '1, 2'], 0,
    'resolve나 reject를 여러 번 호출해도 가장 먼저 실행된 단 한 번의 호출만 유효해요. resolve(1)이 먼저라서 값은 1이에요.',
    '8주차 · 프로미스의 값과 상태', { cat: 'predict', tag: 'Promise 상태', code: 'new Promise((resolve, reject) => {\n  resolve(1);\n  resolve(2);\n  reject(3);\n}).then(v => console.log(v));', run: 'new Promise((resolve, reject) => { resolve(1); resolve(2); reject(3); }).then(v => console.log(v));' });

  fb(U, '후속 처리 메서드를 채우세요.',
    'p.___(value => { /* fulfilled */ })\n .___(error => { /* rejected */ })\n .___(() => { /* 항상 실행 */ })', ['then', 'catch', 'finally'], ['then', 'catch', 'finally', 'next', 'done', 'resolve'],
    'then: fulfilled(또는 then(성공, 실패)로 둘 다), catch: rejected 처리, finally: fulfilled/rejected 관계없이 실행돼요.',
    '8주차 · 프로미스의 후속 처리 메서드', { tag: '후속 처리' });

  mc(U, 'then(value => {…}, error => {…})의 동작은?',
    ['fulfilled이면 첫 번째 함수, rejected이면 두 번째 함수를 비동기적으로 실행하고, 항상 프로미스를 반환한다', '항상 첫 번째 함수만 실행한다', '동기적으로 실행되고 undefined를 반환한다', '에러가 나면 프로그램이 종료된다'], 0,
    '후속 처리 메서드는 비동기적으로 실행되고 프로미스를 반환하므로 then().catch().finally()처럼 이어 쓸 수 있어요.',
    '8주차 · 프로미스의 후속 처리 메서드', { tag: '후속 처리' });

  mc(U, '프로미스의 후속 처리 메서드(then, catch, finally)의 콜백이 들어가는 곳은?',
    ['마이크로태스크 큐 (태스크 큐보다 우선권이 있다)', '태스크 큐', '콜 스택 맨 아래', '힙'], 0,
    '마이크로태스크 큐는 태스크 큐와 별도의 큐이고 우선권을 가져요.',
    '8주차 · 마이크로태스크 큐', { tag: '마이크로태스크' });

  or(U, '출력 순서대로 누르세요.',
    'console.log(1);\np = new Promise(resolve => { resolve(2); });\nsetTimeout(() => { console.log(3); }, 0);\nconsole.log(4);\np.then(resolve => { console.log(resolve); });',
    ['1', '4', '2', '3'], [],
    '동기 코드(1, 4) → 마이크로태스크 큐의 then(2) → 태스크 큐의 setTimeout(3) 순서예요. 슬라이드의 "1 → 4 → 2 → 3" 예제예요.',
    '8주차 · 마이크로태스크 큐', { tag: '마이크로태스크', run: 'console.log(1); p = new Promise(resolve => { resolve(2); }); setTimeout(() => { console.log(3); }, 0); console.log(4); p.then(resolve => { console.log(resolve); });' });

  mc(U, '이벤트 루프가 콜 스택이 비었음을 확인했을 때의 처리 순서는?',
    ['마이크로태스크 큐의 모든 작업(추가되는 것 포함)을 먼저 옮기고, 비운 뒤에 태스크 큐의 작업을 옮긴다', '태스크 큐 → 마이크로태스크 큐', '두 큐를 번갈아 하나씩', '태스크 큐만 처리한다'], 0,
    '처리 중 새 마이크로태스크가 추가되면 그것도 콜 스택으로 이동시켜요.',
    '8주차 · 마이크로태스크 큐', { tag: '마이크로태스크' });

  mc(U, 'Promise.resolve(1)이 반환하는 것은?',
    ['값이 1인 fulfilled 상태의 Promise', '숫자 1', 'rejected 상태의 Promise', 'undefined'], 0,
    'new Promise(resolve => { resolve(1) })과 같은 결과예요. Promise.reject(error)는 error를 값으로 하는 rejected 상태의 Promise를 반환해요.',
    '8주차 · 프로미스의 정적 메서드', { tag: '정적 메서드' });

  // ── async / await ───────────────────────────
  mc(U, 'async 함수가 반환하는 것은?',
    ['언제나 프로미스 (명시적으로 반환하지 않아도 암묵적으로 프로미스를 반환)', '언제나 undefined', '일반 값', '콜백 함수'], 0,
    'async function foo() { return 1 } 은 1을 값으로 갖는 프로미스를 반환해요.',
    '8주차 · async 함수', { tag: 'async' });

  mc(U, '다음 코드의 출력은?',
    ['Promise { 1 }', '1', 'undefined', 'Promise { <pending> }'], 0,
    'async 함수의 return 1은 1을 값으로 갖는 프로미스로 감싸져요. 그래서 foo()를 출력하면 Promise { 1 }이에요.',
    '8주차 · async 함수', { cat: 'predict', tag: 'async', code: 'async function foo() {\n  return 1;\n}\nconsole.log(foo());', run: 'async function foo(){ return 1; } console.log(foo());' });

  mc(U, 'async 함수의 호출 방식에 대한 설명으로 맞는 것은?',
    ['함수 자체는 동기적으로 실행되고, 호출 즉시 pending 상태의 프로미스를 반환하며 return 시 fulfilled로 바뀐다', '호출하면 모든 코드가 다음 틱에서 실행된다', '호출 즉시 fulfilled가 된다', '반환값이 없다'], 0,
    'await를 만나면 그 지점에서 함수 실행이 멈추고 호출자의 뒤쪽 동기 코드가 진행돼요.',
    '8주차 · async 함수', { tag: 'async' });

  mc(U, 'await 키워드의 설명으로 맞는 것은?',
    ['프로미스 앞에서 사용하며, 뒤의 프로미스가 settled될 때까지 기다렸다가 그 프로미스의 값을 반환한다', '어떤 값 앞에서든 쓸 수 있고 항상 undefined를 반환한다', '콜 스택 전체를 멈춘다', 'catch 대신 쓰는 문법이다'], 0,
    'await를 만나면 async 함수만 실행을 멈추고 뒤의 동기 작업을 진행해요. 콜 스택 전체가 멈추는 게 아니에요.',
    '8주차 · await 키워드', { tag: 'await' });

  or(U, '출력 순서대로 누르세요. (async/await)',
    'async function foo() {\n  console.log(1);\n  const p = new Promise(resolve => {\n    setTimeout(() => {\n      console.log(4);\n      resolve("hello world!");\n    }, 3000);\n  });\n  console.log(2);\n  const x = await p;\n  console.log(x);\n}\nfoo();\nconsole.log(3);',
    ['1', '2', '3', '4', 'hello world!'], [],
    'foo()는 await 전까지 동기 실행(1, 2) → await에서 멈추고 호출자가 이어서 3 출력 → 3초 후 타이머 콜백(4) → resolve로 fulfilled → 마이크로태스크 큐의 재개 작업으로 foo가 이어져 x를 출력해요.',
    '8주차 · async/await 예제', { tag: 'await', run: 'async function foo(){ console.log(1); const p = new Promise(resolve => { setTimeout(() => { console.log(4); resolve("hello world!"); }, 50); }); console.log(2); const x = await p; console.log(x); } foo(); console.log(3);' });

  mc(U, 'await 뒤의 프로미스가 resolve되면 일어나는 일은?',
    ['마이크로태스크 큐에 async 함수의 재개 작업이 추가되고, 저장된 진행 상황을 불러와 이어서 실행한다', '프로그램이 처음부터 다시 실행된다', '콜 스택이 초기화된다', '태스크 큐에 새 setTimeout이 등록된다'], 0,
    'foo 함수의 실행 컨텍스트와 진행 상황이 저장돼 있다가, 재개 작업(resume job)으로 이어져요.',
    '8주차 · await 키워드', { tag: 'await' });

  fb(U, 'async/await 코드를 then으로 바꿔 쓰세요.',
    'function foo() {\n  const p = new Promise(resolve => { /* ... */ });\n  return p.___(x => {\n    console.log(x);\n  });\n}', ['then'], ['then', 'catch', 'finally', 'await', 'resolve'],
    'const x = await p; console.log(x); 는 p.then(x => { console.log(x) }) 와 같은 의미예요. await 뒤의 코드가 then 콜백이 되는 거예요.',
    '8주차 · async/await와 then 비교', { tag: 'await' });

  or(U, '출력 순서대로 누르세요.',
    'async function foo() {\n  let p1 = Promise.resolve(1);\n  let p2 = Promise.resolve(2);\n  console.log("task before p1");\n  await p1;\n  console.log("task between p1&p2");\n  await p2;\n  console.log("task after p2");\n  return;\n}\nconst f = foo();\nconsole.log(f);\nsetTimeout(() => { console.log(f); }, 0);',
    ['task before p1', 'Promise { <pending> }', 'task between p1&p2', 'task after p2', 'Promise { undefined }'], [],
    'foo()는 await p1 전까지 동기 실행 → 호출 직후 f는 pending → 마이크로태스크로 재개되며 나머지가 실행 → return되어 fulfilled(undefined) → 마지막에 setTimeout 콜백이 Promise { undefined }를 출력해요.',
    '8주차 · async/await와 then 비교', { tag: 'await', run: 'async function foo(){ let p1 = Promise.resolve(1); let p2 = Promise.resolve(2); console.log("task before p1"); await p1; console.log("task between p1&p2"); await p2; console.log("task after p2"); return; } const f = foo(); console.log(f); setTimeout(() => { console.log(f); }, 0);' });
})();
