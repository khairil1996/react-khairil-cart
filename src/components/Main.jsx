import React from 'react'
import { Product } from './Product'

export const Main = ({ productlist, onAdd }) => {
    return (
        <div >
            {
                <div className='row'>
                    {
                        productlist.map(product => { return (<div className='col-sm-4'><Product onAdd={onAdd} key={product.id} product={product} /></div>) })
                    }
                </div>
            }


        </div>
    )
}
