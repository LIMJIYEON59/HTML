import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {useState} from 'react';


function App() {
  //추가기능(input입력된 값)에서 사용할 저장공간
  const [newFruit, setNewFruit] = useState (
    {
      name : "",
      price :  "",
      amount : ""
    }
  );
  //목록조회
  const [fruitList, setFruitList] =useState(
    [
      {
        name : "수박",
        price : "1000",
        amount : "10",
      },
      {
        name : "참외",
        price : "2000",
        amount : "20",
      },
    ]
  );


  //홈
  //list 과일목록
  //insert 과일추가
  const Home = () => {
    return (
      <>
        <h1>홈</h1>
        <nav>
          <ul>
            <li><Link to="/list">과일목록</Link></li>
            <li><Link to="/insert">과일추가</Link></li>
          </ul>
        </nav>
        
      </>
    );
  }
  //과일목록
  //과일추가
  //홈
  const List = () => {
    return (
      <>
        <h1>과일목록</h1>
        <nav>
          <ul>
            <li><Link to="/insert">과일추가</Link></li>
            <li><Link to="/">홈</Link></li>
          </ul>
        </nav>
        <div>
          <table border={1}>
            <thead>
              <tr>
                <td>이름</td>
                <td>가격</td>
                <td>수량</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>이름1</td>
                <td>가격1</td>
                <td>수량1</td>
              </tr>
              <tr>
                <td>이름2</td>
                <td>가격2</td>
                <td>수량2</td>
              </tr>
              {
                fruitList.map(
                  (fruit) => {
                    //return ()에서 render하고 싶은 내용을 작성
                    return(
                      <tr>
                        <td>{fruit.name}</td>
                        <td>{fruit.price}</td>
                        <td>{fruit.amount}</td>
                      </tr>
                    )
                  }
                )
              }
            </tbody>
          </table>
        </div>
      </>
    );
  }

  const onClickHandler =(event) => {
    console.log("꼭 확인 !!! 클릭");
    console.log(event.target);
  }
  const onChangeHandler = (event) => {
    console.log("꼭 확인 !!! 변경");
    console.log(event.target);
    const {name,value} = event.target;
    console.log(name);
    console.log(value);

    console.log("-----s");
    console.log(newFruit);
    setNewFruit({...newFruit,[name]:value});
    console.log(newFruit);
    console.log("-----e");
  }

  //과일추가 (값을 추가해야 하니 input)
  //과일목록
  //홈
  const Insert = () => {
    return (
      <>
        <h1>과일추가</h1>
        <nav>
          <ul>
            <li><Link to="/list">과일목록</Link></li>
            <li><Link to="/">홈</Link></li>
          </ul>
        </nav>
        <div>
          <div><span>이름</span><input onChange={onChangeHandler} name="name" value={newFruit.name}></input></div>
          <div><span>가격</span><input onChange={onChangeHandler} name="price"value={newFruit.price}></input></div>
          <div><span>수량</span><input onChange={onChangeHandler} name="amount"value={newFruit.amount}></input></div>
          <div><button onClick={onClickHandler}>등록</button></div>
        </div>
      </>
    );
  }


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/list' element={<List></List>} />
          <Route path='/insert' element={<Insert></Insert>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
