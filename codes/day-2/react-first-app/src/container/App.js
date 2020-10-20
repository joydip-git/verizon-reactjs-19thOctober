import React from 'react';
import { Welcome } from '../components/Welcome';
import './App.css';

const Check = (prop) => {
  return <span>{prop.val}</span>;
}
function App() {
  const message = 'Welcome to React JS';
  const data = 10;
  const show = function (e, ...args) {
    // window.alert('Hi...')
    args.forEach((item) => console.log(item))
    console.log(e.target)
  }
  const welcomeElement = <Welcome displayMessage={message} datadataValueue={data} showFn={show} />
  console.log(welcomeElement)
  return (
    <div className="App">
      <button onClick={(e) => { show(e, 10, 'joy') }}>Show from App</button>
      {/* <Welcome displayMessage={message} dataValue={data} showFn={show} /> */}
      <br />
      {welcomeElement}
    </div>
  );
}

export default App;

/**
 * {
 *   displayMessage:'Welcome to React JS',
 *   dataValue:10,
 *   showFn: [Function]
 * }
 */
