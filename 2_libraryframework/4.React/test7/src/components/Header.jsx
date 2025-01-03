import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="header">
      <h3>오늘은 😁</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  )
}

// 자신이 바뀐 porps가 바뀌지 않으면 다시는 리렌더링이 발생되지 않음
// const memoizedHeader = memo(Header);

// export default memoizedHeader;

export default memo(Header);