import * as ActionTypes from './productActionTypes'
const initialProductState = {
    products: null,
    errorMessage: '',
    loading: true
}
export const getProductsReducer = (state = initialProductState, action) => {
    let newState = null;
    switch (action.type) {
        case ActionTypes.GET_PRODUCT_INITIATE:
            newState = {
                ...state,
                products: [],
                errorMessage: '',
                loading: true
            }
            break;

        case ActionTypes.GET_PRODUCT_SUCCESS:
            newState = {
                ...state,
                products: action.data,
                errorMessage: '',
                loading: false
            }
            break;

        case ActionTypes.GET_PRODUCT_FAILURE:
            newState = {
                ...state,
                products: [],
                errorMessage: action.data,
                loading: false
            }
            break;

        default:
            newState = { ...state }
            break;
    }
    return newState;
}





/*
const ActionTypes = require('./productActionTypes')
const initialProductState = {
    products: null,
    errorMessage: '',
    loading: true
}
const getProductsReducer = (state = initialProductState, action) => {
    let newState = null;
    switch (action.type) {
        case ActionTypes.GET_PRODUCT_INITIATE:
            newState = {
                ...state,
                products: [],
                errorMessage: '',
                loading: true
            }
            break;

        case ActionTypes.GET_PRODUCT_SUCCESS:
            newState = {
                ...state,
                products: action.data,
                errorMessage: '',
                loading: false
            }
            break;

        case ActionTypes.GET_PRODUCT_FAILURE:
            newState = {
                ...state,
                products: [],
                errorMessage: action.data,
                loading: false
            }
            break;

        default:
            newState = { ...state }
            break;
    }
    return newState;
}

module.exports = {
    getProductsReducer
}
*/