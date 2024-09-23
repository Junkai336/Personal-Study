// keyof 연산자

interface Person {
  name: string;
  age: number;
  location?: string;
}

function getPropertyKey(person: Person, key: keyof Person) {  // Person 객체의 모든 타입을 union 타입으로 추출함 name | age
  return person[key];
}

const person: Person = {
  name: "이",
  age: 1,
};

getPropertyKey(person, "name");  // 이

typeof person === 'object';      // 특정 변수의 타입을 string 값으로 반환하는 연산자

// --

// 

type Person2 = typeof person2;                                            // person2 변수의 타입을 추론해서 타입 별칭에다가 정의를 해주는 것

function getPropertyKey2(person2: Person2, key: keyof typeof person2) {   // typeof 연산자는 타입을 정의할 때 사용하면 변수의 타입을 뽑아내는 용도로도 사용 가능
  return person2[key];
}

const person2 = {
  name: "이",
  age: 1,
};

getPropertyKey2(person2, "name");