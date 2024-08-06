// 배열
let numArr: number[] = [1, 2, 3];

let sttArr: string[] = ["a", "b", "c"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "ㅎㅇ", 2];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4 ,5, 6],
]

let doubleArr2: (number | string | boolean)[][] = [
  ["ㅎㅇ", 1, 2],
  [true, 2, 5]
]

// 튜플 : 길이와 타입이 고정된 배열
let tup1:[number, number] = [1, 2];
// tup1 = [1, 2, 3]; 에러
// tup1 = ["1", "2"]; 에러
tup1 = [3, 4];

let tup2:[number, string, boolean] = [1, "a", true];
// tup2 = ["a", 1, false]; 에러 (순서가 다름)

tup2.push(1);
tup2.pop();
tup2.pop();
tup2.pop();

const users: [string, number][] = [
  ["김철수", 1],
  ["이철수", 2],
  ["박철수", 3],
  ["왕철수", 4],
  // [5, "ㅋㅋㄹㅃㅃ"], 에러
];

