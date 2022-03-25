
import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from './../images/carousel1.jpg';
import c2 from './../images/c2.jpg'
import c from './../images/c.png'
import c11 from './../images/c1.jpg'
import c3 from './../images/lo.svg'
// import logo2 from './../images/logo2.jpg';

const CarouselContainer = () => {
  return (
    <div className="carousel"> 
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={c3}
          alt="First slide"
        />
        <div className="c.capation"> 
        <Carousel.Caption >
          <div className='ccaption'> 
          <h3>Academia de Boxe</h3>
          <p>Ipatinga - Coronel Fabriciano - MG</p>
          </div>
        </Carousel.Caption>
        </div>
      
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={c2}
          alt="Third slide"

        />
        <Carousel.Caption>
        <div className='animate__animated animate__rotateIn ccaptionmude'> 
          <h3>MUDE SEU ESTILO DE VIDA!</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={c11}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselContainer;