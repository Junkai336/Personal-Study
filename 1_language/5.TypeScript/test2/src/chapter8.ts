// Unknown 타입 (전체집합)
// 모든 타입의 슈퍼 타입

function unknownExam() {
  // 전부 unknown 타입으로 업 캐스팅이 됨
  let a: unknown = 1;
  let b: unknown = "h";
  let c: unknown = [];
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // let num: number = unknownVar; 다운 캐스팅 불가!
}

// Never 타입
// 모든 타입의 서브 타입
// 모든 집합의 부분 집합 (공집합)

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();

  // let never: never = 10; never 타입엔 아무런 값도 넣을 수 없다.
}

// Void 타입

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined; // void 타입은 undefined의 슈퍼타입이므로 가능
  }

  let voidVar: void = undefined;
}

// any 타입
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefined: undefined;
  let neverVar: never;

  anyVar = unknownVar; // any 타입 한정으로 unknown 타입도 any 타입으로 다운 캐스팅 할 수 있음
  undefined = anyVar;  // undefined 값에 any 타입을 넣는 다운 캐스팅 할 수 있음

  // any 타입은 다운 캐스팅이 되는 치트키같은 타입, 타입 계층도를 무시함

  // neverVar = anyVar; 에러 (any타입이어도 never 타입으로까지 다운캐스팅 할 수는 없다.)
}
