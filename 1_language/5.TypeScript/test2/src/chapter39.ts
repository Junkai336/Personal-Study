// Exclude<T, U>
// 제외하다, 추방하다
// T에서 U를 제거하는 타입

type Exclude<T, U> = T extends U ? never : T;
// Exclude<string, boolean> | Exclude<boolean, boolean>
// string | never
// never는 공집합이기 때문에 사라짐
// string

type A = Exclude<string | boolean, boolean>;



// Extract<T, U>
// T에서 U를 추출하는 타입
type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;



// ReturnType
// 함수의 반환값 타입을 추출하는 타입
type ReturnType<T extends (...args : any) => any> = T extends (...args : any) => infer R ? R : never; // T 타입이 서브타입이 되도록 하는 R을 추론하라.

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;

type ReturnB = ReturnType<typeof funcB>;  // funcB의 리턴타입이 number라서 ReturnB가 number 타입이 됨