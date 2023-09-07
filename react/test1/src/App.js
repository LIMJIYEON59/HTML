import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [FruitList, setFruitList] =useState(
    [
      {
        name: '기본이름1',
        price: '기본값1',
        count: '기본단위1'
      },
      {
        name: '기본이름2',
        price: '기본값2',
        count: '기본단위2'
      }
    ]
  );


  const [newFruit, setNewFruit] =useState(
      {
        name: '기본이름',
        price: '기본값',
        count: '기본단위'
      }
  );

  const insertHandler = () => {
    setFruitList([...FruitList, newFruit]);
    console.log(FruitList);
  }

  const onChangeInput = (event) => {
    const {name, value} = event.target;
    setNewFruit({...newFruit, [name]:value});
  }

  const InsertFruit = () => {
    //과일추가
    //과일목록보기
    //홈으로
    return (
      <div>
        <h1>과일 추가</h1>
        <nav>
          <ul>
            <li><Link to="/list">과일목록보기</Link></li>
            <li><Link to="/">홈으로</Link></li>
          </ul>
        </nav>
        <div>
          <form>
            <div><span>이름:</span><input type="text" name="name" onChange={onChangeInput} value={newFruit.name}></input></div>
            <div><span>가격:</span><input type="text" name="price" onChange={onChangeInput} value={newFruit.price}></input></div>
            <div><span>단위:</span><input type="text" name="count" onChange={onChangeInput} value={newFruit.count}></input></div>
          </form>
          <button onClick={insertHandler}>추가</button>
        </div>
      </div>
    );
  }

  
  const List = (props) => {
    const {n1,n2} =props;
    console.log(n1);
    console.log(n2);
    return (
      <div>
        <h1>리스트</h1>
          <nav>
              <ul>
                <li><Link to="/insert">과일추가</Link></li>
                <li><Link to="/">홈으로</Link></li>
              </ul>
          </nav>
          <table>
            <thead>
              <tr>
                <td>이름</td>
                <td>가격</td>
                <td>단위</td>
              </tr>
            </thead>
          </table>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/list" element={<List n1="v1" n2={1000} ></List>} />     
          <Route path="/insert" element={<InsertFruit></InsertFruit>} />
          <Route path="/delete" element="" />
          <Route path="/info" element="" />
          <Route path="/update" element="" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <>
      <h1>홈</h1>
      <nav>
        <ul>
          <li><Link to="/insert">과일추가</Link></li>
          <li><Link to="/">홈으로</Link></li>
        </ul>
      </nav>
    </>
  );
}






export default App;
