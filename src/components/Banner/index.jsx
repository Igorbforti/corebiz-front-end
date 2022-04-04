import React, { useState } from "react";
import Slider from "react-slick";

import "./style.css"
import url from "../../assets/images/main-banner.png"
import urlMobile from "../../assets/images/mobile-banner.png"

const Banner = () => {

    const [width] = useState(window.innerWidth)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        className: "main-banner"
    }

    const bannerImages = [
        {
            name: "Banner 1",
            url: url,
            urlMobile: urlMobile
        },
        {
            name: "Banner 2",
            url: url,
            urlMobile: urlMobile
        },
        {
            name: "Banner 3",
            url: url,
            urlMobile: urlMobile
        },
        {
            name: "Banner 4",
            url: url,
            urlMobile: urlMobile
        }
    ]

    return width > 768 ? 
        <div className = "main-banner">
            <Slider {...settings}>
                {bannerImages.map((photo) => {
                    console.log(photo)
                    return (<img src={photo.url}/>)
                })}
            </Slider>
        </div>
    : (
        <div className = "main-banner">
            <Slider {...settings}>
                {bannerImages.map((photo) => {
                    console.log(photo)
                    return (<img src={photo.urlMobile}/>)
                })}
            </Slider>
        </div>
    )
}

export default Banner;