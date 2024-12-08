import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  // 브라우저 라우터 : 브라우저의 현재 주소를 저장하고 감지하는 역할
  // 리액트 앱의 모든 컴포넌트들이 현재 브라우저의 주소를 불러와서 쓸 수 있고 주소의 변화를 감지할 수 있게 됨
  // 브라우저 라우터에 보관되는 모든 데이터들은 Navigation.Provider나 Location.Provider 같은 컨텍스트 객체의 Provider 컴포넌트를 이용해서
  // 앱 컴포넌트의 모든 자손 컴포넌트들에게 컨텍스를 통해서 공급 (페이지 라우팅에 관한 모든 데이터를 공급 받을 수 있다.)
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
