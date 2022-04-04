import React from "react";

const Header = () => {
    return (
        <header>
        <div className= "desktop-header-home-page">
            <div className= "desktop-header-logo">
                <img src = ""/>
            </div>
            <form className= "desktop-search-bar">
                <input type = "search" className= "desktop-search-bar-product" placeholder = "O que está procurando?"/>
                <input type = "submit" className= "desktop-search-bar-button"/>
            </form>
            <div className= "desktop-account">
                <img src = "" className= "desktop-user-icon"/>
                <a href = "https://google.com" target = "_blank" className= "desktop-my-account-link">Minha conta</a>
            </div>
            <div className= "minicart">
                <img src = ""/>
                <div className= "minicart-quantity" id = "minicart-quantity">0</div>
            </div>
        </div>
        </header>
    )
}

export default Header