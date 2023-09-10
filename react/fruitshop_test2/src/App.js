import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {useState} from 'react';

function App() {
  //input(insert부분)에 저장할 공간을 만들어야 한다.
  const [newFruit, setNewFruit] = useState (
    {
      name: "",
      price: "",
      amount: ""
    }
  );
  
  //목록조회를 위해(List 부분에 나타낼 것) 
  const [fruitList, setFruitList] = useState (
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
  )


  const Home = ()=>{
    return (
      <>
      <h1>Home</h1>
      <nav>
        <ul>
          <li><Link to="/list">과일목록</Link></li>
          <li><Link to="/insert">과일추가</Link></li>
        </ul>
      </nav>
      </>
    );
  }

  const List =() => {
    return(
      <>
      <h1>List</h1>
      <nav>
        <ul>
          <li><Link to="/insert">과일추가</Link></li>
          <li><Link to="/">홈</Link></li>
        </ul>
      </nav>
      <table border={1}>
        <thead>
          <tr>
            <td>이름</td>
            <td>가격</td>
            <td>수량</td>
          </tr>
        </thead>
        <tbody>
        {
          fruitList.map(
            (fruit) => {
              return(
                <tr>
                  <td>{fruit.name}</td>
                  <td>{fruit.price}</td>
                  <td>{fruit.amount}</td>
                  <td><button onClick={ () => {console.log("aaa"); onClickDeleteHandler(fruit.name);}}>삭제</button></td>
                </tr>
              )
            }
          )
        }
        </tbody>
      </table>
      </>
    );
  }
  const onClickDeleteHandler =(name)=> {
    console.log(name);
    const filteredFruitListTest = fruitList.filter((fruit) => fruit.name == name);
    console.log(filteredFruitListTest);
    const filteredfruitList = fruitList.filter((fruit) => fruit.name != name );
    console.log(filteredfruitList);

    //목록용 저장공간
    setFruitList(filteredfruitList);
  }


  const onClickHandelr =(event) => {
    console.log("클릭");
    console.log(event.target);

    console.log("----insert")
    console.log(newFruit);
    //추가기능용 저장공간 newFruit 을 목록용 저장공간 fruitList에 추가하기
    setFruitList([...fruitList, newFruit]);
  }
  const onChangeHandler =(event) => {
    console.log("변경");
    console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.value);
    //const안에 또 const
    const {name,value} =event.target;
    console.log(name);
    console.log(value);

    console.log("-----s");
    console.log(newFruit);
    setNewFruit({...newFruit, [name]: value});
    console.log(newFruit);
  }

  const Insert =() => {
    return (
      <>
      <h1>Insert</h1>
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
        <div><button onClick={onClickHandelr}>등록</button></div>
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
