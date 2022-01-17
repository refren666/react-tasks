import React from 'react';

import classes from './Car.module.css'

const Car = ({carInfo}) => {
  const {id, model, price, year} = carInfo;
  return (
    <div className={classes.carBlock}>
      <p>#{id}</p>
      <p>Model: {model}</p>
      <p>Price: {price}</p>
      <p>Year: {year}</p>
    </div>
  );
};

export default Car;