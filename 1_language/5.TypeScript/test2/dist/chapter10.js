// 대수타입
// 합집합 타입 (Union 타입)
let a;
a = 1;
a = "d";
a = true;
a = { name: "ㅎㅇ" };
let arr = [1, "hello", true, 1, 2, 3];
let union1 = {
    name: "",
    color: "",
};
let union2 = {
    name: "",
    language: "",
};
let union3 = {
    name: "",
    color: "",
    language: "",
};
// let union4 : Union1 = {    // 에러!  name 프로퍼티만 있는 객체는 합집합, 교집합도 아님
//  name : ""
// }
// 교집합 타입 (Intersection 타입)
let variable; // 마우스를 올리면 never 타입 (공집합) , number 와 string 타입의 교집합은 공집합이다.
let Intersection1 = {
    name: "",
    color: "",
    language: ""
};
export {};
