import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DiaryList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  }

  // sort는 어떤 값도 반환하지 않고 원본 배열을 정렬하는 메소드
  // toSorted()는 원본 배열은 그대로 냅두고 정렬된 새로운 배열 반환
  const getSortedDate = () => {
    return data.toSorted((a, b) => {
      if (sortType === 'oldest') {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    })
  }

  const sortedDate = getSortedDate();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button onClick={() => nav("/new")} text={"새 일기 쓰기"} type={"POSITIVE"} />
      </div>
      <div className="list_wrapper">
        {/* 리액트에서는 리스트 형태로 어떤 컴포넌트나 UI를 렌더링할 때 각각의 모든 아이템에 반드시 고유한 키 값을 설정해야 함  */}
        {sortedDate.map((item) =>
          <DiaryItem key={item.id} {...item} />
        )}
      </div>
    </div>
  )
}

export default DiaryList;