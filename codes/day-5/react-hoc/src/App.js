import React from 'react';
import './App.css';
import ClickCounter from './ClickCounter';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
import withCounter from './withCounter';

function App() {
  const someRef = React.createRef()
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ClickCounter value={10} ref={someRef}/> */}
      <ClickCounter value={10} />
      <br />
      <br />
      <HoverCounter data={20} />
      {/* <withCounter>
        <OriginalClickCounter/>

      </withCounter> */}
    </div>
  );
}

export default App;
