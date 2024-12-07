import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  }

  const onClickDeleteButton = () => {
    onDelete(id);
  }

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckBox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  )
}

// 현재 컴포넌트에 props로 전달되는 onUpdate, onDelete와 같은 함수는 객체 타입이기 때문에 리렌더링 될 때마다 주소값이 새로 생성
// (객체 타입은 값이 동일해도 새로 만들면 주소값이 다르기 때문), 그래서 다른 TodoItem도 리렌더링 됨
// meme 메소드는 기본적으로 얕은 비교(==)를 하므로 매번 새로운 함수로서 props가 전달됨
// export default memo(TodoItem);

// 최적화 기능 커스터마이징
// 메모 메소드는 부모 컴포넌트가 리렌더링 될 때마다 현재 컴포넌트의 props가 바뀌었는지를 자기가 스스로 판단하지 않고,
// 콜백 함수 매개변수의 반환값에 따라 Props가 바뀌었는지 안바뀌었는지 판단
// true => props 바뀌지 않음 => 리렌더링 x
// false => props 바뀜 => 리렌더링 o
export default memo(TodoItem, (prevProps, nextProps) => {
  if(prevProps.id !== nextProps.id) return false;
  if(prevProps.isDone !== nextProps.isDone) return false;
  if(prevProps.content !== nextProps.content) return false;
  if(prevProps.date !== nextProps.date) return false;

  return true;
});