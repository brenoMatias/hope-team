import React from 'react';
import '../App.css';
import Footer from '../components/Footer';
import crop2 from '../images/crop2.svg';
import hope from '../images/hope.jpeg';

function About() {
    return (
        <div> 
            <div className="about"> 
                <div className="about-main">
                    <div className='about-text'> 
                    <h1 className='h-about'>Luis Eduardo Souza - Dudu</h1>
                    <div className='p-box'> 
                    <p className='p-about'> Tudo começou no interior da Bahia, na cidade Jacobina, mas, ainda criança, Dudu foi morar na capital Salvador. Aos 12 anos, em um projeto social de um amigo, Dudu conheceu o boxe e se apaixonou pelo esporte. O boxe começou como uma forma de se defender na escola, mas logo se tornou uma oportunidade de mudança de vida e conquistas.</p>

                    <p className='p-about'>
                    Se inspirando em seus conterrâneos baianos em ascensão no boxe, Dudu seguiu os passos dos campeões e se tornou profissional em 2010. Com seu esforço, dedicação e profissionalismo, o boxeador também teve oportunidade de mostrar seu talento em países como Uruguai, Portugal e Espanha.
                    </p>
                    <p className='p-about'>
                    Com DNA de lutador, Dudu tem também no sangue a vontade e o prazer de ensinar. Em 2012 fundou a Hope Team em Ipatinga/MG com intuito de transformar a vida de pessoas que buscam uma paixão esportiva.
                    </p>


                    <h1 className='h-about'>Projeto Social </h1>
                    <p className='p-about'>Com uma carreira de muitas vitórias, Dudu sentiu a necessidade de retribuir a oportunidade que lhe foi dada na infância. Seguindo os pensamentos do projeto social que o acolheu, o boxeador criou o projeto Dudu Nova Geração para atender crianças carentes. </p>
                    <p className='p-about'> 
                    Além de ser um espaço para crianças se encontrarem no esporte e absorvervalores para a vida, o projeto Dudu Nova Geração também gerou novos profissionais do boxe e MMA. Os ensinamentos da cultura da arte marcial e ajuda ao próximo tem sido a base de muitos.
                    </p>
                    <p className='p-about'>
                    Com fé, esperança e força para lutar pelos sonhos a história é criada!
                    </p>
                    </div>

                    <div className='aboutp'>
                    <img
                    className="about-pic"
                    src={hope}
                    alt="First slide"
                     />
                    </div>

                    <div className='reach1'> 
                    <a  class='reach' href="/hope-team/contato"
                   target='_blank' rel="noreferrer">
                    <i class="fas fa-location-arrow"></i>
                    <p>Como chegar</p>
                    </a>
                </div>
                </div>
                   
                </div>
            </div>

            <div className='divFooter'> 
            <Footer />
            </div>
          
        </div>
    )
}

export default About