import React from 'react';
import './App.css';
import ClickCounter from './ClickCounter';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <ClickCounter />
      <br/>
      <br/>
      <HoverCounter />
    </div>
  );
}

export default App;
