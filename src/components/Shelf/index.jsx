import React from "react";
import Products from "../Products"

import "./style.css"

const Shelf = () => {

    return (
        <div className="best-seller">
            <div>
                <h3 className="best-seller-text">Mais Vendidos</h3>
                <div className="best-seller-line"></div>
            </div>
            <div className="products">
                <Products/>
            </div>
            
        </div>
    )
}

export default Shelf;