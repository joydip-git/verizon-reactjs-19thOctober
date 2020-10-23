import React from 'react';
import './App.css';
import DashBoard from '../../components/Common/DashBoard/DashBoard';
import { BrowserRouter } from 'react-router-dom'
import ProductRoutes from '../../routes/ProductRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <DashBoard />
        <br />
        <ProductRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
