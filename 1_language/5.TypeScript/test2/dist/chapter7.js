// void
// void -> 공허 -> 아무것도 없음을 의미하는 타입
//                  ↓ 반환값 타입 정의 : 이 함수의 반환값이 문자열이다. 명시.
function func1() {
    return "hello";
}
//                  ↓ 아무것도 반환하지 않음
function func2() {
    console.log("hello");
}
let a;
// a = 1;
a = undefined;
// a = null;       // tsconfig.json에서 strictNullChecks false시 null 집어넣을 수 있음
// never
// never -> 존재하지 않는
// 불가능한 타입
function func3() {
    while (true) { }
}
function func4() {
    throw new Error();
}
let ab; // 어떠한 값도 저장할 수 없다 (any, null 모두 포함)
export {};
// ab = 1;      // 에러
