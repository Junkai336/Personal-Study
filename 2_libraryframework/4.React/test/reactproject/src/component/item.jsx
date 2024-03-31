import { useState } from "react";

const List = () => {
    const [items, setItems] = useState([
        { id: 0, name: "세계 일주 여행" },
        { id: 1, name: "스카이 다이빙" },
        { id: 2, name: "오로라 구경하기" },
        { id: 3, name: "마라톤 완주" }
    ]);
    const [inputText, setValue] = useState(""); // input 요소의 입력 필드에 작성하는 내용을 그대로 inputText 변수에 업데이트할 수 있도록 함
    const [id, setId] = useState(4); // 이제부터 추가되는 아이템의 key 값은 4부터 시작함.

    const onChange = (e) => setValue(e.target.value);

    const onClick = () => {
        const newItems = items.concat({
            id: id,
            name: inputText
        });
        setItems(newItems);
        setId(id + 1);
        setValue("");
    };

    const onRemove = (id) => {
        const newItems = items.filter((name) => name.id !== id);
        setItems(newItems);
    };
    
    // filter 메소드를 사용하여 인수로 전달받은 id 값에 해당하는 요소만을 제외한 새로운 배열을 생성하게 함
    // 해당 요소가 제거된 새로운 배열을 newItems에 업데이트 함

    const bucketList = items.map((item) => (
        <li
            key={item.id}
            onContextMenu={(e) => {
                e.preventDefault();
                onRemove(item.id);
            }}
        >
            {item.name}
        </li>
    ));

    // 자바스크립트에서 마우스 우클릭 동작은 onContextMenu 이벤트로 제어할 수 있음
    // 마우스 우클릭의 기본 동작인 컨텍스트 메뉴(context menu)도 함께 실행되므로 preventDefault() 메소드를 호출하여 우클릭의 기본동작 방지

    return (
        <>
            <h1>버킷 리스트</h1>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가하기</button>
            <ul>{bucketList}</ul>
        </>
    );
};

export default List;

// React에서는 참조 타입인 객체나 배열의 경우 반드시 불변성이 지켜져야 함
// 배열에 새로운 요소를 추가할 때는 배열 객체의 push() 메소드를 사용해서는 안됨
// push() 메소드는 메소드를 호출한 원본 배열의 마지막부터 새로운 요소를 추가하므로 불변성을 위반하게 됨

// React에서는 push() 메소드 대신 concat() 메소드를 사용하여 새로운 요소가 추가된 새로운 배열을 생성하고, setItems()함수를 호출하여 state를 업데이트해야 함