import React from 'react';
import {useDispatch} from "react-redux";

import {carToUpdate, deleteCarById} from "../../store";

const Car = ({car}) => {
  const {id, model, price, year} = car;
  const dispatch = useDispatch();

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px',
      gap: '20px'
    }}>
      <div>
        <div>Model: {model}</div>
        <div>Price: {price}</div>
        <div>Model: {year}</div>
      </div>
      <button className={'button'} onClick={() => dispatch(deleteCarById({id: id}))}>Delete</button>
      <button className={'button'} onClick={() => dispatch(carToUpdate({car}))}>Update</button>
    </div>
  );
};

export {Car};