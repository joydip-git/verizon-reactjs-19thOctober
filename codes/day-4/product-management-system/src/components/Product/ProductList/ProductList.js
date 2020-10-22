import React from 'react'
import PropTypes from 'prop-types'
import ProductTableHeaderRow from './ProductTableHeaderRow/ProductTableHeaderRow'
import ProductRow from './ProductRow/ProductRow'

function ProductList({ products }) {
    return (
        <div>
            <table>
                <ProductTableHeaderRow />
                <tbody>
                    {
                        products.map(p => {
                            return <ProductRow key={p.id} product={p} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired
}

export default ProductList

