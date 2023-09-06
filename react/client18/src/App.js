import React from 'react';
import './App.css';
import PropsDatatype from './R018_PropsDatatype'

function MyFunction(props) {
  const [a, aForSetState] = useState('값1');
//  let {title} = props;
//  let {content} =props;
  function clickHandler(){

  }
  return (
    <div>
      <h2>함수형태 component</h2>
      <div>{props.title} </div>
      <div>{ptops.content}</div>
      <h1>useState사용하기 중요!!</h1>
      <div>{a}</div>
      <button onClick={()=>{console.log("클릭이벤트"); aForSetState("변경확인")}}>변경확인</button>
    </div>
  )
}

function App() {
   //DB 에서 데이터 읽어오기
  let bno = 35;
  let btitle = "글제목입니다.";
  let ojb1 ={
    String:{btitle},
    n1:{bno},
    Boolean:false,
    Array:[0, 1, 8],
    o1:{react:"리액트", twohundred:"200"},
    f1:console.log("FunctionProps: function!"),
    BooleanTrueFalse:true
  };
  
  return (
     <div className="App">
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <LifecycleEx  prop_value = "FromApp.js"/>
      
      <PropsDataType 
        String="react"
        n1={200}
        Boolean={1==1}
        Array={[0,1,8]}
        o1={{react:"리엑트", twohundred:"200"}}
        f1={console.log("FunctionProps: function!")}
        BooleanTrueFalse = {1!=1}
      />
      <PropsDataType
        String={title}
        n1={bno}
        Boolean={1==1}
        Array={[0,1,8]}
        o1={{react:"리엑트", twohundred:"200"}}
        f1={console.log("FunctionProps: function!")}
        BooleanTrueFalse={true}
      />
        <div>
          <h1>Start React 200!</h1>
          <p>CSS 적용하기</p>
          <SetState/>
          <MyFunction title="제목전달합니다." content="내용전달합니다."></MyFunction>
      </div>
    </div>
  );

}

export default App;