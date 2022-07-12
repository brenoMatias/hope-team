import React from 'react';
import './Home.css';
import CarouselContainer from '../components/CarouselContainer';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import seminario from './../images/seminario.jpeg';
import luta from './../images/luta.jpeg';

export default function Home() {
    return (

            <div className="home-container"> 
            <div>
                         <CarouselContainer /> </div>
   
            <Hero />

            < h1 className='h1e'> PRÓXIMOS EVENTOS</h1>

            <div className='nextevents'> 

                  
                  <div className='event1'> 
                      <h1 className='h1e1'> Seminário de Boxe </h1>

                    <img className='nx1' src={seminario} alt=''/>


                  </div>

                      
                  <div className='event2'> 
                        <h1 className='h1e2'> Luta Internacional - Colômbia </h1>
                          <img className='nx1' src={luta} alt=''/>

                  </div>

            </div>
            <Cards />
            <Footer />
     

            </div>
            
    )
}
