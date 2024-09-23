// 인덱스드 엑세스 타입

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
    location?: string;
  };
}
                                      // 아래 스트링 리터럴 타입을 인덱스라고 부름 (값이 아니라 타입이 들어가야 함)
function printAuthorInfo (author: Post['author']) {               // 타입으로부터 특정 프로퍼티 타입만 객체 타입만 똑 떼서 사용 가능
  // function printAuthorInfo (author: Post['author']['id']) {    // id 프로퍼티만 떼오기
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "ㅁ",
    age: 1,
  },
};

printAuthorInfo(post.author);

// 배열과 함께 사용하는 법

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
    location?: string;
  };
}[];
                                      
function printAuthorInfo2 (author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "ㅁ",
    age: 1,
  },
};

printAuthorInfo2(post2.author);

// 튜플
type Tup = [number, string, boolean];

type Tup2 = Tup[0];
type Tup3 = Tup[1];
type Tup4 = Tup[2];
type TupNum = Tup[number];  // 세타입의 유니온 타입으로 추출함