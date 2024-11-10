import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(`count: ${count}, input: ${input}`)
  }, [count, input])

  const onClickButton = (value) => {
    setCount(count + value);

    // useEffect를 쓰지 않으면 변경되기 이전의 값을 출력하게 됨
    // setCount라는 상태변화함수는 비동기로 동작하게 되는데, 함수를 여기서 호출했지만 함수의 완료는 나중에 뒤늦게 됨
    // console.log 라인이 실행될 때에는 setCount가 호출만 된 것이지 완료가 된 것이 아니므로 변경되기 이전의 값이 계속 출력되는 것
    // 리액트 state는 비동기로 업데이트 되기 때문에 변경된 state 값 || 사이드 이펙트를 바로 사용하기 위해서는 useEffect를 이용해야 함
    console.log(count);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => {
          setInput(e.target.value);
        }} />
      </section>
      <section>
        <Viewer
          count={count}
        />
      </section>
      <section>
        <Controller 
          onClickButton={onClickButton}
        />
      </section>
    </div>
  )
}

export default App
