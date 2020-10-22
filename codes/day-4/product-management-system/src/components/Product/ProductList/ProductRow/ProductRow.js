import React from 'react'
import PropTypes from 'prop-types'
import './ProductRow.css'
import { Link, NavLink } from 'react-router-dom'

function ProductRow({ product, deleteHandler }) {
    return (
        <tr>
            <td>
                <Link to={`/product/${product.productId}`}>
                    <div className='img-responsive'>
                        <img src={product.imageUrl}
                            alt='NA'
                            title={product.productName}
                            className='imgStyle'
                        />
                    </div>
                </Link>
            </td>
            <td>
                <NavLink to={`/product/update/${product.productId}`}>
                    {product.productName}
                </NavLink>
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
                <button className='btn btn-danger' onClick={() => deleteHandler(product.productId)}>Delete</button>
            </td>
        </tr>
    )
}

ProductRow.propTypes = {
    product: PropTypes.object.isRequired,
    deleteHandler: PropTypes.func.isRequired
}

export default ProductRow

