import React from "react";
import ParentProps from "./ParentProps";

function ChildProps(props) {
    return (
        <div>
            <p>name : {props.name}</p>
            <p>age: {props.age}</p>
            <p>자식 컴포넌트가 아니라 부모 컴포넌트를 불러와야 하는 것인가???</p>
        </div>
        );
}

export default ChildProps;