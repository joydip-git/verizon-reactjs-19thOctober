import { URL } from '../constants/productConstants'
import Axios from 'axios'

export const getProductRecords = () => {
    return Axios.get(URL);
}

export const getProductRecordById = (productId) => {
    return Axios.get(`${URL}/${productId}`);
}

export const addProductRecord = (newProduct) => {
    return Axios.post(URL, newProduct);
}

export const updateProductRecord = (updatedProduct) => {
    return Axios.put(URL, updatedProduct);
}

export const deleteProductRecordById = (productId) => {
    return Axios.delete(`${URL}/${productId}`);
}

//getProductRecords().then((response) => console.log(response)).catch(e => console.log(e.message))
