import React from 'react';
import '../App.css';
import Footer from '../components/Footer';
import crop2 from '../images/crop2.svg';

function About() {
    return (
        <div> 
            <div className="about"> 
                <div className="about-main">
                    <div className='about-text'> 
                    <h1>Luis Eduardo Souza - Dudu</h1>
                    <p> Tudo começou no interior da Bahia, na cidade Jacobina, mas, ainda criança, Dudu foi morar na capital Salvador. Aos 12 anos, em um projeto social de um amigo, Dudu conheceu o boxe e se apaixonou pelo esporte. O boxe começou como uma forma de se defender na escola, mas logo se tornou uma oportunidade de mudança de vida e conquistas.</p>

                    <p>
                    Se inspirando em seus conterrâneos baianos em ascensão no boxe, Dudu seguiu os passos dos campeões e se tornou profissional em 2010. Com seu esforço, dedicação e profissionalismo, o boxeador também teve oportunidade de mostrar seu talento em países como Uruguai, Portugal e Espanha.
                    </p>
                    <p>
                    Com DNA de lutador, Dudu tem também no sangue a vontade e o prazer de ensinar. Em 2012 fundou a Hope Team em Ipatinga/MG com intuito de transformar a vida de pessoas que buscam uma paixão esportiva.
                    </p>

                    <h1>Projeto Social </h1>
                    <p>Com uma carreira de muitas vitórias, Dudu sentiu a necessidade de retribuir a oportunidade que lhe foi dada na infância. Seguindo os pensamentos do projeto social que o acolheu, o boxeador criou o projeto Dudu Nova Geração para atender crianças carentes. </p>
                    <p> 
                    Propiciar um local para a prática de esporte para crianças além de gerar  boas pessoas também criou novos profissionais do boxe e MMA. Os ensinamentos da cultura da arte marcial e ajuda ao próximo tem sido a base de muitos.
                    </p>
                    <p>
                    Com fé, esperança e força para lutar pelos sonhos a história é criada.
                    </p>
                    <p>como chegar</p>
                    </div>
                   
                </div>
            </div>
          <Footer />
        </div>
    )
}

export default About
