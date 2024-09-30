// infer(inference(추론))

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => string ? string : never;

type A = ReturnType<FuncA>;

// 서로소 타입 : 둘 중 그 누구도 서로의 슈퍼 타입이거나 서브 타입이 아니다. 교집합이 없다.
type B = ReturnType<FuncB>;


// ---


type FuncC = () => string;

type FuncD = () => number;

// infer R은 일단 R이라는 타입 변수처럼 동작,
// T(() => string 혹은 () => number)가 함수 () => R의 서브타입이냐? 비교
// 서브타입이 되려면 R타입이 string 혹은 number 타입이 되어야 하기 때문에 string 혹은 number로 추론됨
// 그러므로 조건식이 결국 참이 되며 R 타입이 되고 반환됨

// 조건식을 참으로 만드는 R 타입을 추론할 수 있으면 조건식이 참이라고 판단해서 R 타입을 반환
type ReturnType2<T> = T extends () => infer R ? R : never;

type C = ReturnType2<FuncC>;

type D = ReturnType2<FuncD>;

type E = ReturnType2<number>;       // 도저히 이 타입이 슈퍼 타입이 될 방법이 없음 (추론 불가)


// 예제

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;

type PromiseB = PromiseUnpack<Promise<string>>;