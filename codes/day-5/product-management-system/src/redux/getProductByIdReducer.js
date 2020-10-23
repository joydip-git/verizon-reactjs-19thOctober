import * as ActionTypes from './productActionTypes'

const initialProductState = {
    product: null,
    errorMessage: '',
    loading: true
}
export const getProductByIdReducer = (state = initialProductState, action) => {
    let newState = null;
    switch (action.type) {
        case ActionTypes.GET_PRODUCTBYID_INITIATE:
            newState = {
                ...state,
                product: null,
                errorMessage: '',
                loading: true
            }
            break;

        case ActionTypes.GET_PRODUCTBYID_SUCCESS:
            newState = {
                ...state,
                product: action.data,
                errorMessage: '',
                loading: false
            }
            break;

        case ActionTypes.GET_PRODUCTBYID_FAILURE:
            newState = {
                ...state,
                product: null,
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