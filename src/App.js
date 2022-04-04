import './App.css';
import Header from "./components/Header"
import Banner from "./components/Banner"
import Shelf from "./components/Shelf"

import "./global-style.css"

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Shelf/>
    </>
    
  );
}

export default App;
