// 대수타입

// 합집합 타입 (Union 타입)

let a : string | number | boolean | {}

a = 1;
a = "d";
a = true;
a = {name: "ㅎㅇ"}

let arr : (number | string | boolean)[] = [1, "hello", true, 1, 2, 3];

type Dog = {
  name : string;
  color : string;
}

type Person = {
  name: string;
  language: string;
}

type Union1 = Dog | Person

let union1 : Union1 = {
  name : "",
  color : "",
}

let union2 : Union1 = {
  name : "",
  language : "",
}

let union3 : Union1 = {
  name : "",
  color : "",
  language : "",
}

// let union4 : Union1 = {    // 에러!  name 프로퍼티만 있는 객체는 합집합, 교집합도 아님
//  name : ""
// }



// 교집합 타입 (Intersection 타입)

let variable: number & string;  // 마우스를 올리면 never 타입 (공집합) , number 와 string 타입의 교집합은 공집합이다.

type Intersection = Dog & Person;

let Intersection1 : Intersection = {
  name : "",
  color : "",
  language : ""
}