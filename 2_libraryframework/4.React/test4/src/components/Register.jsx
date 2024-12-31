import { useState, useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name : "",
    birth : "",
    country : "",
    bio : "",
  });

  // current라는 프로퍼티를 가진 객체가 생성
  const countRef = useRef(0);
  const inputRef = useRef();

  console.log(input);

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef);
    console.log(e.target.name, e.target.value)
    // 프로퍼티 키 자리에다가 대괄호를 열고 그 안에 변수의 이름을 쓰면 , 변수의 값이 프로퍼티의 키로써 설정이 된다.
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  // const onChangeName = (e) => {
  //   // 기존에 있던 값들을 그대로 유지시키기 위해 스프레드 연산자 사용
  //   setInput({
  //     ...input,
  //     name : e.target.value
  //   });
  // }

  // const onChangeBirth = (e) => {
  //   setInput({
  //     ...input,
  //     birth : e.target.value
  //   });
  // }

  // const onChangeCountry = (e) => {
  //   setInput({
  //     ...input,
  //     country : e.target.value
  //   });
  // }

  // const onChangeBio = (e) => {
  //   setInput({
  //     ...input,
  //     bio : e.target.value
  //   });
  // }

  const onSubmit = () => {
    if(input.name === "") {
      // 이름을 입력하는 DOM 요소에 포커스
      console.log(inputRef.current);
      // input이라는 DOM요소에 focus를 줄 수 있음
      inputRef.current.focus();
    }
    
  }

  return (
    <div>
      <button
        onClick={() => {
          countRef.current++;
          console.log(countRef.current);
        }}
      >

      </button>

      <div>
        <input
          ref={inputRef}
          type="text"
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
        {input.name}
      </div>
      <div>
        <input
          type="date"
          name="brith"
          value={input.birth}
          onChange={onChange}
        />
        {input.birth}
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.country}
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
        {input.bio}
      </div>

      <button onClick={onSubmit}></button>
    </div>
  )
}

export default Register;