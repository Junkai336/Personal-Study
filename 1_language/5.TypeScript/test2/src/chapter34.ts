// 조건부 타입

type A = number extends string ? string : number;   // number 타입이 string type을 확장하는 타입이면 string 아니면 number

type ObjA = {
  a: number;
}

type ObjB = {
  a: number;
  b: number;
}

type B = ObjB extends ObjA ? number : string;

// 제네릭과 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;


// 조건부 타입을 함수의 반환값 타입으로 정의하면 조건에 따라 반환값 타입을 원하는 대로 바꿀 수 있어서 편리함
function removeSpaces<T>(text: T): T extends string ? string : undefined  // 오버로드 시그니처

function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im winter");
result.toLowerCase();

let result2 = removeSpaces(undefined);