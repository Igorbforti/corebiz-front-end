import React, {useEffect, useState} from 'react'

const Products = () => {

    const [product, setProduct] = useState({productId:'', productName:'', stars:'', imageUrl:'', listPrice:'', price:'', installments:''})

    useEffect(() => {
        fetch('https://corebiz-test.herokuapp.com/api/v1/products')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProduct({
                    productId: data.productId,
                    productName: data.productName,
                    stars: data.stars,
                    imageUrl: data.imageUrl,
                    listPrice: data.listPrice,
                    price: data.price,
                    installments: data.installments
                })
            })
    }, [])

    return (
        <div className='card' id={product.productId}>
            <div className='card-image'>
                <img src={product.imageUrl} alt='' className='product-image'/>
                {product.listPrice ? (<p className='discount-flag'></p>) : ''}
            </div>
            <div className='product-info'>
                <p className='product-name'>{product.productName}</p>
                <div className='product-star'>
                    {product.stars > 0 ? (<span className='star-checked'></span>) : (<span className='star'></span>)}
                    {product.stars > 1 ? (<span className='star-checked'></span>) : (<span className='star'></span>)}
                    {product.stars > 2 ? (<span className='star-checked'></span>) : (<span className='star'></span>)}
                    {product.stars > 3 ? (<span className='star-checked'></span>) : (<span className='star'></span>)}
                    {product.stars > 4 ? (<span className='star-checked'></span>) : (<span className='star'></span>)}
                </div>
                <div className='product-price'>
                    {product.listPrice ? (<p className='discount'></p>) : ''}
                    <p className='product-price'>{product.price}</p>
                </div>
                <div>
                    <button className='buy-button'>COMPRAR</button>
                </div>
            </div>
        </div>
    )
}

export default Products