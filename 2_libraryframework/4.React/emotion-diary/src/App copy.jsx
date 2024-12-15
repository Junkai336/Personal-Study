import './App.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';
import Notfound from './pages/NotFound';

import Button from './components/Button';
import Header from './components/Header';

import { getEmotionImage } from './util/get-emotion-image';     // export한 함수를 불러옴

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  }

  return (
    <>
      {/* <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div> */}
      <div>
        {/* <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link> */}

        <Header
          title={'Header'}
          leftChild={<Button text={"Left"} />}
          rightChild={<Button text={"Right"} />}
        />

        <Button
          text={"123"}
          onClick={() => {

          }}
        />

        <Button
          text={"123"}
          type={"POSITIVE"}
          onClick={() => {

          }}
        />

        <Button
          text={"123"}
          type={"NEGATIVE"}
          onClick={() => {

          }}
        />
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
