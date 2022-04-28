import React from 'react'
import './style.css'
import footer from '../../assets/images/footer-logos.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <h3 className='footer-info'>Localização</h3>
                <p className='footer-text'>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
                <p className='footer-text'>Alphavile SP</p>
                <a href='mailto:brasil@corebiz.ag' className='footer-text'>brasil@corebiz.ag</a><br/>
                <a href='tel:+55 11 3090 1039' className='footer-text'>+55 11 3090 1039</a>
            </div>
            <div className='footer-buttons'>
                <button className='footer-contact'>ENTRE EM CONTATO</button>
                <button className='footer-online-contact'>FALE COM O NOSSO CONSULTOR ONLINE</button>
            </div>
            <div>
                <img src={footer} alt="" />
            </div>
        </div>
    )
}

export default Footer