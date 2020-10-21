import React from 'react';
import './App.css';
import People from '../components/People'

//x={data:10}
function App(props) {
  // const peopleComponent = new People({value:20});
  // console.log(peopleComponent)

  // const peopleReactElement = peopleComponent.render();
  // console.log(peopleReactElement)

  const peopleElement = <People value={20} />
  console.log(peopleElement)
  return (
    <div className="App">
      <span>{props.data}</span>
      <br />
      <br />
      {() => peopleElement}
    </div>
  );
}

export default App;
/**
 * {value:20}
 */
/**
 * {
 * type:'div',
 * props:{
 *  data:10
 * }
 * }
 */
