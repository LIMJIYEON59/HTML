import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
  
  // 추가기능(input입력된 값)에서 사용할 저장공간
  const [newFruit, setNewFruit] = useState(
    {
      name: "",
      price: "",
      amount: ""
    }
  );

  //목록조회를 위한 저장공간
  const [fruitList, setFruitList] = useState(
    [
      {
        name: "자두",
        price: "2000",
        amount: "10"
      },
      {
        name: "멜론",
        price: "5000",
        amount: "30"
      }
    ]
    );
    
    const Home = () => {
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

  const onClickDeleteHandler = (name) => {
    console.log(name);
    const filteredFruitList = fruitList.filter((fruit) => fruit.name != name);
    console.log(filteredFruitList);
    setFruitList(filteredFruitList);
  }

  //onClickHandler 함수를 만들어줘야한다.
  const onClickHandler = (event) => {
    //유효성 검사 빈칸
    if (!newFruit.name || !newFruit.price || !newFruit.amount) {
      alert("모든값을 입력해주세요.")
      return;
    }
    //유효성검사 - 같은 name 없도록
    const isExist = fruitList.some((fruit)=>fruit.name == newFruit.name);
    if(isExist){
      alert("이미 등록된 과일이름입니다. 다시 추가해주세요.");
      // 이름 입력란을 공란으로 만들기
      setNewFruit({...newFruit, ["name"]:""});
      return;
    }

    
    

    console.log("꼭 확인 !!! 클릭");
    console.log(event.target); //js에서 event 발생하면 매개인자로 event 전달됨. 그것을 확인함
    console.log("----insert");
    console.log(newFruit);
    // TODO id 중복값 없게 작성
    // TODO 빈칸 없게 (이름 없이x)
    // 기존 fruitList에 동일한 것이 없다면 추가된다.

    // 배열 모양이긴하나 ... 깊은 복사라고 값만 가져오겠다.(element 3개가 보여지는 형태)
    setFruitList([...fruitList, newFruit]); //그 뒤에다가 추가적으로 넣고싶은걸 넣으면됨(newFruit)
    
    // 이름,가격,수량 입력란을 공란으로 만들기
    setNewFruit({name: "", price:"", amount:""});
  }

  const onChangeHandler = (event) => {
    console.log(event.target); //이거 적으면 지금 바뀐 것들을 알 수 있다.
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setNewFruit({ ...newFruit, [name]: value }); //깊은 복사 형태로 넣어준다.
  }

  const InsertFruit = () => {
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
            <div><span>이름:</span><input type="text" name="name" onChange={onChangeHandler} value={newFruit.name}></input></div>
            <div><span>가격:</span><input type="text" name="price" onChange={onChangeHandler} value={newFruit.price}></input></div>
            <div><span>수량:</span><input type="text" name="amount" onChange={onChangeHandler} value={newFruit.amount}></input></div>
          </form>
          <button onClick={onClickHandler}>등록</button>
        </div>
        <List></List>
      </div>
    );
  }


  const List = (props) => {
    //const n1 = props.n1;
    //const {n1} =props.n2;
    //const {n2} =props;
    const { n1, n2 } = props;
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
        <table border={1}>
          <thead>
            <tr>
              <td>이름</td>
              <td>가격</td>
              <td>단위</td>
            </tr>
          </thead>
          <tbody>
            { //return() 에서 js 문법 사용을 위해 중괄호 사용
              fruitList.map((fruit) => {
                // return() 에서 render하고 싶은 내용을 작성
                console.log(fruit);
                return (
                  <tr>
                    <td>{fruit.name}</td>
                    <td>{fruit.price}</td>
                    <td>{fruit.amount}</td>
                    <td><button onClick={() => { console.log("aaa"); onClickDeleteHandler(fruit.name); }}>삭제</button></td>
                  </tr>
                );
              }
              )
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





export default App;
