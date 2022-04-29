import React from 'react'

import './style.css'
import corebiz from '../../assets/images/corebiz-logo.png'

const App = ({cartQuantity}) => {
    return window.innerWidth > 768 ? (
        <header className='main-header'>
            <div className='header'>
                <div>
                    <img src={corebiz} alt='logo'></img>
                </div>
                <div className='search'>
                    <input type='search' placeholder='O que está procurando?' className='search-bar'></input>
                    <input type='submit' className='search-btn'></input>
                </div>
                <div>
                    <a href='https://google.com' className='account'>Minha Conta</a>
                </div>
                <div>
                    <p className='minicart'>{cartQuantity}</p>
                </div>
            </div>
        </header>
    ) : (        
        <header className='main-header'>
            <div className='header-mobile'>
                <div>
                    <div className='nav-menu'>
                        <span className='nav-menu-icon'></span>
                        <span className='nav-menu-icon'></span>
                        <span className='nav-menu-icon'></span>
                    </div>
                    <div className='logo-section'>
                        <a href="/">
                            <img src={corebiz} alt="" />
                        </a>
                    </div>
                    <div className='minicart-section'>
                        <p className='minicart'></p>
                    </div>
                    <div className='submit-section'>
                        <input className='search-bar' type="text" />
                        <input className='search-btn' type="submit" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default App