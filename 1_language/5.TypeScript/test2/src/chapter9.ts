// 객체 타입간의 호환성
// 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?

type Animal = {
  name: string;
  color: string;
}

type Dog = {
  name: string;
  color: string;
  breed: string;
}

// 슈퍼타입 : 일반적인 타입
let animal : Animal = {
  name: "기린",
  color: "yellow",
};

// 서브타입 : 더 구체적인 타입
let dog : Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
}

animal = dog;
// dog = animal;  에러()



type Book = {
  name: string;
  price: number;
}

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
}

let book : Book;

let programmingBook : ProgrammingBook = {
  name: "한입크기로잘라먹는리액트",
  price: 33000,
  skill: "reactjs",
}

book = programmingBook;
// programmingBook = book;  에러



// 초과 프로퍼티 검사

let book2: Book = {
  name: "ㅁㅁ",
  price: 11,
  // skill: "aa"        에러!
}

let book3: Book = programmingBook;

function func(book: Book) {}

func({
  name: "ㅇ",
  price: 10,
  // skill: "a",  에러!
})

func(programmingBook);

// 객체 타입은 슈퍼타입이 더 적은 프로퍼티, 서브타입이 더 많은 프로퍼티
// string 타입은 슈퍼타입이 더 일반적, string literal type이 더 구체적 
// 둘이 반대인듯