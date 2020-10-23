import React, { useState, useEffect } from 'react';
import './App.css';
import CountComp from './CountComp';
import NameComp from './NameComp';


function App() {
  const [nameState, setNameState] = useState('NA');
  const [countState, setCountState] = useState(0);
  const [showState, setShowState] = useState(true);

  //const inputRef = React.createRef();

  console.log('[App] rendered')
  
  return (
    <div>
      <button onClick={() => setShowState(ps => !ps)}>{showState ? 'Hide' : 'Show'}</button>
      <br />
      <br />
      {showState && <NameComp name={nameState} nameHandler={(newName) => setNameState(newName)} />}
      <br />
      <br />
      <CountComp count={countState} countHandler={() => setCountState(ps => ps + 1)} />
    </div>
  )
}
export default App;
