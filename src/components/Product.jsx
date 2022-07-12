import React from 'react'
import './Product.css'

export const Product = ({ product, onAdd }) => {
    return (
        <div id='center'>

            <h3>{product.name}</h3>
            <img src={product.image} width='150' height='150' alt="" />
            <h5>${product.price}</h5>
            <button className='btn btn-success' onClick={()=>{onAdd(product)}}>
                Add to Cart
            </button>


        </div>
    )
}
