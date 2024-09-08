// 함수 오버로딩

// 버전들
// 오버로드 시그니처 : 함수의 구현부 없이 선언부만 적어놓은 것
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 구현 시그니처 : 실제 구현부
function func() {}

// func();      오류
func(1);
// func(1,2);   오류
func(1,2,3);

// -------------------------

function func2(a: number): void;
function func2(a: number, b: number, c: number): void;

function func2(a: number, b?: number, c?: number) {     // 선택적 프로퍼티로 정의해서 모든 오버로드 시그니처가 의미가 있게 만들어야 함
  if(typeof b == 'number' && typeof c == 'number') {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}