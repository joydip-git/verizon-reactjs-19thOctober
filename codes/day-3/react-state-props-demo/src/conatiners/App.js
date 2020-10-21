import React from 'react';
import './App.css';
import People from '../components/People'

function App() {

  return (
    <div className="App">
      <People data={20} />
    </div>
  );
}

export default App;