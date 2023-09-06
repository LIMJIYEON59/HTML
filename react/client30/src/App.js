import React from 'react';
import './App.css';
import FuctionComponent from './R030_FunctionComponent'

function App() {
  return (
    <div className="App">
      <div>
        <h1>Start React 200!</h1>
        <p>CSS 적용하기</p>
        <FuctionComponent content="[This is FuctionComponent]"/>
      </div>
    </div>
  );
}

export default App;
