/* 단원 5 — 객체와 프로토타입 (Ch 6) */
(function () {
  var U = 'u5';

  mc(U, '객체 리터럴로 올바르게 만든 것은?',
    ['const p = { name: "kim", age: 20 };', 'const p = [ name: "kim", age: 20 ];', 'const p = ( name = "kim" );', 'const p = < name: "kim" >;'], 0,
    '객체 리터럴은 { 프로퍼티: 값, ... } 형태예요. 프로퍼티는 키(이름)와 값의 쌍이에요.',
    '7주차 · 객체 리터럴', { tag: '객체 리터럴' });

  mc(U, '프로퍼티에 접근하는 방법이 아닌 것은?',
    ['p->name', 'p.name', 'p["name"]', '구조 분해 const {name} = p'], 0,
    '자바스크립트에는 -> 연산자가 없어요. 점 표기법과 대괄호 표기법을 써요.',
    '7주차 · 프로퍼티 접근', { tag: '접근' });

  mc(U, '대괄호 표기법이 꼭 필요한 경우는?',
    ['키 이름이 변수에 들어 있거나 식별자 규칙에 맞지 않을 때', '키가 숫자일 때만', '키가 영문일 때만', '항상 점 표기법만 가능'], 0,
    'p[key], p["my-key"]처럼 동적인 키나 특수문자가 있는 키는 대괄호로 접근해요.',
    '7주차 · 프로퍼티 접근', { tag: '접근' });

  mc(U, '실행 결과는?',
    ['undefined', 'null', '오류', '""'], 0,
    '존재하지 않는 프로퍼티를 읽으면 오류가 아니라 undefined예요.',
    '7주차 · 프로퍼티', { cat: 'predict', tag: '프로퍼티', code: 'const p = { name: "kim" };\nconsole.log(p.age);', run: 'const p = { name: "kim" }; console.log(p.age);' });

  mc(U, '객체에 새 프로퍼티를 동적으로 추가한 뒤의 결과는?',
    ['20', 'undefined', '오류', 'null'], 0,
    '객체는 언제든 프로퍼티를 추가·삭제할 수 있어요. 없는 키에 값을 대입하면 새로 만들어져요.',
    '7주차 · 프로퍼티 추가', { cat: 'predict', tag: '프로퍼티', code: 'const p = {};\np.age = 20;\nconsole.log(p.age);', run: 'const p = {}; p.age = 20; console.log(p.age);' });

  mc(U, 'const로 선언한 객체의 프로퍼티를 변경하면?',
    ['가능하다 (재할당만 금지)', '오류가 난다', '무시된다', '복사본이 만들어진다'], 0,
    'const는 변수에 다른 값을 재할당하는 것만 막아요. 객체 내부 프로퍼티 변경은 허용돼요.',
    '7주차 · const와 객체', { cat: 'predict', tag: 'const', code: 'const p = { n: 1 };\np.n = 2;\nconsole.log(p.n);' });

  fb(U, '프로퍼티를 삭제하는 연산자를 채우세요.',
    'const p = { a: 1, b: 2 };\n___ p.a;\nconsole.log(p.a);', ['delete'], ['delete', 'remove', 'del', 'pop', 'splice'],
    'delete 연산자로 프로퍼티를 삭제해요. 삭제 후 접근하면 undefined.',
    '7주차 · delete', { tag: 'delete', exec: 'const p = {a:1,b:2}; delete p.a; console.log(p.a)' });

  mc(U, '객체의 메서드란?',
    ['프로퍼티 값으로 들어 있는 함수', '객체를 복사하는 함수', '전역 함수', '배열 전용 함수'], 0,
    '객체의 프로퍼티 값이 함수이면 그것을 메서드라 불러요.',
    '7주차 · 메서드', { tag: '메서드' });

  mc(U, '실행 결과는?',
    ['"안녕, kim"', '"안녕, undefined"', '"안녕, "', '오류'], 0,
    '메서드 안의 this는 메서드를 호출한 객체(p)를 가리켜요.',
    '7주차 · this', { cat: 'predict', tag: 'this', code: 'const p = {\n  name: "kim",\n  hi() { return "안녕, " + this.name; }\n};\nconsole.log(p.hi());', run: 'const p = { name: "kim", hi(){ return "안녕, " + this.name; } }; console.log(p.hi());' });

  mc(U, '화살표 함수를 객체 메서드로 쓰면 this는?',
    ['바깥(상위) 스코프의 this를 가져와서 객체를 가리키지 않는다', '객체를 가리킨다', 'null이다', '항상 window다'], 0,
    '화살표 함수는 자신의 this가 없고 정의된 위치의 this를 그대로 써요. 객체 메서드로는 일반 함수/축약 메서드가 적합해요.',
    '7주차 · 화살표 함수와 this', { tag: 'this' });

  mc(U, 'Object.keys()의 결과는?',
    ['["a", "b"]', '[1, 2]', '[["a", 1], ["b", 2]]', '"a,b"'], 0,
    'Object.keys는 키 배열, Object.values는 값 배열, Object.entries는 [키, 값] 쌍 배열이에요.',
    '7주차 · Object 메서드', { cat: 'predict', tag: 'Object.keys', code: 'const o = { a: 1, b: 2 };\nconsole.log(Object.keys(o));', run: 'console.log(JSON.stringify(Object.keys({a:1,b:2})).replace(/,/g,", "))' });

  mc(U, 'Object.values()의 결과는?',
    ['[1, 2]', '["a", "b"]', '[["a", 1], ["b", 2]]', '3'], 0,
    'values는 값만 배열로 돌려줘요.',
    '7주차 · Object 메서드', { cat: 'predict', tag: 'Object.values', code: 'const o = { a: 1, b: 2 };\nconsole.log(Object.values(o));', run: 'console.log(JSON.stringify(Object.values({a:1,b:2})).replace(/,/g,", "))' });

  mc(U, 'for...in 문은 무엇을 순회할까?',
    ['객체의 열거 가능한 프로퍼티 키', '배열의 값', '문자열의 문자만', '함수의 인자'], 0,
    'for (const k in obj)는 키를 하나씩 꺼내줘요. 배열의 값을 순회하는 것은 for...of.',
    '7주차 · 객체 순회', { tag: 'for...in' });

  mc(U, '출력은?',
    ['a b', '1 2', 'a 1 b 2', '오류'], 0,
    'for...in은 키를 순회해요. 값이 필요하면 obj[k]로 접근해요.',
    '7주차 · 객체 순회', { cat: 'predict', tag: 'for...in', code: 'const o = { a: 1, b: 2 };\nlet s = "";\nfor (const k in o) s += k + " ";\nconsole.log(s.trim());', run: 'const o = {a:1,b:2}; let s=""; for (const k in o) s += k + " "; console.log(s.trim());' });

  fb(U, '구조 분해 할당으로 name과 age를 꺼내세요.',
    'const p = { name: "kim", age: 20 };\nconst ___ name, age ___ = p;\nconsole.log(name, age);', ['{', '}'], ['{', '}', '[', ']', '(', ')'],
    '객체 구조 분해는 중괄호 {}, 배열 구조 분해는 대괄호 []를 써요. 키 이름이 같아야 해요.',
    '7주차 · 구조 분해', { tag: '구조 분해', exec: 'const p = { name: "kim", age: 20 }; const { name, age } = p; console.log(name, age)' });

  mc(U, '배열 구조 분해의 결과는?',
    ['1 3', '1 2', '2 3', '오류'], 0,
    '배열 구조 분해는 순서로 매칭해요. 쉼표로 두 번째 요소를 건너뛰면 b는 세 번째 값 3.',
    '7주차 · 구조 분해', { cat: 'predict', tag: '구조 분해', code: 'const [a, , b] = [1, 2, 3];\nconsole.log(a, b);', run: 'const [a, , b] = [1,2,3]; console.log(a, b)' });

  mc(U, '객체 구조 분해에서 이름을 바꿔 꺼내는 올바른 문법은?',
    ['const { name: n } = p;', 'const { n = name } = p;', 'const { name -> n } = p;', 'const { n as name } = p;'], 0,
    '{ 키: 새이름 } 형태예요. { n = name }은 "n이 undefined일 때 name 변수 값을 기본값으로 쓴다"는 기본값 문법이에요.',
    '7주차 · 구조 분해', { tag: '구조 분해' });

  mc(U, '객체 복사 후 결과는?',
    ['2 2', '1 2', '2 1', '1 1'], 0,
    '객체는 참조로 대입돼요. b = a는 같은 객체를 가리키므로 b.x를 바꾸면 a.x도 바뀌어요.',
    '7주차 · 참조', { cat: 'predict', tag: '참조', code: 'const a = { x: 1 };\nconst b = a;\nb.x = 2;\nconsole.log(a.x, b.x);', run: 'const a={x:1}; const b=a; b.x=2; console.log(a.x, b.x)' });

  mc(U, '스프레드로 만든 얕은 복사 후 결과는?',
    ['1 2', '2 2', '1 1', '2 1'], 0,
    '{ ...a }는 새 객체를 만들어요(얕은 복사). 복사본을 바꿔도 원본은 그대로예요. 단, 중첩 객체는 여전히 같은 참조를 공유해요.',
    '7주차 · 복사', { cat: 'predict', tag: '복사', code: 'const a = { x: 1 };\nconst b = { ...a };\nb.x = 2;\nconsole.log(a.x, b.x);', run: 'const a={x:1}; const b={...a}; b.x=2; console.log(a.x, b.x)' });

  mc(U, '두 객체를 ===로 비교한 결과는?',
    ['false', 'true', 'null', '오류'], 0,
    '객체는 내용이 같아도 서로 다른 참조라서 ===가 false예요. 같은 참조일 때만 true.',
    '7주차 · 참조 비교', { cat: 'predict', tag: '참조', code: 'console.log({ a: 1 } === { a: 1 });', run: 'console.log({a:1} === {a:1})' });

  mc(U, '생성자 함수의 이름은 관례상 어떻게 시작할까?',
    ['대문자', '소문자', '숫자', '밑줄 두 개'], 0,
    '생성자 함수는 대문자로 시작하고 new와 함께 호출해요. (예: new Person())',
    '7주차 · 생성자 함수', { tag: '생성자' });

  fb(U, '생성자 함수로 객체를 만드세요.',
    'function Person(name) {\n  ___.name = name;\n}\nconst p = ___ Person("kim");\nconsole.log(p.name);', ['this', 'new'], ['this', 'new', 'self', 'super', 'return'],
    '생성자 안에서 this는 새로 만들어지는 객체예요. new로 호출해야 객체가 생성돼요.',
    '7주차 · 생성자 함수', { tag: '생성자', exec: 'function Person(name){ this.name = name; } const p = new Person("kim"); console.log(p.name)' });

  mc(U, '생성자 함수를 new 없이 호출하면 (non-strict 모드)?',
    ['this가 전역 객체가 되어 객체가 만들어지지 않는다 (p는 undefined)', '정상적으로 객체가 만들어진다', '자동으로 new가 붙는다', '항상 오류가 난다'], 0,
    'new 없이 호출하면 일반 함수 호출이라 return이 없어서 undefined가 반환돼요.',
    '7주차 · new', { cat: 'predict', tag: 'new', code: 'function P(n) { this.n = n; }\nconst p = P(1);\nconsole.log(p);' });

  mc(U, '프로토타입(prototype)의 역할은?',
    ['같은 생성자로 만든 객체들이 메서드를 공유하게 한다', '객체를 삭제한다', '변수 범위를 정한다', '이벤트를 등록한다'], 0,
    '메서드를 생성자 안에 두면 객체마다 복사돼요. prototype에 두면 모든 인스턴스가 하나를 공유해 메모리를 아껴요.',
    '7주차 · 프로토타입', { tag: '프로토타입' });

  mc(U, '실행 결과는?',
    ['"안녕, kim"', '"안녕, undefined"', 'undefined', '오류'], 0,
    'p에 hi가 없으면 프로토타입 체인을 따라 Person.prototype.hi를 찾아 실행해요. this는 p.',
    '7주차 · 프로토타입 체인', { cat: 'predict', tag: '프로토타입', code: 'function Person(n) { this.name = n; }\nPerson.prototype.hi = function () {\n  return "안녕, " + this.name;\n};\nconst p = new Person("kim");\nconsole.log(p.hi());', run: 'function Person(n){ this.name = n; } Person.prototype.hi = function(){ return "안녕, " + this.name; }; const p = new Person("kim"); console.log(p.hi())' });

  mc(U, '인스턴스 p에서 프로토타입 객체를 가리키는 표준 방법은?',
    ['Object.getPrototypeOf(p)', 'p.prototype', 'p.proto()', 'p.parent'], 0,
    'prototype 프로퍼티는 함수(생성자)에만 있어요. 인스턴스의 프로토타입은 Object.getPrototypeOf(p) 또는 p.__proto__로 확인해요.',
    '7주차 · 프로토타입', { tag: '프로토타입', x: { 1: 'p.prototype은 인스턴스에 없고 생성자 함수에 있어요.' } });

  mc(U, '결과는?',
    ['true', 'false', 'undefined', '오류'], 0,
    'Person.prototype은 p의 프로토타입이므로 instanceof가 true. instanceof는 프로토타입 체인에 생성자의 prototype이 있는지 검사해요.',
    '7주차 · instanceof', { cat: 'predict', tag: 'instanceof', code: 'function Person() {}\nconst p = new Person();\nconsole.log(p instanceof Person);', run: 'function Person(){} const p = new Person(); console.log(p instanceof Person)' });

  mc(U, '자기 자신(own) 프로퍼티인지 확인하는 메서드는?',
    ['hasOwnProperty', 'isOwn', 'contains', 'has'], 0,
    'p.hasOwnProperty("name")은 프로토타입 체인이 아닌 객체 자신의 프로퍼티인지만 검사해요.',
    '7주차 · hasOwnProperty', { tag: 'hasOwnProperty' });

  mc(U, '프로토타입 체인의 끝은?',
    ['null', 'undefined', 'Function', 'window'], 0,
    'Object.prototype의 프로토타입은 null이에요. 체인 끝까지 찾아도 없으면 undefined.',
    '7주차 · 프로토타입 체인', { tag: '프로토타입' });
})();
