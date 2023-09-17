import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {useState} from 'react';


function App() {
 

  const onClickHandler =(event)=>{
    console.log("클릭");
    console.log(event.target);

    setFruitList([...fruitList, newFruit]);
  }

  const onChangeHandler =(event)=> {
    console.log("변경");
    console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.value);

    const {name,value} = event.target;
    console.log(name);
    console.log(value);

    setNewFruit({...newFruit, [name]:value});
    console.log(newFruit);
  }


  return (
      <div className="App">

      </div>
   
  );
}

export default App;
