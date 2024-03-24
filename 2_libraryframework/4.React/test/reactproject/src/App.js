import { Fragment, useState, useEffect } from "react";
import Greeting from "./Greeting";
import ChildProps from "./component/ChildProps";
import ParentProps from "./component/ParentProps";

function App() {
  let [pageState, setPageState] = useState(0);

  useEffect(() => {

    console.log("hello");

  }, [pageState]);

  

  return (
    <Fragment>
      <div>
        {/* {pageState === 1 ? <Greeting /> : <ParentProps />} */}
        {pageState === 1 && <Greeting />}
        {pageState === 2 && <ParentProps />}
        {pageState === 3 && <ChildProps />}
      </div>
      <div>
        <button onClick={() => setPageState(1)}>Greeting.js</button>
        <button onClick={() => setPageState(2)}>ParentProps.jsx</button>
        <button onClick={() => setPageState(3)}>ChildProps.jsx</button>
      </div>
    </Fragment>
  );
}

export default App;