import { rootReducer } from './index'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const loggerMiddleware = createLogger()
export const productStore = createStore(
    rootReducer,
    applyMiddleware(loggerMiddleware, thunkMiddleware))


/*
const { getProductsReducer } = require('./getProductsReducer')
// const { getProductsInitiate, getProductsSuccess } = require('./productActions');
const { getProductsAsyncCallbackCreator } = require('./productAsyncOperation')
const { createStore, applyMiddleware } = require('redux')
const { createLogger } = require('redux-logger')
const thunkMiddleware = require('redux-thunk')

const loggerMiddleware = createLogger()
const store = createStore(
    getProductsReducer,
    applyMiddleware(loggerMiddleware, thunkMiddleware.default))

const callbackFn = getProductsAsyncCallbackCreator()
store.dispatch(callbackFn);
//console.log(store.getState())


const initiateAction = getProductsInitiate();
store.dispatch(initiateAction)
//console.log(store.getState())

const successAction = getProductsSuccess([{ pid: 1, name: 'abcd', price: 1000 }, { pid: 2, name: 'abc', price: 100 }])
store.dispatch(successAction)
//console.log(store.getState())


*/

