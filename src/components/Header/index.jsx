import React from "react";
import "./style.css";

import  imgLogo from "../../assets/images/site-logo-corebiz.png"    
import  imgMinicart from "../../assets/images/minicart-icon.png"    
import  imgUser from "../../assets/images/user-icon.png.png"    

const Header = () => {

    return window.innerWidth > 768 ? (
        <header>
        <div className= "desktop-header-home-page">
            <div className= "desktop-header-logo">
                <img src = {imgLogo}/>
            </div>
            <form className= "desktop-search-bar">
                <input type = "search" className= "desktop-search-bar-product" placeholder = "O que está procurando?"/>
                <input type = "submit" className= "desktop-search-bar-button"/>
            </form>
            <div className= "desktop-account">
                <img src = {imgUser} className= "desktop-user-icon"/>
                <a href = "https://google.com" target = "_blank" className= "desktop-my-account-link">Minha conta</a>
            </div>
            <div className= "minicart">
                <img src = {imgMinicart}/>
                <div className= "minicart-quantity" id = "minicart-quantity">0</div>
            </div>
        </div>
        </header>
    ) : (
        <header>
        <div className="mobile-header-home-page">
            <div className="mobile-top-header">
                <div className="mobile-menu">
                    <span className="hamburger-menu"></span>
                </div>
                <div className="mobile-header-logo">
                    <img src="" alt="" className="mobile-logo"/>
                </div>
                <div className = "minicart">
                    <div className = "minicart-quantity" id = "minicart-quantity">0</div>
                </div>
            </div>
            <div className="mobile-search-header">
                <input type="text" id="" className="mobile-search-input"/>
                <input type="submit" id="" className="mobile-search-button"/> 
            </div>
        </div>
        </header>
    )
}

export default Header