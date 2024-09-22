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

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num2 = returnFirstValue([0, 1, 2]);

let str2 = returnFirstValue([0, "hello", "myname"]);



// 세번째 사례

interface interfaceA {
  length: number;
}

interface interfaceB extends interfaceA {}                        // interfaceB에 포함되는 객체들은 interfaceA의 length 프로퍼티를 무조건 가지고 있어야 한다.

function getLength<T extends { length : number }>(data: T) {      // T는 확장하는 타입인데, length 프로퍼티를 가지고 있는 객체를 확장하는 타입으로 T를 제한하는 것
  return data.length;
}

let var1 = getLength([1, 2, 3]);

let var2 = getLength("abcde");

let var3 = getLength({ length: 10 });