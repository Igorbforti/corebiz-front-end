import React, {useEffect, useState} from 'react'
import Slider from 'react-slick'

import './style.css'

const Products = () => {

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        className: "card-content",
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2,
                infinite: false
            }
            }
        ]
        
    }

    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('https://corebiz-test.herokuapp.com/api/v1/products')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProduct(data)
            })
    }, [])

    return (
        <Slider {...settings}>
            {products.map(({imageUrl, listPrice, price, productId, productName, stars, installments, index}, product) => {
            return (
                <div className='card' id={productId}>
                    <div className='card-image'>
                        <img src={imageUrl} alt='' key={index} className='product-image'/>
                        {listPrice ? (<p className='discount-flag'></p>) : ''}
                    </div>
                    <div className='product-info'>
                        <p className='product-name'>{productName}</p>
                        <div className='product-star'>
                            {stars > 0 ? (<span className='star-checked'></span>) : (<span className='star'></span>)}
                            {stars > 1 ? (<span className='star-checked'></span>) : (<span className='star'></span>)}
                            {stars > 2 ? (<span className='star-checked'></span>) : (<span className='star'></span>)}
                            {stars > 3 ? (<span className='star-checked'></span>) : (<span className='star'></span>)}
                            {stars > 4 ? (<span className='star-checked'></span>) : (<span className='star'></span>)}
                        </div>
                        <div className='product-price'>
                            {listPrice ? (<p className='discount'></p>) : ''}
                            <p className='product-price'>{price}</p>
                        </div>
                            {installments[0] ? `ou em ${installments[0].quantity} x de ${installments[0].value}` : ''} 
                        <div>
                            <button className='buy-button'>COMPRAR</button>
                        </div>
                    </div>
                </div>
                )
            })}
        </Slider>
    )
}

export default Products