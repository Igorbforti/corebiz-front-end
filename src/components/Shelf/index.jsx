import React from 'react'
import Products from '../Products'

import './style.css'

const Shelf = () => {
    return (
        <div className='shelf'>
            <p className='shelf-text'>Mais Vendidos</p>
            <Products/>
        </div>
    )
}

export default Shelf