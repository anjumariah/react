import React from 'react'
import Speciality from '../components/speciality/speciality';
import About from '../components/about/about';
import Header from '../components/header/header';
import Carousel from '../components/carousel/carousel';
import Footer from '../components/footer/footer';
// import {BrowserRouter as Router,Route, Switch} from "react-router-dom";


export default function home() {
  return (
    <div> 
      <Header />
        <Carousel/>   
        <Speciality/>
        <About  />
        <Footer />
    </div>
  )
}
