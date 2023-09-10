import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {useState} from 'react';


function App() {

  const onClickDeleteHandler =(name) => {
    console.log(name);

    const filteredFruitListTest = FruitList.filter((fruit)=>fruit.name == name);
    console.log(filteredFruitListTest);
    const filteredFruitList = FruitList.filter((fruit) => fruit.name != name);
    console.log(filteredFruitList);

    setFruitList(filteredFruitList);
  }

  const onClickHandler =(event)=> {
    console.log("클릭");
    console.log(event.target);
  
    setFruitList([...FruitList,newFruit]);
   }
  
   const onChangeHandler =(event)=> {
    console.log("변경");
    console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.value);
  
    const {name, value} =event.target;
    console.log(name);
    console.log(value);
  
    setNewFruit({...newFruit, [name]:value});
    console.log(newFruit);
   }
  
  //input insert 
  const [newFruit,setNewFruit] =useState (
    {
      name: "",
      price: "",
      amount: ""
    }
  );
  
  //목록
  const [FruitList, setFruitList] =useState(
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

  const Home =()=> {
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

  const Insert =()=> {
    return (
      <>
      <h1>insert</h1>
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

  const List =()=> {
    return (
      <>
      <h1>list</h1>
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
            FruitList.map(
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
  



  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/list' element={<List></List>}/>
        <Route path='/insert' element={<Insert></Insert>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
