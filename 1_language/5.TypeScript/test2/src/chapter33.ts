// 템플릿 리터럴 타입

type Color = 'red' | 'black' | 'green';

type Animal = 'dog' | 'cat' | 'chicken';

// type ColoredAnimal = 'red-dog' | 'red-cat' | 'red-chicken' | 'black-dog';

// 모든 타입들이 조합된 타입으로 만들어짐
type ColoredAnimal = `${Color}-${Animal}`;

