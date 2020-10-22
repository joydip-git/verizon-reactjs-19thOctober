import React, { Component } from 'react'
import ProductList from '../../components/Product/ProductList/ProductList'

export default class ProductContainer extends Component {
    state = {
        products: []
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <ProductList products={this.state.products} />
            </div>
        )
    }
}
