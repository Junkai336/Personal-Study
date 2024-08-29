// any
// 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar = 10; // 타입스크립트는 기본저긍로 우리가 기본적으로 변수의 타입을 지정하지 않아도 초기화하는 값을 기준으로 변수의 타입을 자동 추론함.
// 자동으로 number 타입으로 추론됨
let num = 10;
// anyVar = "hello"; <- x
let anyVar2 = 20;
anyVar2 = "hi";
num = anyVar;
// unknown
let unknownVar;
// 모든 값을 저장할 수는 있지만 반대로는 불가
unknownVar = "";
unknownVar = 1;
unknownVar = () => { };
// num = unknownVar;                  // 모든 타입의 변수에 다 언노운 타입의 값을 넣을 수 없다.
// unknownVar.toUpperCase();          // 에러. 연산도 언노운 타입에서 쓸 수 없음.
if (typeof unknownVar === "number") {
    num = unknownVar; // 언노운 타입의 변수의 타입을 확실히 밝혀주었을 때만 언노운 타입의 변수를 정제해서 사용할 수 있음
}
export {};
