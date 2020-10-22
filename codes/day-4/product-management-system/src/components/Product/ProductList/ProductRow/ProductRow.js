import React from 'react'
import PropTypes from 'prop-types'
import './ProductRow.css'

function ProductRow({ product }) {
    return (
        <tr>
            <td>
                <div className='imgStyle'>
                    <img src={product.imageUrl}
                        alt='NA'
                        title={product.productName}
                    />
                </div>
            </td>
            <td>
                {product.productName}
            </td>
            <td>
                {product.productCode}
            </td>
            <td>
                {product.price}
            </td>
            <td>
                {product.starRating}
            </td>
            <td>
                <button className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    )
}

ProductRow.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductRow

