import React from 'react';
import Footer from '../components/Footer';
import hope from '../images/hope.jpeg';
import ReactPlayer from 'react-player'
import about from '/home/brenomatias/hope-team-project/hope-team/src/components/galery/localVideos/about.mp4';


export default function teste() {
    return (

            <div className='about'> 
                <div className="about-main">
                <div className='about-text'> 
                
                <h1 className='habout'> Dudu e a Hope Team</h1>
                    <p className='pabout'> &nbsp;&nbsp;&nbsp;&nbsp;Tudo começou no interior da Bahia, na cidade de Jacobina, onde nasceu Luis Eduardo Souza, o Dudu. Ainda criança, Dudu foi morar na capital Salvador. Aos 12 anos, em um projeto social de um amigo, Dudu conheceu o boxe e se apaixonou pelo esporte. O boxe começou como uma forma de se defender na escola, mas logo se tornou uma oportunidade de mudança de vida e conquistas.</p>

                    <p className='pabout'>
                    &nbsp;&nbsp;&nbsp;&nbsp;Se inspirando em seus conterrâneos baianos em ascensão no boxe, Dudu seguiu os passos dos campeões e se tornou profissional em 2010. Com seu esforço, dedicação e profissionalismo, o boxeador também teve oportunidade de mostrar seu talento em países como Uruguai, Portugal e Espanha. Com DNA de lutador, Dudu tem também no sangue a vontade e o prazer de ensinar.
                    </p>
                    <p className='pabout'>
                    &nbsp;&nbsp;&nbsp;&nbsp;Em 2009 a Hope Team foi fundada em Ipatinga/MG com intuito de transformar a vida de pessoas que buscam uma paixão esportiva. A Hope serve a diversos lutadores amadores e também profissionais. Aqueles também que buscam apenas por uma atividade física divertida e de resultados também são muito bem vindos.
                    </p>
                    <p className='pabout'>
                    &nbsp;&nbsp;&nbsp;&nbsp;O boxe traz consigo diversos beníficios corporais e mentais. A Hope oferece aulas de boxe em turmas e personal trainer para homens e mulheres de todas as idades. Oferecemos aulas experimentais para aqueles que querem conhecer o treino. Venha mudar seu estilo de vida!
                    </p>

                    <p className='pabout'>
                    A partir de 2022 a Hope Team também passou a contar com uma unidade em Coronel Fabriciano! Para mais informações sobre aulas, contato e localização <a  class='reach' href="/contato"
                   target='_blank' rel="noreferrer">

                    <p className='click'>clique aqui.</p>
                    </a>
                     </p> 

                     <div className='player-wrapper2'>
                    <ReactPlayer
                    className='react-player2'
                    url= {about}
                    controls = {true}
                     />
                </div>
             


                    <h1 className='habout'>Projeto Social </h1>

                    <p className='pabout'>&nbsp;&nbsp;&nbsp;&nbsp;Com uma carreira de muitas vitórias, Dudu sentiu a necessidade de retribuir a oportunidade que lhe foi dada na infância. Seguindo os pensamentos do projeto social que o acolheu, o boxeador criou o projeto Dudu Nova Geração para atender crianças carentes no ano de 2010. </p>
                    <p className='pabout'> 
                    &nbsp;&nbsp;&nbsp; Além de ser um espaço para crianças se encontrarem no esporte e absorvervalores para a vida, o projeto Dudu Nova Geração também gerou novos profissionais do boxe e MMA. Os ensinamentos da cultura da arte marcial e ajuda ao próximo tem sido a base de muitos.
                    </p>
                    <p className='pabout'>
                    &nbsp;&nbsp;&nbsp;Com fé, esperança e força para lutar pelos sonhos a história é criada!
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

                <div className='divfootA'> 
                <Footer />
                </div>
            </div>
            
            
    )
}
