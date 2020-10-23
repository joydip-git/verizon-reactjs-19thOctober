import { getProductsReducer } from './getProductsReducer'
import { getProductByIdReducer } from './getProductByIdReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    allProductsState: getProductsReducer,
    singleProductState: getProductByIdReducer
})