import React, {useState, useEffect} from "react"
import Slider from "react-slick"
import axios from "axios"

import "./style.css"

const baseUrl = "https://corebiz-test.herokuapp.com/api/v1/products"

const Products = () => {

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        className: "shelf-content",
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

    const [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get(baseUrl).then(response=>{
            setProducts(
            response.data.map(product=>{
                console.log(product)
                return {...product}
            })
            )
        })
    },[])

    return (
        <Slider {...settings}>
            {products.map(({imageUrl, listPrice, price, productId, productName, stars, installments}) => {
                return (
                    <div className = "card" id = {productId}>
                        <div className = "product-image">
                            <img src = {imageUrl} alt = "Produto"/><br/>
                        </div>
                            <div className = "card-bottom">
                                <p> {productName}</p><br/>
                                <div>
                                    {stars === 1 ? (<span className = "stars">&#9733;&#9734;&#9734;&#9734;&#9734;</span>) : 
                                    stars === 2 ? (<span className = "stars">&#9733;&#9733;&#9734;&#9734;&#9734;</span>) : 
                                    stars === 3 ? (<span className = "stars">&#9733;&#9733;&#9733;&#9734;&#9734;</span>) : 
                                    stars === 4 ? (<span className = "stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>) : 
                                    stars === 5 ? (<span className = "stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>) : 
                                    (<span>Erro</span>)}
                                </div>
                                <p className = "discount">de {listPrice}</p>
                                <p className = "price">por {price}</p>
                                <p className = "parcel"> 
                                {installments[0] ? `ou em ${installments[0].quantity} x de ${installments[0].value}` : ""}
                                </p>
                            <div className = "button">
                                <button onclick = "incrementClick()" className = "btn">COMPRAR</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Slider>
    )
}

export default Products