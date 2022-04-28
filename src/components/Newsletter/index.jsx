import React from 'react'
import './style.css'

const Newsletter = () => {
    return (
        <div className='newsletter-container'>
            <div>
                <p className='newsletter-text'>Participe de nossas news com promoções e novidades!</p>
            </div>
            <div>
                <input type="text" placeholder='Digite seu nome' className='newsletter-field' />
                <input type="email" placeholder='Digite seu email' className='newsletter-field' />
                <input type="submit" value='Eu quero!' className='newsletter-button' />
            </div>
        </div>
    )
}

export default Newsletter