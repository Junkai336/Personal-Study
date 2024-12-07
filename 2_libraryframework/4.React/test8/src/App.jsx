import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext
} from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Editor from './components/Editor'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime,
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime,
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": return [action.data, ...state];
    case "UPDATE": return state.map((item) => item.id === action.targetId ? { ...item, isDone: !item.isDone } : item)
    case "DELETE": return state.filter((item) => item.id !== action.targetId)
  }
}

// Context는 보통 컴포넌트 외부에 선언
// App 컴포넌트 안에다가 생성하면, 리렌더링 될 때마다 계속해서 실행하기 때문에 계속 새로운 컨텍스트를 생성하기 때문
// 컨텍스트는 데이터를 하위에 있는 컴포넌트들에게 공급만 해주면 되기 때문에 굳이 다시 생성될 필요 없음
export const TodoContext = createContext();

// Provider : 공급자, 이 컨텍스트가 공급할 데이터를 설정하거나 데이터를 공급받을 컴포넌트들을 설정하기 위해 사용하는 프로퍼티
//            사실 컴포넌트인데, 리턴문 안에서 props를 전달받고 있는 컴포넌트를 감싸도록 <TodoContext.Provider></TodoContext.Provider> 작성하면 ok
//            감싸주게 되면, Provider 컴포넌트 안에 있는 모든 컴포넌트들은 전부 다 컨텍스트의 데이터를 공급받을 수 있게 됨
//            공급은 value props로 전달하면 됨
//            Provider 컴포넌트의 모든 자식 또는 모든 자손 컴포넌트들은 value props로 설정한 컨텍스트가 공급하는 값들을 다이렉트로 꺼내와서 언제든 사용 가능
console.log(TodoContext);

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      }
    }), []
  })

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    }), []
  });

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId
    }), []
  });

  return (
    <div className="App">
      <Header />
      <TodoContext.Provider value={{
        todos, onCreate, onUpdate, onDelete
      }}>
        <Editor />
        <List />
      </TodoContext.Provider>
    </div>
  )
}

export default App