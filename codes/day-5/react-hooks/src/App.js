import React, { useState } from 'react';
import './App.css';
import useWelcome from './useWelcome';

/*
const utility = {
  sayHi: () => {
    window.alert('hi...')
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        {this.sayHi()}
      </div>
    );
  }
}
Object.assign(App.prototype, utility)
*/
function App() {
  //const [hiFn, byeFn] = useWelcome();
  const [counterState, setCounterState] = useState({ counter: 0 })

  const increaseCounterHandler = () => {
    // setCounterState({
    //   counter: 20
    // })
    setCounterState(ps => {
      return {
        counter: ps.counter + 1
      }
    })
  }
  console.log('[App] rendered')
  return (
    <div>
      {/* {hiFn()}
      {byeFn()} */}
      <br />
      Counter:&nbsp;<span>{counterState.counter}</span>
      <br />
      <button onClick={increaseCounterHandler}>Increase</button>
    </div>
  )
}
export default App;
