import React from 'react'
import '../components/Hero.css';
import 'animate.css';


function Hero() {
    return (
        <div className="hero-container">
            

            <div className="container-2"> 

            <h1 class="hh1 animate__animated animate__backInLeft">Por que praticar boxe?</h1>

            <h2 className="h22"> As artes marciais estimulam o desenvolvimento de várias habilidades. A prática de arte marcial traz muitos benefícios para a saúde física e mental, de crianças à idosos. Por meio do boxe é possível também aprender a compartilhar valores e experiências. </h2>
             
             <div className='boxe-container'>      
            <h2 className="hh1 animate__animated animate__backInLeft"> Benefícios do  </h2>
            <h2 className='boxe1'>BOXE</h2>
            </div>

     <div className="beneficies"> 
            <i class="fas fa-boxing-glove">
                <p className="gloves"> Promoção da capacidade de defesa pessoal</p>
            </i>
            <i class="fas fa-boxing-glove">
                <p className="gloves"> Aumento da coordenação</p>
            </i>
            <i class="fas fa-boxing-glove">
                <p className="gloves"> Emagrecimento progressivo</p>
            </i>
            <i class="fas fa-boxing-glove">
                <p className="gloves"> Melhora na composição física</p>
            </i>
            <i class="fas fa-boxing-glove">
                <p className="gloves">  Redução do estresse</p>
            </i>
            <i class="fas fa-boxing-glove">
                <p className="gloves"> Elevação da autoestima</p>
            </i>
        </div>

                <div>
                <h1 class="venha melhor animate__animated animate__backInLeft">Venha para a melhor academia da região!</h1>
                </div>

            </div>
        </div>
    )
}

export default Hero;


