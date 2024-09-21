// 제네릭

// 제네릭 함수
function func<T>(value: T): T {
  return value;
}

let num = func(10);

let bool = func(true);

let str = func("string");

let arr = func<[number, number, number]>([1, 2, 3]);

// ----------------------------------------------------------------------------------------

// 첫번째 사레

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap(1, "2");

// 두번째 사례

function returnFirstValue<T>(data: T[]) {                 // 호출 전에는 unknown 타입으로 추론
  return data[0];
}

let num2 = returnFirstValue([0, 1, 2]);

let str2 = returnFirstValue(["hello", "myname"]);