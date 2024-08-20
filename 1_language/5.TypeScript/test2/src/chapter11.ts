// 타입 추론

let a = 10;
let b = "hello";  // 커서 올려보면 string으로 추론되어 있음
let c = {
  id: 1,
  name: "d",
  profile: {
    nickname: "ds"
  },
  urls: "www.naver.com"
}

let { id, name, profile } = c;

let [ one, two, three ] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

let d;
d = 10;
d.toFixed();

d = "hello";
d.toLowerCase();
// d.toFixed();

// ---

const num = 10;
let num2 = 10;

let arr = [1, "string"];