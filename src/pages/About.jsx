import React from 'react';
import '../App.css';
import Footer from '../components/Footer';
import hope from '../images/hope.jpeg';
import ReactPlayer from 'react-player'
import about from '/home/brenomatias/hope-team-project/hope-team/src/components/galery/localVideos/about.mp4';




function About() {
    return (
        <div> 
                <div className="about-main">                 
                    <div className='about-text'> 
                    <h1 className='h-about'> Dudu e Hope Team teste</h1>
                    <p className='p-about'> Tudo começou no interior da Bahia, na cidade Jacobina, onde nasceu Luis Eduardo Souza, o Dudu. Ainda criança, Dudu foi morar na capital Salvador. Aos 12 anos, em um projeto social de um amigo, Dudu conheceu o boxe e se apaixonou pelo esporte. O boxe começou como uma forma de se defender na escola, mas logo se tornou uma oportunidade de mudança de vida e conquistas.</p>

                    <p className='p-about'>
                    Se inspirando em seus conterrâneos baianos em ascensão no boxe, Dudu seguiu os passos dos campeões e se tornou profissional em 2010. Com seu esforço, dedicação e profissionalismo, o boxeador também teve oportunidade de mostrar seu talento em países como Uruguai, Portugal e Espanha. Com DNA de lutador, Dudu tem também no sangue a vontade e o prazer de ensinar.
                    </p>
                    <p className='p-about'>
                    Em 2009 a Hope Team foi fundada em Ipatinga/MG com intuito de transformar a vida de pessoas que buscam uma paixão esportiva. A Hope serve a diversos lutadores amadores e também profissionais. Aqueles também que buscam apenas por uma atividade física divertida e de resultados também são muito bem vindos.
                    </p>
                    <p className='p-about'>
                    O boxe trás consigo diversos beníficios corporais e mentais. A Hope oferece aulas de boxe em turmas e personal trainer para homens e mulheres de todas as idades. Oferecemos aulas experimentais para aqueles que querem conhecer o treino. Venha mudar seu estilo de vidadsadadaa!
                    </p>
                    <p> Porraaaa</p>
                    <p className='p-about'>
                    A partir de 2022 a Hope Team também passou a contar com uma unidade em Coronel Fabriciano! Para mais informações sobre aulas, contato e localização  lalalaalalala     
                    
                    <a  class='reach' href="/contato" target='_blank' rel="noreferrer">
                    </a>
                     </p> 
                    
            <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player fixed-bottom'
                    url= {about}
                    width='100%'
                    height='100%'
                    controls = {true}
                     />
                </div>
             

                    <h1 className='h-about'>Projeto Social </h1>
                    <p className='p-about'>Com uma carreira de muitas vitórias, Dudu sentiu a necessidade de retribuir a oportunidade que lhe foi dada na infância. Seguindo os pensamentos do projeto social que o acolheu, o boxeador criou seu próprio projeto para atender crianças carentes. Então em 2010 surgiu o projeto Dudu Nova Geração </p>
                    <p className='p-about'> 
                    Além de ser um espaço para crianças se encontrarem no esporte e absorvervalores para a vida, o projeto Dudu Nova Geração também gerou novos profissionais do boxe e MMA. Os ensinamentos da cultura da arte marcial e ajuda ao próximo tem sido a base de muitos.
                    </p>
                    <p className='p-about'>
                    Com fé, esperança e força para lutar pelos sonhos a história é criada!
                    </p>
          

                    <div className='aboutp'>
                    <img
                    className="about-pic"
                    src={hope}
                    alt="First slide"
                     />
                    </div>

                    <div className='reach1'> 
                    <a  class='reach' href="/contato"
                   target='_blank' rel="noreferrer">
                    <i class="fas fa-location-arrow"></i>
                    <p>Como chegar</p>
                    </a>
                </div>
                
                </div>               
                </div>

            <Footer />
          
        </div>
    )
}

export default About;
