import './App.css';
import PropsDatatype from './R018_PropsDatatype'


function App() {
   //DB 에서 데이터 읽어오기
  let bno = 35;
  let btitle = "글제목입니다.";
  let ojb1 = {
    String:{btitle},
    n1:{bno},
    Boolean:false,
    Array:[0, 1, 8],
    o1:{react:"리액트", twohundred:"200"},
    f1:console.log("FunctionProps: function!"),
    //BooleanTrueFalse = {1!=1} 
  };
  
  return (
     <div className="App">
      <h1>Start React 200!</h1>
      <p>LifecycleEx 적용하기</p>
      <LifecycleEx  prop_value = "FromApp.js"/>
      
      <p>CSS 적용하기</p>
      <PropsDatatype
          String="react"
          Array={(0, 1, 8)}
          Number={200}
          Boolean={1==1}
          o1={{react:"리액트", twohundred:"200"}}
          F1={console.log("FunctionProps: function!")}
          BooleanTrueFalse ={1!=1}
      />
      <PropsDatatype 
          String={btitle}
          Array={1==1}
          n1={bno}
          Boolean={200}
          o1={{react:"리액트", twohundred:"200"}}
          f1={console.log("FunctionProps: function!")}
          BooleanTrueFalse = {true}
       />
    </div>
  );

}

export default App;