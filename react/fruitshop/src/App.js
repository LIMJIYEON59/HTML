import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';

/*
url mapping처럼 페이지를 구성한다.
해당 페이지를 나타낼 속성들을 모아서 entity 별로 묶는다.
속성: 이름, 가격, 단위 == 과일(entity) //속성들을 과일로 묶는다.
TODO delete - 목록화면에서 버튼 만들어서 1개 삭제한다.
TODO info - id 활용해서 보기
*/
//const로 자료형 모양이 안바뀌도록 [] 배열 모양
function App() {
  //const [a1, a2] = useState([10,20,30]); // a1 저장공간생성
  //const [a,seta] =useState();
  
  const [fruitList, setFruitList] = useState(
    [
      {
        id : '1',
        name: '기본이름1',
        price: '기본값1',
        count: '기본단위1'
      },
      {
        id : '2',
        name: '기본이름2',
        price: '기본값2',
        count: '기본단위2'
      }
    ]
  );
  
  //fruit 이름의 저장공간 생성 선언
  const [newFruit, setNewFruit] = useState(   
    {
      id : '3',
      name: '기본이름',
      price: '기본값',
      count: '기본단위'
    }
  );

  //insertHandler 함수를 만들어줘야한다.
  const insertHandler = () => {
    console.log("insertHandler 함수실행");
    console.log(newFruit);
    // TODO id 중복값 없게 작성
    // TODO 빈칸 없게 (이름 없이x)
    // 기존 fruitList에 동일한 것이 없다면 추가된다.
    setFruitList([...fruitList, newFruit ]); //그 뒤에다가 추가적으로 넣고싶은걸 넣으면됨(newFruit)
    console.log(fruitList);
  }

  const onChangeInput = (event) => {
    console.log(event.target); //이거 적으면 지금 바뀐 것들을 알 수 있다.
    const {name, value} = event.target;
    console.log(name);
    console.log(value);
    setNewFruit({...newFruit, [name]:value}); //깊은 복사 형태로 넣어준다.
  }

  const InsertFruit = ()=> {
    // 과일추가
    // 과일목록보기
    // 홈으로
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


  const List =(props) => {
    //const n1 = props.n1;
    //const {n1} =props.n2;
    //const {n2} =props;
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
              <tbody>
                {
                  fruitList.map( (fruit)=> { 
                    console.log(fruit);
                    return(
                    <tr>
                      <td>{fruit.name}</td>
                      <td>{fruit.price}</td>
                      <td>{fruit.count}</td>
                    </tr>
                    )
                  } )
                }
              </tbody>
            </table>
          </div>
      );
    }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path="/" element={<Home></Home>}/>     
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

  const Home =() =>{
    // 홈
    // 과일추가
    // 홈으로
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
