// cjs
// const moduleData = require("./math");
// const { add, sub } = require("./math");

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));


// es module
import mul, {add, sub} from "./math.js";   // math 모듈로부터 add sub를 가져온다.
// import mul from "./math.js";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));

// 라이브러리 불러오기
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);