import React from 'react'

import './style.css'
import corebiz from '../../assets/images/corebiz-logo.png'

const App = ({cartQuantity}) => {
    return (
        <>
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
        </>
    )
}

export default App