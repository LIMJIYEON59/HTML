import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/list" element=""/>
          <Route path="/insert" element=""/>
          <Route path="/delete" element=""/>
          <Route path="/info" element=""/>
          <Route path="/update" element=""/>
        </Routes>
      </div>
    </BrowserRouter>
  );


}

const  Home =() =>{
  return(
    <>
    <h1>Home</h1>
      <nav>
        <ul>
          <li><Link to="/">과일추가</Link></li>
          <li><Link to="/">홈으로</Link></li>
        </ul>
      </nav>
    </>
  );
}

const List =() => {
  const{n1,n2} =props;
  console.log(props.n1);
  return (
    <h1>리스트</h1>
  );
}

const InsertFruit =() => {
  //과일추가
  //과일목록보기
  //홈으로
  return(
    <>
      <h1>과일 추가</h1>
        <nav>
          <ul>
            <li><List to="/list">과일목록보기</List></li>
            <li><List to="/">홈으로</List></li>
          </ul>
        </nav>
        <div>
          <form>
            <div><span>이름:</span><input type="text"></input></div>
            <div><span>가격:</span><input type="text"></input></div>
            <div><span>단위:</span><input type="text"></input></div>
          </form>
          <button onClick={insertHandler}>추가</button>
        </div>
    </>
  );
}
//insertHandler 함수를 만들어줘야한다.
const insertHandler = () =>{
  console.log("insertHandler 함수실행");
}



export default App;
