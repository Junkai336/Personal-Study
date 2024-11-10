import { useState } from "react";

// input 하나에 대응하는 이벤트 핸들러, state 코드가 많기 때문에 비슷한 컴포넌트가 여러개 생길 경우 중복 작성하는 스테이트, 이벤트 핸들러가 많아짐
// 일반 js 함수에서는 훅을 호출하면 오류가 나므로 use라는 접두사를 붙여 커스텀 훅으로 만듬
// 컴포넌트마다 반복되어서 동작하는 로직이 있고 해당 로직이 hook을 사용하는 로직이라면, 커스텀 훅으로 만들어서 분리해 줄 수 있음
function useInput() {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, setInput];
}

export default useInput;