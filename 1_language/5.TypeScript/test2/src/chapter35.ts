// 분산적 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

// 한번은 string, 한번은 number로 분산되어 들어감
// StringNumberSwitch<number>; => string
// StringNumberSwitch<string>; => number
// 이렇게 두 번 분리되어 들어가고 분리된 결과들을 각각 유니온으로 묶어줌
let c: StringNumberSwitch<number | string>; // 분산적 조건부 타입. 동작 방식이 바뀜

let d: StringNumberSwitch<boolean | number | string>; // number string number => string | number



// 실용적인 예제

