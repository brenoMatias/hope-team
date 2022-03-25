import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import nextevent from './../images/nextevent.jpg';
import map1 from './../images/cities.png'

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
              text=" Rock'n Figth - Garajão/Ipatinga  "
              label='Último evento'
              path='/services'
              src={nextevent}
              alt="lala"
            />
            <CardItem className="card-item"  
              src={map1}
              text='Ipatinga e Coronel Fabriciano'
              label='Como Chegar'
              path='/contato'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;