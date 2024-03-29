import React from 'react'
import Slider from 'react-slick'

import './style.css'
import image from '../../assets/images/main-banner.png'
import imageMobile from '../../assets/images/mobile-banner.png'

const Banner = () => {
    
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        className: 'banner'
    }

    const images = [
        {
            name: 'banner1',
            image: image,
            imageMobile: imageMobile
        },
        {
            name: 'banner2',
            image: image,
            imageMobile: imageMobile
        },
        {
            name: 'banner3',
            image: image,
            imageMobile: imageMobile
        },
        {
            name: 'banner4',
            image: image,
            imageMobile: imageMobile
        }
    ]

    return (
        <div className='banner'>
        <Slider {...settings}>
            {images.map((photo, index) => {
                return (<img src={photo.image} key={index} alt={photo.name}></img>)
            })}
        </Slider>
        </div>
    )
}

export default Banner