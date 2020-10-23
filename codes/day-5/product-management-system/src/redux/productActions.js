import * as ActionTypes from './productActionTypes'

export const getProductsInitiate = () => {
    return {
        type: ActionTypes.GET_PRODUCT_INITIATE
    }
}

export const getProductsSuccess = (products) => {
    return {
        type: ActionTypes.GET_PRODUCT_SUCCESS,
        data: products
    }
}

export const getProductsFailure = (errorMessage) => {
    return {
        type: ActionTypes.GET_PRODUCT_FAILURE,
        data: errorMessage
    }
}


export const getProductByIdInitiate = () => {
    return {
        type: ActionTypes.GET_PRODUCTBYID_INITIATE
    }
}

export const getProductByIdSuccess = (product) => {
    return {
        type: ActionTypes.GET_PRODUCTBYID_SUCCESS,
        data: product
    }
}

export const getProductByIdFailure = (errorMessage) => {
    return {
        type: ActionTypes.GET_PRODUCTBYID_FAILURE,
        data: errorMessage
    }
}



//const ActionTypes = require('./productActionTypes')
/*
const getProductsInitiate = () => {
    return {
        type: ActionTypes.GET_PRODUCT_INITIATE
    }
}

const getProductsSuccess = (products) => {
    return {
        type: ActionTypes.GET_PRODUCT_SUCCESS,
        data: products
    }
}

const getProductsFailure = (errorMessage) => {
    return {
        type: ActionTypes.GET_PRODUCT_FAILURE,
        data: errorMessage
    }
}

module.exports = {
    getProductsInitiate,
    getProductsSuccess,
    getProductsFailure
}
*/