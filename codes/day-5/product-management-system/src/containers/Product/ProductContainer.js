import React, { Component } from 'react'
import ProductList from '../../components/Product/ProductList/ProductList'
//import { deleteProductRecordById } from '../../service/productService'
import { connect } from 'react-redux'
import { getProductsAsyncCallbackCreator } from '../../redux/productAsyncOperation'

class ProductContainer extends Component {

    removeProductHandler = (productId) => {
        /*
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
            */
    }

    componentDidMount() {
        this.props.getProducts()
    }

    render() {
        let design = null;
        const { errorMessage, products, loading } = this.props;
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
                        <ProductList products={products} removeHandler={this.removeProductHandler} />
                    </div>
                </div>
            )
        }

        return design;
    }
}
//1. define props
const mapStateToProps = (state) => {
    const propertiesForState = {
        products: state.allProductsState.products,
        loading: state.allProductsState.loading,
        errorMessage: state.allProductsState.errorMessage
    }
    return propertiesForState;
}

const mapDispatcherToProps = (dispatch) => {
    const propertyForDispatcher = {
        getProducts: () => {
            const callback = getProductsAsyncCallbackCreator();
            dispatch(callback)
        }
    }
    return propertyForDispatcher;
}

// const connector = connect(mapStateToProps, mapDispatcherToProps)
// export default connector(ProductContainer);

export default connect(mapStateToProps, mapDispatcherToProps)(ProductContainer)