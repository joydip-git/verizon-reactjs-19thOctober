import React from 'react';
import './App.css';
import ProductContainer from '../Product/ProductContainer'
import Home from '../../components/Common/Home/Home'
import AddProduct from '../../components/Product/AddProduct/AddProduct'
import UpdateProduct from '../../components/Product/UpdateProduct/UpdateProduct'
import ProductDetail from '../../components/Product/ProductDetail/ProductDetail'
import DashBoard from '../../components/Common/DashBoard/DashBoard';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <DashBoard />
        <br />
        <Route path='/home' component={Home} />
        <Route path='/products' component={ProductContainer} />
        <Route path='/product/add' component={AddProduct} />
        <Route path='/product/:id' component={ProductDetail} />
        <Route path='/product/update/:id' component={UpdateProduct} />
      </div>
    </BrowserRouter>
  );
}

export default App;
