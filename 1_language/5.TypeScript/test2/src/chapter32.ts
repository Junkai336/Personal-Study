// 맵드 타입

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in 'id' | 'name' | 'age']? : User[key];
  // [].. : 인덱스 시그니처와 마찬가지로 key가 무엇이 될 수 있는가
  // :... : 어떤 value 값을 가질 것인가
  // 키값으로 id가 있을 수 있고 name이 있을 수 있고 age가 있을 수 있다.
  // User 객체 타입의 키가 id일 때는 value의 타입이 유저 객체 타입의 id인 것이고 나머지도 마찬가지...
  // User["id"], User["name"], User["age"]

  // ?를 붙이면 맵드 타입의 모든 프로퍼티가 선택적 프로퍼티가 된다.
}

// 전부 boolean으로 변경
type BooleanUser = {
  [key in keyof User] : boolean;
}

type ReadonlyUser = {
  readonly [key in keyof User] : User[key];
}

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ... 기능
  return {
    id: 1,
    name: "이",
    age: 21,
  };
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
  // ... 수정하는 기능

}

updateUser({
  id: 1,
  name: "이",
  age: 25,
});