/* 단원 6 — 클래스 (Ch 9) */
(function () {
  var U = 'u6';

  mc(U, 'ES6 클래스의 정체에 가장 가까운 설명은?',
    ['프로토타입 기반 상속을 더 읽기 쉽게 쓰는 문법(문법적 설탕)', '자바처럼 완전히 새로운 객체 모델', '컴파일 시점에 만들어지는 타입', '함수와 전혀 관계없는 구조'], 0,
    'class는 내부적으로 생성자 함수 + 프로토타입으로 동작해요. typeof 클래스는 "function".',
    '8주차 · 클래스', { tag: '클래스' });

  fb(U, '클래스를 선언하고 생성자를 정의하세요.',
    '___ Person {\n  ___(name) {\n    this.name = name;\n  }\n}\nconst p = new Person("kim");\nconsole.log(p.name);', ['class', 'constructor'], ['class', 'constructor', 'function', 'init', 'def'],
    'class 키워드로 선언하고, 인스턴스 초기화는 constructor 메서드에서 해요. new 호출 시 자동 실행돼요.',
    '8주차 · 클래스 선언', { tag: 'constructor', exec: 'class Person { constructor(name){ this.name = name; } } const p = new Person("kim"); console.log(p.name)' });

  mc(U, '클래스의 메서드는 어디에 저장될까?',
    ['프로토타입(Person.prototype)', '각 인스턴스', '전역 객체', 'constructor 안의 지역 변수'], 0,
    '클래스 본문의 메서드는 prototype에 하나만 만들어져 모든 인스턴스가 공유해요.',
    '8주차 · 클래스 메서드', { tag: '메서드' });

  mc(U, '실행 결과는?',
    ['"멍멍, 초코"', '"멍멍, undefined"', 'undefined', '오류'], 0,
    '메서드의 this는 호출한 인스턴스(d)예요.',
    '8주차 · 메서드', { cat: 'predict', tag: '메서드', code: 'class Dog {\n  constructor(n) { this.n = n; }\n  bark() { return "멍멍, " + this.n; }\n}\nconsole.log(new Dog("초코").bark());', run: 'class Dog { constructor(n){ this.n = n; } bark(){ return "멍멍, " + this.n; } } console.log(new Dog("초코").bark())' });

  mc(U, '클래스 선언은 호이스팅되어 선언 전에 사용할 수 있을까?',
    ['없다 — 선언 전에 접근하면 오류 (TDZ)', '있다', '선언 전에는 undefined', '함수 선언문과 동일'], 0,
    '클래스는 let/const처럼 TDZ가 있어 선언 이전에 접근하면 ReferenceError예요.',
    '8주차 · 클래스 선언', { cat: 'predict', tag: '호이스팅', code: 'const d = new Dog();\nclass Dog {}', x: { 1: '함수 선언문과 달리 클래스는 호이스팅 후에도 초기화 전까지 접근 불가예요.' } });

  mc(U, '클래스를 new 없이 호출하면?',
    ['TypeError가 발생한다', '정상 호출된다', 'undefined 반환', 'this가 window가 된다'], 0,
    '클래스 생성자는 new 없이 호출할 수 없어요. 생성자 함수와 다른 점이에요.',
    '8주차 · 클래스 호출', { tag: 'new' });

  fb(U, '클래스를 상속하세요.',
    'class Animal {\n  speak() { return "..."; }\n}\nclass Dog ___ Animal {\n  speak() { return "멍멍"; }\n}\nconsole.log(new Dog().speak());', ['extends'], ['extends', 'inherits', 'implements', 'super', ':'],
    '자식 클래스는 extends로 부모를 상속해요. 같은 이름의 메서드를 정의하면 오버라이딩.',
    '8주차 · 상속', { tag: 'extends', exec: 'class Animal { speak(){ return "..."; } } class Dog extends Animal { speak(){ return "멍멍"; } } console.log(new Dog().speak())' });

  fb(U, '자식 생성자에서 부모 생성자를 호출하세요.',
    'class A {\n  constructor(x) { this.x = x; }\n}\nclass B extends A {\n  constructor(x, y) {\n    ___(x);\n    this.y = y;\n  }\n}\nconst b = new B(1, 2);\nconsole.log(b.x, b.y);', ['super'], ['super', 'this', 'parent', 'base', 'A'],
    'extends한 클래스의 생성자에서는 this를 쓰기 전에 반드시 super(...)를 먼저 호출해야 해요.',
    '8주차 · super', { tag: 'super', exec: 'class A { constructor(x){ this.x = x; } } class B extends A { constructor(x,y){ super(x); this.y = y; } } const b = new B(1,2); console.log(b.x, b.y)' });

  mc(U, 'extends한 자식 생성자에서 super()를 호출하기 전에 this를 사용하면?',
    ['ReferenceError가 발생한다', 'undefined가 반환된다', '정상 동작한다', '자동으로 super()가 호출된다'], 0,
    '부모 생성자가 객체를 만들기 때문에 super() 전에는 this가 초기화되지 않아요.',
    '8주차 · super', { tag: 'super' });

  mc(U, '실행 결과는?',
    ['"A", "B"', '"B"', '"B", "A"', '"A"'], 0,
    'super.hi()로 부모의 메서드를 호출할 수 있어요. 부모(A)를 먼저 출력하고 자식(B)을 출력해요.',
    '8주차 · super 메서드', { cat: 'predict', tag: 'super', code: 'class A { hi() { return "A"; } }\nclass B extends A {\n  hi() { return super.hi() + ", B"; }\n}\nconsole.log(new B().hi());', run: 'class A { hi(){ return "A"; } } class B extends A { hi(){ return super.hi() + ", B"; } } console.log(new B().hi())' });

  mc(U, '정적(static) 메서드는 어떻게 호출할까?',
    ['클래스 이름으로 호출 (Class.method())', '인스턴스로 호출', '둘 다 가능', 'new와 함께만'], 0,
    'static 메서드는 클래스 자체에 붙어요. 인스턴스에서는 호출할 수 없어요. (예: Math.max, Array.isArray)',
    '8주차 · static', { tag: 'static', x: { 1: '인스턴스에는 static 메서드가 없어요.' } });

  mc(U, '실행 결과는?',
    ['3', 'undefined', '오류', '"3"'], 0,
    'static 메서드를 클래스 이름으로 호출했어요.',
    '8주차 · static', { cat: 'predict', tag: 'static', code: 'class M {\n  static add(a, b) { return a + b; }\n}\nconsole.log(M.add(1, 2));', run: 'class M { static add(a,b){ return a+b; } } console.log(M.add(1,2))' });

  mc(U, 'getter를 정의하는 키워드는?',
    ['get', 'getter', 'getValue', 'return'], 0,
    'get 이름() { ... } 으로 정의하면 메서드지만 p.이름처럼 괄호 없이 프로퍼티처럼 읽어요. 세터는 set.',
    '8주차 · getter/setter', { tag: 'get/set' });

  mc(U, '실행 결과는?',
    ['20', '10', 'undefined', '오류'], 0,
    'set이 대입 시 실행돼 _v에 값이 저장되고, get이 읽을 때 반환해요.',
    '8주차 · getter/setter', { cat: 'predict', tag: 'get/set', code: 'class T {\n  set v(x) { this._v = x * 2; }\n  get v() { return this._v; }\n}\nconst t = new T();\nt.v = 10;\nconsole.log(t.v);', run: 'class T { set v(x){ this._v = x*2; } get v(){ return this._v; } } const t = new T(); t.v = 10; console.log(t.v)' });

  mc(U, '클래스 필드 앞에 #을 붙이면?',
    ['클래스 외부에서 접근할 수 없는 private 필드가 된다', '상수가 된다', '정적 필드가 된다', '주석 처리된다'], 0,
    '#field는 클래스 내부에서만 접근 가능해요. 밖에서 접근하면 SyntaxError.',
    '8주차 · private 필드', { tag: 'private' });

  mc(U, '클래스 안에서 this를 써야 하는 이유로 알맞은 것은?',
    ['현재 인스턴스의 프로퍼티와 메서드에 접근하기 위해', '전역 변수에 접근하기 위해', '부모 클래스를 가리키기 위해', '정적 메서드를 호출하기 위해'], 0,
    '인스턴스의 필드는 this.필드로 접근해요. this 없이 쓰면 지역/전역 변수를 찾아요.',
    '8주차 · this', { tag: 'this' });

  mc(U, 'typeof 클래스의 결과는?',
    ['"function"', '"class"', '"object"', '"undefined"'], 0,
    '클래스는 함수의 한 종류예요.',
    '8주차 · 클래스', { cat: 'predict', tag: '클래스', code: 'class A {}\nconsole.log(typeof A);', run: 'class A {} console.log(typeof A)' });

  mc(U, 'instanceof 결과는? (B extends A)',
    ['true', 'false', 'undefined', '오류'], 0,
    '자식 인스턴스는 부모 클래스의 인스턴스이기도 해요(프로토타입 체인에 A.prototype 존재).',
    '8주차 · instanceof', { cat: 'predict', tag: 'instanceof', code: 'class A {}\nclass B extends A {}\nconsole.log(new B() instanceof A);', run: 'class A {} class B extends A {} console.log(new B() instanceof A)' });

  mc(U, '자식 클래스에 constructor를 아예 정의하지 않으면?',
    ['부모 생성자가 인자를 그대로 받아 자동 호출된다', '오류가 난다', '빈 객체가 만들어진다', '부모 생성자는 호출되지 않는다'], 0,
    '암묵적 constructor(...args) { super(...args); }가 자동으로 만들어져요.',
    '8주차 · 상속', { tag: '상속' });

  mc(U, 'toString()을 오버라이드한 클래스를 문자열과 연결하면?',
    ['오버라이드한 toString() 결과가 사용된다', '[object Object]', 'undefined', '오류'], 0,
    '객체를 문자열로 바꿀 때 toString()이 호출돼요. 직접 정의하면 그 결과를 써요.',
    '8주차 · toString', { cat: 'predict', tag: 'toString', code: 'class P {\n  toString() { return "P!"; }\n}\nconsole.log("값: " + new P());' });
})();
