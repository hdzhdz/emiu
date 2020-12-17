import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Anh De Thuong ~</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Hien ngang'
              label='De thuong'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='U Village'
              label='De thuong'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Di Mall'
              label='De thuong'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Xau xi'
              label='De thuong'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Garden'
              label='De thuong'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
