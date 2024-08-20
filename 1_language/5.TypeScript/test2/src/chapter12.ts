//  타입 단언

type Person = {
  name : string;
  age: number;
}

let person = {} as Person;

person.name = "이";
person.age = 270;

type Dog = {
  name : string;
  color : string;
}

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도"
} as Dog;

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string;   // 에러

let num4 = 10 as unknown as string;



// const 단언

let num5 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const

// cat.name = 'd';



// Non Null 단언

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "aa",
};

const len: number = post.author!.length;