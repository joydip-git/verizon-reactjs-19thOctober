import { getProductsInitiate, getProductsSuccess, getProductsFailure, getProductByIdInitiate, getProductByIdSuccess, getProductByIdFailure } from './productActions'
import { getProductRecords, getProductRecordById } from '../service/productService'

export const getProductsAsyncCallbackCreator = () => {
    return (dispatch) => {
        //initiate
        const initiateAction = getProductsInitiate();
        dispatch(initiateAction)
        //fetch data
        getProductRecords()
            .then(resp => {
                //success: dispatch success request/action
                const successAction = getProductsSuccess(resp.data)
                dispatch(successAction)
            })
            .catch(e => {
                //failure: dispatch failure request/action
                const failureAction = getProductsFailure(e.message)
                dispatch(failureAction)
            })
    }
}

export const getProductByIdAsyncCallbackCreator = (productId) => {
    return (dispatch) => {
        //initiate
        const initiateAction = getProductByIdInitiate();
        dispatch(initiateAction)
        //fetch data
        getProductRecordById(productId)
            .then(resp => {
                //success: dispatch success request/action
                const successAction = getProductByIdSuccess(resp.data)
                dispatch(successAction)
            })
            .catch(e => {
                //failure: dispatch failure request/action
                const failureAction = getProductByIdFailure(e.message)
                dispatch(failureAction)
            })
    }
}





/*
const { getProductsInitiate, getProductsSuccess, getProductsFailure } = require('./productActions');
const Axios = require('axios')

const getProductsAsyncCallbackCreator = () => {
    return function (dispatch) {
        //initiate
        const initiateAction = getProductsInitiate();
        dispatch(initiateAction)
        //fetch data
        Axios.default.get('http://127.0.0.1:8081/productservice')
            .then(resp => {
                //success: dispatch success request/action
                const successAction = getProductsSuccess(resp.data)
                dispatch(successAction)
            })
            .catch(e => {
                //failure: dispatch failure request/action
                const failureAction = getProductsFailure(e.message)
                dispatch(failureAction)
            })
    }
}

module.exports = {
    getProductsAsyncCallbackCreator
}

*/