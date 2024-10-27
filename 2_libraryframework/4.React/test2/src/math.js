// math 모듈

// 밑에 export랑 똑같이 동작
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// default로서 내보내져서 math 모듈을 대표하는 단 하나의 기본값이 됨
// 다른 모듈에서 불러올 때 중괄호 없이 불러와야 함

export default function multiply(a, b) {
  return a * b;
}

// cjs
// key, value 값으로 함수를 내보냄
// key = value 라면 key 생략하면 알아서 key : value 값으로 똑같이 들어감
// module.exports = {
//   // add: add,
//   // sub: sub,
//   // 혹은
//   add,
//   sub
// }

// es module
// export { add, sub };