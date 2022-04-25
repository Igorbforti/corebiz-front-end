import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Shelf from './components/Shelf'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './global-style.css'

const App = () => {
    return(
      <>
      <Header/>
      <Banner/>
      <Shelf/>
      </>
    );
}

export default App
