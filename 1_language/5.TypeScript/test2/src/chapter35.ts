// 분산적 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

// 분산적인 조건부 타입을 만들고 싶지 않을 때.
// type StringNumberSwitch<T> = [T] extends [number] ? string : number;             <- ?

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

// 한번은 string, 한번은 number로 분산되어 들어감
// StringNumberSwitch<number>; => string
// StringNumberSwitch<string>; => number
// 이렇게 두 번 분리되어 들어가고 분리된 결과들을 각각 유니온으로 묶어줌
let c: StringNumberSwitch<number | string>; // 분산적 조건부 타입. 동작 방식이 바뀜

let d: StringNumberSwitch<boolean | number | string>; // number string number => string | number



// 실용적인 예제

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

// Exclude<number, string> | Exclude<string, string> | Exclude<boolean, string>       <- ?

// number
// never
// booelan

// 결과 : number | never | boolean
// never는 공집합이기 때문에 사라짐
// number | boolean 

// U에 해당하는 타입을 지운다.

// 분산적인 조건부 타입을 이용해서 특정 유니온 타입으로부터 특정 타입만 제거한 유니온 타입을 얻어내는 것 가능



type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>