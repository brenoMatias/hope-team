import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import nextevent from './../images/rockin2.jpeg';
import map1 from './../images/map1.png';
import horas from './../images/horas1.jpg';

function Cards() {
  return (
    <div className='cards'>
      <div className='animated-container'>
                <h1 class="animate__animated animate__heartBeat">Fique Ligado!</h1>
      </div>
       <div className='cards-container'>
        <div className='cards-wrapper'>

          <ul className='cards-items'>
            <CardItem className="card-item"
              text=" Seg - Qua - Sex "
              label='Aulas'
              path='/contato'
              src={horas}
              alt="lala"
            />
            <CardItem className="card-item"  
              src={map1}
              text='Ipatinga MG'
              path='/contato'
              label='Como Chegar'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;