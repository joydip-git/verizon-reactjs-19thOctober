import React, { Component } from 'react'
import ProductList from '../../components/Product/ProductList/ProductList'
import { getProductRecords, deleteProductRecordById } from '../../service/productService'

export default class ProductContainer extends Component {
    state = {
        products: [],
        loading: true,
        errorMessage: ''
    }
    removeProductHandler = (productId) => {
        deleteProductRecordById(productId)
            .then(resp => {
                if (resp.status === 200) {
                    let productsCopy = [...this.state.products];
                    let index = productsCopy.findIndex(p => p.productId === productId);
                    productsCopy.splice(index, 1);
                    this.setState({
                        products: productsCopy,
                        errorMessage: '',
                        loading: false
                    })
                }
            })
            .catch(e => {
                this.setState({
                    errorMessage: e.message,
                    loading: false
                })
            })
    }

    componentDidMount() {
        getProductRecords()
            .then(resp => {
                let data = resp.data;
                this.setState({
                    products: data,
                    loading: false,
                    errorMessage: ''
                })
            })
            .catch(e => {
                this.setState({
                    products: [],
                    errorMessage: e.message,
                    loading: false
                })
            })
    }

    render() {
        let design = null;
        const { errorMessage, products, loading } = this.state;
        if (loading) {
            design = <span>Loading...</span>
        } else if (errorMessage !== '') {
            design = <span>{errorMessage}</span>
        } else if (products === null && products.length === 0) {
            design = <span>No records found</span>
        } else {
            design = (
                <div className='container'>
                    <div className='panel panel-primary'>
                        <ProductList products={this.state.products} removeHandler={this.removeProductHandler} />
                    </div>
                </div>
            )
        }

        return design;
    }
}
