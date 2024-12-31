import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

// 배열에 담긴 값을 리스트 형태로 반복적으로 렌더링하려면 map 메소드를 이용하면 됨
// 하나의 콜백함수를 받은 다음 배열의 모든 요소에 대해서 콜백 함수를 수행한 뒤 콜백 함수가 리턴한 반환 값들을 모아서 새로운 배열로 반환
// map 메소드를 jsx에서 사용할 때 콜백 함수가 HTML 요소를 반환하도록 할 수 있음

// 

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  // 리렌더링 되면서 다시 읽는 듯?
  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => { todo.content.toLowerCase().includes(search.toLowerCase()); })
  }

  const filteredTodos = getFilteredData();



  const {totalCount, doneCount, notDoneCount} = useMemo(() => {
    console.log("getAnalyzedData 호출");

    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    }
  }, [todos])
  // [] : 의존성 배열 : deps => deps에 포함된 값이 변경되었을 때만 첫번째 인수로 전달한 콜백함수를 다시 실행함
  //      해당 콜백 함수가 반환하는 값을 useMemo는 그대로 다시 반환함
  
  // 1. useMemo는 첫번째 콜백함수가 반환하는 값을 그대로 반환함 (그래서 객체 구조분해할당으로 받을 수 있음)
  // 2. 첫번째 인수로 전달한 콜백 함수를 두번째 인수인 deps를 기준으로 메모이제이션 함 
  //    아무것도 전달하지 않았을 때는 첫번째 콜백함수의 수행 + 반환이 최초 렌더링시 단 한번만 일어남
  
  // => 우리가 원하는 어떠한 연산을 특정 조건이 만족하지 않았을 때에는 다시 수행하지 않도록 만들 수 있음.


  return (
    <div className="List">
      <h4>Todo List 👌</h4>

      <div>total: {totalCount}</div>
      <div>done: {doneCount}</div>
      <div>notDone: {notDoneCount}</div>

      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요." />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
              <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
          )
        })}
      </div>
    </div>
  )
}

export default List;