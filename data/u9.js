/* 단원 9 — 콜스택 · 비동기 (Deep Dive 42·45·46) */
(function () {
  var U = 'u9';

  mc(U, '자바스크립트 엔진의 실행 모델에 대한 설명으로 맞는 것은?',
    ['싱글 스레드로 한 번에 하나의 작업만 처리한다', '멀티 스레드로 동시에 여러 코드를 실행한다', '함수마다 별도 스레드를 만든다', '코드를 병렬로 컴파일한다'], 0,
    '자바스크립트는 콜 스택이 하나뿐인 싱글 스레드예요. 비동기는 브라우저(Web API)와 이벤트 루프의 도움으로 처리해요.',
    '8주차 · 싱글 스레드', { tag: '싱글 스레드' });

  mc(U, '콜 스택(Call Stack)의 동작 방식은?',
    ['LIFO — 나중에 들어온 함수가 먼저 빠져나간다', 'FIFO — 먼저 들어온 함수가 먼저 나간다', '무작위', '우선순위 큐'], 0,
    '함수를 호출하면 스택에 쌓이고(push), 실행이 끝나면 꺼내져요(pop). 스택 구조라 마지막에 호출된 함수가 먼저 끝나요.',
    '8주차 · 콜 스택', { tag: '콜 스택' });

  or(U, '함수 호출 시 "실행이 끝나는(반환되는)" 순서대로 누르세요.',
    'function a() { b(); console.log("a 끝"); }\nfunction b() { c(); console.log("b 끝"); }\nfunction c() { console.log("c 끝"); }\na();',
    ['c 끝', 'b 끝', 'a 끝'], [],
    '가장 나중에 호출된 c가 먼저 끝나요(LIFO). c → b → a 순으로 pop돼요.',
    '8주차 · 콜 스택', { tag: '콜 스택', run: 'function a(){ b(); console.log("a 끝"); } function b(){ c(); console.log("b 끝"); } function c(){ console.log("c 끝"); } a();' });

  mc(U, '종료 조건 없는 재귀 호출을 계속하면 발생하는 오류는?',
    ['RangeError: Maximum call stack size exceeded (스택 오버플로)', 'SyntaxError', 'TypeError', '아무 일도 없다'], 0,
    '함수 호출이 스택에 계속 쌓이면 한계를 넘어 스택 오버플로가 발생해요.',
    '8주차 · 스택 오버플로', { tag: '콜 스택' });

  mc(U, '동기(synchronous) 처리의 특징은?',
    ['앞 작업이 끝나야 다음 작업이 시작된다', '작업이 끝나기를 기다리지 않고 다음 작업을 실행한다', '항상 병렬로 처리된다', '이벤트 루프가 필요하다'], 0,
    '동기는 순차 실행(블로킹), 비동기는 기다리지 않고 진행(논블로킹). 비동기 완료는 콜백/프로미스로 알려줘요.',
    '8주차 · 동기와 비동기', { tag: '동기/비동기' });

  mc(U, '다음 중 비동기로 동작하는 함수가 아닌 것은?',
    ['Array.prototype.map', 'setTimeout', 'fetch', 'addEventListener 리스너 실행'], 0,
    'map은 동기 함수예요. setTimeout, 이벤트 핸들러, AJAX/fetch, Promise 후속 처리는 비동기예요.',
    '8주차 · 비동기 함수', { tag: '동기/비동기' });

  or(U, '출력 순서대로 눌러보세요.',
    'console.log("A");\nsetTimeout(() => console.log("B"), 0);\nconsole.log("C");',
    ['A', 'C', 'B'], [],
    'setTimeout 콜백은 지연이 0이어도 태스크 큐로 가서, 콜 스택의 동기 코드가 모두 끝난 뒤에 실행돼요.',
    '8주차 · 이벤트 루프', { tag: '이벤트 루프', run: 'console.log("A"); setTimeout(() => console.log("B"), 0); console.log("C");' });

  mc(U, '이벤트 루프(Event Loop)의 역할은?',
    ['콜 스택이 비면 큐에서 콜백을 꺼내 스택으로 옮긴다', '코드를 컴파일한다', '메모리를 해제한다', '이벤트를 삭제한다'], 0,
    '콜 스택이 비어 있을 때 마이크로태스크 큐 → 태스크 큐(매크로태스크) 순으로 콜백을 스택에 넣어줘요.',
    '8주차 · 이벤트 루프', { tag: '이벤트 루프' });

  mc(U, 'setTimeout의 콜백이 대기하는 곳은?',
    ['타이머가 끝나면 태스크 큐(콜백 큐)', '콜 스택 맨 아래', '마이크로태스크 큐', '힙(Heap)'], 0,
    '타이머는 Web API가 처리하고 완료되면 콜백을 태스크 큐에 넣어요. Promise의 then 콜백은 마이크로태스크 큐.',
    '8주차 · 태스크 큐', { tag: '태스크 큐' });

  mc(U, '마이크로태스크 큐와 태스크 큐 중 우선순위는?',
    ['마이크로태스크 큐가 먼저 비워진다', '태스크 큐가 먼저 비워진다', '번갈아 실행', '순서 없음'], 0,
    '콜 스택이 비면 마이크로태스크(Promise.then, queueMicrotask)를 모두 처리한 뒤 다음 태스크(setTimeout 등)를 실행해요.',
    '8주차 · 이벤트 루프', { tag: '마이크로태스크' });

  or(U, '출력 순서대로 눌러보세요. (Promise vs setTimeout)',
    'console.log("1");\nsetTimeout(() => console.log("2"), 0);\nPromise.resolve().then(() => console.log("3"));\nconsole.log("4");',
    ['1', '4', '3', '2'], [],
    '동기 코드(1, 4) → 마이크로태스크(Promise then: 3) → 태스크 큐(setTimeout: 2).',
    '8주차 · 이벤트 루프', { tag: '마이크로태스크', run: 'console.log("1"); setTimeout(() => console.log("2"), 0); Promise.resolve().then(() => console.log("3")); console.log("4");' });

  mc(U, '콜백 지옥(callback hell)이란?',
    ['비동기 콜백이 중첩되어 코드가 깊어지고 읽기 어려워지는 현상', '콜백이 실행되지 않는 현상', '콜백이 무한 반복되는 현상', '스택 오버플로'], 0,
    '비동기 순서를 보장하려고 콜백 안에 콜백을 계속 넣으면 들여쓰기가 깊어져요. Promise와 async/await로 해결해요.',
    '8주차 · 콜백', { tag: '콜백' });

  mc(U, 'Promise의 상태가 아닌 것은?',
    ['running', 'pending', 'fulfilled', 'rejected'], 0,
    'pending(대기) → fulfilled(성공) 또는 rejected(실패). 한 번 정해지면(settled) 바뀌지 않아요.',
    '8주차 · Promise', { tag: 'Promise' });

  fb(U, 'Promise 체이닝으로 성공/실패/마무리 처리를 채우세요.',
    'fetch(url)\n  .___(res => res.json())\n  .___(err => console.log("실패"))\n  .___(() => console.log("끝"));', ['then', 'catch', 'finally'], ['then', 'catch', 'finally', 'next', 'error', 'done'],
    'then: 성공 처리, catch: 실패(에러) 처리, finally: 성공·실패와 상관없이 마지막에 실행돼요.',
    '8주차 · Promise 체이닝', { tag: 'Promise' });

  fb(U, 'Promise를 직접 만드세요. (성공 시 호출하는 함수, 실패 시 호출하는 함수)',
    'const p = new Promise((___, ___) => {\n  setTimeout(() => resolve("완료"), 100);\n});', ['resolve', 'reject'], ['resolve', 'reject', 'then', 'catch', 'done'],
    '실행 함수의 매개변수는 (resolve, reject)예요. resolve(값)은 성공, reject(에러)는 실패로 만들어요.',
    '8주차 · Promise 생성', { tag: 'Promise' });

  mc(U, '다음 코드의 출력은?',
    ['"성공: 10"', '"실패"', 'undefined', '오류'], 0,
    'resolve(10)으로 fulfilled가 되어 then 콜백이 값을 받아요. (비동기라 약간 뒤에 출력)',
    '8주차 · Promise', { cat: 'predict', tag: 'Promise', code: 'new Promise((resolve, reject) => {\n  resolve(10);\n})\n  .then(v => console.log("성공: " + v))\n  .catch(() => console.log("실패"));', run: 'new Promise((resolve, reject) => { resolve(10); }).then(v => console.log("성공: " + v)).catch(() => console.log("실패"));' });

  mc(U, 'reject가 호출된 Promise를 처리하는 곳은?',
    ['catch (또는 then의 두 번째 인자)', 'finally만', '처리할 수 없다', 'resolve'], 0,
    '실패는 .catch(fn)에서 처리해요. 처리하지 않으면 unhandled rejection 경고가 떠요.',
    '8주차 · Promise', { tag: 'Promise' });

  mc(U, 'async 함수의 반환값은?',
    ['항상 Promise', '항상 undefined', '일반 값', '콜백 함수'], 0,
    'async 함수는 return 값을 Promise.resolve로 감싸서 반환해요.',
    '8주차 · async/await', { tag: 'async' });

  mc(U, 'await 키워드는 어디에서 사용할 수 있을까?',
    ['async 함수 안 (모듈 최상위에서도 가능)', '모든 함수 안', '화살표 함수 안에서만', '전역에서만'], 0,
    'await는 async 함수 안에서 Promise가 끝날 때까지 "함수 내부 실행"을 잠시 멈추고 결과를 꺼내요. 다른 코드(스택)는 막지 않아요.',
    '8주차 · async/await', { tag: 'await' });

  or(U, '출력 순서대로 눌러보세요. (async/await)',
    'async function f() {\n  console.log("1");\n  await null;\n  console.log("2");\n}\nf();\nconsole.log("3");',
    ['1', '3', '2'], [],
    'f()는 await 만나기 전까지 동기 실행(1) → 나머지는 마이크로태스크로 미뤄지고 호출자가 계속(3) → 이후 재개(2).',
    '8주차 · async/await', { tag: 'await', run: 'async function f(){ console.log("1"); await null; console.log("2"); } f(); console.log("3");' });

  fb(U, 'async/await에서 에러를 처리하는 구문을 채우세요.',
    'async function load() {\n  ___ {\n    const r = await fetch(url);\n    return await r.json();\n  } ___ (e) {\n    console.log("실패");\n  }\n}', ['try', 'catch'], ['try', 'catch', 'finally', 'then', 'except'],
    'await 한 Promise가 reject되면 예외로 던져져요. try...catch로 잡아서 처리해요.',
    '8주차 · async/await', { tag: 'try/catch' });

  mc(U, 'Promise.all([p1, p2, p3])의 동작은?',
    ['모두 성공하면 결과 배열로 이행, 하나라도 실패하면 즉시 거부', '가장 먼저 끝난 것만 반환', '모두 끝난 뒤 성공/실패 상태를 배열로 반환', '순서대로 하나씩 실행'], 0,
    'all은 병렬 실행 후 모두 성공해야 성공이에요. 가장 빠른 하나는 race, 성공·실패 모두 모으는 것은 allSettled.',
    '8주차 · Promise 정적 메서드', { tag: 'Promise.all' });

  mc(U, 'fetch(url).then(res => res.json())에서 res.json()이 반환하는 것은?',
    ['Promise (파싱된 JS 객체로 이행)', '바로 객체', '문자열', 'undefined'], 0,
    'res.json()도 비동기라 Promise를 반환해요. 그래서 then으로 이어 쓰거나 await를 붙여요.',
    '8주차 · fetch', { tag: 'fetch' });

  mc(U, 'AJAX(Asynchronous JavaScript And XML)의 핵심 이점은?',
    ['페이지 전체를 새로고침하지 않고 서버와 데이터를 주고받아 화면 일부만 갱신한다', '서버를 자바스크립트로 대체한다', 'HTML을 컴파일한다', '이미지를 압축한다'], 0,
    '비동기 통신으로 필요한 데이터만 받아와 DOM 일부를 바꿔요. 현대에는 fetch API를 주로 써요.',
    '8주차 · AJAX', { tag: 'AJAX' });

  mc(U, 'setInterval(fn, 1000)을 중지하려면?',
    ['clearInterval(id)', 'stopInterval()', 'clearTimeout(fn)', 'setInterval(null)'], 0,
    'setInterval은 id를 반환해요. clearInterval(id)로 멈춰요. (setTimeout은 clearTimeout)',
    '8주차 · 타이머', { tag: '타이머' });

  mc(U, '다음 코드에서 "끝"은 언제 출력될까?',
    ['반복문이 끝난 뒤 0.1초 이상 지나서', '즉시', '반복문 도중', '출력되지 않는다'], 0,
    '동기 코드(콜 스택)가 모두 끝나야 타이머 콜백이 실행돼요. 반복문이 오래 걸리면 타이머도 그만큼 늦어져요.',
    '8주차 · 이벤트 루프', { tag: '이벤트 루프', code: 'setTimeout(() => console.log("끝"), 100);\nfor (let i = 0; i < 1e9; i++) {}  // 오래 걸리는 작업' });

  or(U, '출력 순서대로 눌러보세요. (setTimeout 두 개)',
    'setTimeout(() => console.log("느림"), 100);\nsetTimeout(() => console.log("빠름"), 0);\nconsole.log("동기");',
    ['동기', '빠름', '느림'], [],
    '동기 코드가 먼저, 이후 지연 시간이 짧은 타이머 순으로 큐에서 나와요.',
    '8주차 · 이벤트 루프', { tag: '타이머', run: 'setTimeout(() => console.log("느림"), 100); setTimeout(() => console.log("빠름"), 0); console.log("동기");' });
})();
