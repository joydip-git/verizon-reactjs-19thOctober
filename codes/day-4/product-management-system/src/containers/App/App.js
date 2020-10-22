import React from 'react';
import './App.css';
import ProductContainer from '../Product/ProductContainer'
import DashBoard from '../../components/Common/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <DashBoard />
      <br/>
      <ProductContainer />
    </div>
  );
}

export default App;
