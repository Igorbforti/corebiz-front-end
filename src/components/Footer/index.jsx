import React from 'react';

import './style.css';

import corebiz from '../../assets/images/corebiz.png';
import Vtex from '../../assets/images/vtex.png';


const Footer = () => {
return(
    <div className="footer">
    <div className="footer-content container">
    <div className="footer-content-column">
        <div className="address">
        <h2 className="address-title">Localização</h2>
        <p className="address-location">
            Avenida Andrômeda, 2000. Bloco 6 e 8
        </p>
        <p className="address-location">Alphavile SP</p>
        </div>
        <div className="contact">
        <a href="mailto:brasil@corebiz.ag" className="contact-mail"
            >brasil@corebiz.ag</a
        >
        <p className="contact-phone">+55 11 3090 1039</p>
        </div>
    </div>
    <div className="footer-content-column">
        <div className="buttons">
        <a href="#" className="btn-contact"> ENTRE EM CONTATO </a>
        <a href="#" className="btn-talk"> FALE COM O NOSSO CONSULTOR ONLINE </a>
        </div>
    </div>
    <div className="footer-content-column">
        <a href="https://www.corebiz.ag/" target="blank" className="logo-corebiz">
        <img src={corebiz} alt="corebiz" />
        </a>
        <a href="https://vtex.com/br-pt/" target="blank" className="logo-vtex">
        <img src={Vtex} alt="vtex" />
        </a>
    </div>
    </div>
</div>
)
}

export default Footer;