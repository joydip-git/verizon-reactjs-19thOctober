import React from 'react'
import PropTypes from 'prop-types'
import ProductTableHeaderRow from './ProductTableHeaderRow/ProductTableHeaderRow'
import ProductRow from './ProductRow/ProductRow'
import './ProductList.css'

function ProductList({ products, removeHandler }) {
    return (
        // <React.Fragment>
        <>
            <div className='panel panel-heading'>
                <h3> {products.length} Record(s) found...</h3>
            </div>
            <div className='panel panel-body bodyStyle'>
                <div className='table-responsive'>
                    <table className='table'>
                        <ProductTableHeaderRow />
                        <tbody>
                            {
                                products.map(p => {
                                    return <ProductRow key={p.id} product={p} deleteHandler={removeHandler} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
        //</React.Fragment>
    )
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    removeHandler: PropTypes.func.isRequired
}

export default ProductList

// const Fragment = () => {
//     class Frag extends Component {
//         render() {
//             return this.props.children;
//         }
//     }
//     return Frag;
// }

