import React from 'react';
import './Home.css';
import CarouselContainer from '../components/CarouselContainer';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

export default function Home() {
    return (

            <div className="home-container"> 
            <div>
                         <CarouselContainer /> </div>
   
            <Hero />
            <Cards />
            <Footer />
     

            </div>
            
    )
}
