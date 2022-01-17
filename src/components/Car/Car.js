import React from 'react';

import classes from './Car.module.css'

const Car = ({carInfo}) => {
  const {id, model, price, year} = carInfo;

  return (
    <div className={classes.carBlock}>
      <h2>Car id: {id}, model: {model}</h2>
      <p>price: {price}$</p>
      <p>year: {year}</p>
    </div>
  );
};

export default Car;