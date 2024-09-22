// map 메소드

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);       // 콜백함수의 반환 값을 모아서 새로운 배열로 반환

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(
      callback(arr[i])
    );
  }

  return result;
}

map(arr, (it) => it * 2);
map(["1", "2"], (it) => parseInt(it));

// forEach 메소드

const arr2 = [1, 2, 3];

arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

//    number[] number
forEach(arr2, (it) => {
  console.log(it.toFixed());
});

forEach(['123','456'], (it) => {
  console.log(it.toUpperCase());
})