import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { productStore } from './redux/productStore'

ReactDOM.render(
  <Provider store={productStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);