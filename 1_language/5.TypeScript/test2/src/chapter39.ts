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
