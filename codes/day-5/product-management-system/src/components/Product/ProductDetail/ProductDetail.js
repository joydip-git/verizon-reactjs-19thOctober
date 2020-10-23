import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getProductByIdAsyncCallbackCreator } from '../../../redux/productAsyncOperation'
// export default function ProductDetail({ history, match, location }) {
//     const pid = parseInt(match.params.id)
export default function ProductDetail() {
    const history = useHistory();
    //useLocation()
    const allParams = useParams();
    const pid = parseInt(allParams.id)

    const product = useSelector((state) => state.singleProductState.product);
    const errorMessage = useSelector((state) => state.singleProductState.errorMessage);
    const loading = useSelector((state) => state.singleProductState.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        const callback = getProductByIdAsyncCallbackCreator(pid)
        dispatch(callback)
    }, []);

    let design = null;
    if (loading) {
        design = <span>Loading....</span>
    } else if (errorMessage !== '') {
        design = <span>{errorMessage}</span>
    } else if (product !== null) {
        design = <div>{product.productName}</div>
    } else {
        design = <span>No product found</span>
    }
    console.log('[PD] rendered')
    return (
        <>
            { design}
            <br />
            <button className='btn btn-primary' onClick={() => history.push('/products')}>Back</button>
        </>
    )
}



/*
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { getProductRecordById } from '../../../service/productService'

// export default function ProductDetail({ history, match, location }) {
//     const pid = parseInt(match.params.id)
export default function ProductDetail() {
    const history = useHistory();
    //useLocation()
    const allParams = useParams();
    const pid = parseInt(allParams.id)
    const [productState, setProductState] = useState({ product: null, errorMessage: '', loading: true });

    useEffect(() => {
        getProductRecordById(pid)
            .then(resp => {
                console.log(resp.data)
                setProductState({
                    product: resp.data,
                    errorMessage: '',
                    loading: false
                })

            }).catch(e => {
                setProductState({
                    product: null,
                    errorMessage: e.message,
                    loading: false
                })
            })

        return () => {
            console.log('dismounted...')
        }
    }, []);

    let design = null;
    if (productState.loading) {
        design = <span>Loading....</span>
    } else if (productState.errorMessage !== '') {
        design = <span>{productState.errorMessage}</span>
    } else if (productState.product !== null) {
        design = <div>{productState.product.productName}</div>
    } else {
        design = <span>No product found</span>
    }
    console.log('[PD] rendered')
    return (
        <>
            { design}
            <br />
            <button className='btn btn-primary' onClick={() => history.push('/products')}>Back</button>
        </>
    )
}

*/