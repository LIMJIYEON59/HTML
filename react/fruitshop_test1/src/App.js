import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {useState} from 'react';

function App() {
  //추가기능 (input입력된 값)에서 사용할 저장공간 (insert)
  const [newFruit, setNewFruit] = useState (
    {
      name : "",
      price : "",
      amount : ""
    }
  );

  //목록조회를 위한 저장공간
  const [fruitList, setFruitList] =useState(
    [
      {
        name: "수박",
        price: "1000",
        amount: "10"
      },
      {
        name: "포도",
        price: "2000",
        amount: "20"
      }
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
              { //return ()에서 js 문법 사용을 위해 중괄호 사용
                fruitList.map(
                  (fruit) => {
                    //return() 에서 render하고 싶은 내용을 작성
                    return (
                      <tr>
                        <td>{fruit.name}</td>
                        <td>{fruit.price}</td>
                        <td>{fruit.amount}</td>
                        <td><button onClick={ ()=> {console.log("aaa"); onClickDeleteHandler(fruit.name);}}>삭제</button></td>
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
  const onClickDeleteHandler = (name) => {
    console.log(name);

    const filteredFruitListTest = fruitList.filter((fruit) => fruit.name == name);
    console.log(filteredFruitListTest);
    const filteredFruitList = fruitList.filter((fruit)=>fruit.name !=name);
    console.log(filteredFruitList);

    //목록용 저장공간 fruitList
    setFruitList(filteredFruitList);
  }

  const onClickHandler =(event) => {
    console.log("클릭");
    console.log(event.target);
    console.log("----insert");
    console.log(newFruit);
    //추가기능용 저장공간 newFruit 을 목록용 저장공간 fruitList에 추가하기
    setFruitList([...fruitList,newFruit]);
  }
  const onChangeHandler =(event) => {
    console.log("변경");
    console.log(event.target); //js에서 event 발생하면 매개인자로 event 전달됨 그것을 확인함.
    console.log(event.target.name);
    console.log(event.target.value);
    const {name,value} = event.target;
    console.log(name);
    console.log(value);

    console.log(newFruit);
    setNewFruit({...newFruit, [name]:value});
  }

  //과일추가 (값을 추가해야 하니 input)
  //과일목록
  //홈
  const Insert = ()=>{
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
          <div><span>이름</span><input onChange={onChangeHandler} name='name' value={newFruit.name}></input></div>
          <div><span>가격</span><input onChange={onChangeHandler} name='price' value={newFruit.price}></input></div>
          <div><span>수량</span><input onChange={onChangeHandler} name='amount' value={newFruit.amount}></input></div>
          <div><button onClick={onClickHandler}>등록</button></div>
        </div>
        <List></List>
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
