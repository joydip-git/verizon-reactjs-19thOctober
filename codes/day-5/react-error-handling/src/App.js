import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      {/* <ErrorBoundary> */}
        <Hero heroName='Batman' />
        <br />
        <Hero heroName='Supreman' />
        <br />
        <Hero heroName='Joker' />
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
/**
 * {
 *   value:10,
 *   children:[Hero1,Br1, Hero2,BR2, Hero3]
 * }
 */
