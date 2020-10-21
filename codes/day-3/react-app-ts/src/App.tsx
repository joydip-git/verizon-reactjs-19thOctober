import React from 'react';
import './App.css';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <Welcome data={10} name='joydip' />
    </div>
  );
}

export default App;
