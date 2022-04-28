import React from 'react'
import Products from '../Products'

import './style.css'

const Shelf = ({addProduct}) => {
    return (
        <div className='shelf'>
            <p className='shelf-text'>Mais Vendidos</p>
            <Products addToCart={addProduct}/>
        </div>
    )
}

export default Shelf