import React, {useEffect, useState} from 'react';
import './style.css';

import logoImg from '../../assets/images/site-logo-corebiz.png'

const Header = ({cartQuantity}) => {

    console.log(window.innerWidth)

    return window.innerWidth > 768 ? (
        <header id="header">
            <div className="header-nav container">
                <div className="header-nav-logo">
                <a href="/">
                    <img src={logoImg} alt="Corebiz" />
                </a>
                </div>
                <div className="header-nav-search">
                <form className="search" action="">
                    <input type="text" className="search-form" placeholder="O que você está procurando?"/>
                </form>
                </div>
                <div className="header-nav-account">
                <a href="#" className="account-text">Minha Conta</a>
                </div>
                <div className="header-nav-cart">
                <a href="#" className="cart-icon"></a>
                <span className="cart-quantity" >{cartQuantity}</span>
                </div>
            </div>
        </header>
    ) : (
        <header id="header">
            <div class="header-nav-mobile container">
                <div class="top-nav">
                    <div class="top-nav-menu">
                    <span class="top-nav-menu-icon"></span>
                    <span class="top-nav-menu-icon"></span>
                    <span class="top-nav-menu-icon"></span>
                    </div>

                    <div class="top-nav-logo">
                    <a href="/">
                        <img src={logoImg} alt="corebiz" />
                    </a>
                    </div>
                    <div class="top-nav-cart">
                    <a href="#" class="cart-icon"></a>
                    <span class="cart-quantity">{cartQuantity}</span>
                    </div>
                </div>
                <div class="header-search">
                    <form class="search-form" action="">
                    <input
                        type="text"
                        class="search"
                        placeholder="O que você está procurando?"
                    />
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header;