// 타입 별칭

// 타입 중복 문제 발생
let user: {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
} = {
  id: 1,
  name: "ㅎㅇ",
  nickname : "ㅎㅇ2",
  birth: "1990.01.01",
  bio: "ㅎㅇ",
  location: "부천시"
}

let user2: {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
} = {
  id: 1,
  name: "ㅎㅇ",
  nickname : "ㅎㅇ2",
  birth: "1990.01.01",
  bio: "ㅎㅇ",
  location: "부천시"
}

// ---------------

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
}

// type User = {} 동일 스코프 내에서 중복 불가

function func() {
  type User = {};
}

let user3: User = {
  id: 1,
  name: "ㅎㅇ",
  nickname : "ㅎㅇ2",
  birth: "1990.01.01",
  bio: "ㅎㅇ",
  location: "부천시"
}

let user4: User = {
  id: 1,
  name: "ㅎㅇ",
  nickname : "ㅎㅇ2",
  birth: "1990.01.01",
  bio: "ㅎㅇ",
  location: "부천시"
}

// ----

// 인덱스 시그니처
type CountryCodes = {
  [key : string] : string;
}

type CountryNumberCodes = {
  [key : string] : number;  // 프로퍼티가 없어도 에러가 나지 않음.
  Korea : number;           // 꼭 필요한 프로퍼티는 명시
  // Korea2 : string;       // 오류. 인덱스 시그니처와 타입이 일치하지 않으면 오류
}

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState : 'us',
  UnitedKingdom: 'uk'
}

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
  // Korea2: 'd' 오류
}