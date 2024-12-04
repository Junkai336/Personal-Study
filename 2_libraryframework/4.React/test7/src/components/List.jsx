import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

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

  return (
    <div className="List">
      <h4>Todo List 👌</h4>
      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요." />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <div key={todo.id}>
              <TodoItem {...todo} onUpdate={onUpdate} onDelete={onDelete} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List;