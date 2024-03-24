import React from "react";
import ChildProps from './ChildProps';

function ParentProps() {
    return (
        <div>
            <ChildProps name="hi" age={30} />
        </div>
    );
};

export default ParentProps;