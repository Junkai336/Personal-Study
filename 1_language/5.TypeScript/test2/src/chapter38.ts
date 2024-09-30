// Pick<T, K>
// 뽑다 고르다
// 객체 타입으로부터 특정 프로퍼티만 골라내는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// K extends 'title' | 'tags' | 'content' | 'thumbnialURL'
// 'title' | 'content' exnteds 'title' | 'tags' | 'content' | 'thumbnialURL'
// T(슈퍼 타입, 더큼)가 K(서브 타입, 더작음)를 포함하는 타입
type Pick<T, K extends keyof T> = {
  [key in K] : T[key];
}

const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
}



// Omit<T, K>
// 생략하다, 빼다
// 객체 타입으로부터 특정 프로퍼티를 제거하는 타입

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>

const noTitlePost: Omit<Post, 'title'> = {
  content: "",
  tags: [],
  thumbnailURL: "",
}



// Record<Key, Value>
// 객체 타입을 만들어주는 유틸리티 타입

type ThumbnailLegacy = {
  larget: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  }
}

type Record<K extends keyof any, V> = {
  [key in K] : V
}

type Thumbnail = Record<'large'|'medium'|'small'|'watch', {url : string; size: number;}>