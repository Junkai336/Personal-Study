//  타입 단언
let person = {};
person.name = "이";
person.age = 270;
let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도"
};
let num1 = 10;
let num2 = 10;
// let num3 = 10 as string;   // 에러
let num4 = 10;
// const 단언
let num5 = 10;
let cat = {
    name: "야옹이",
    color: "yellow",
};
let post = {
    title: "게시글1",
    author: "aa",
};
const len = post.author.length;
export {};
