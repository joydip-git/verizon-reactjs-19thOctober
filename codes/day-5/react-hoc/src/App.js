import React from 'react';
import './App.css';
import ClickCounter from './ClickCounter';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
import withCounter from './withCounter';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <ClickCounter />
      <br/>
      <br/>
      <HoverCounter />
      {/* <withCounter>
        <OriginalClickCounter/>

      </withCounter> */}
    </div>
  );
}

export default App;
