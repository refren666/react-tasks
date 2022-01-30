import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {getAllCars} from "../../store";

const Cars = () => {
  // extracting state from our store (store.config) using useSelector hook; works same with state.carReducer
  const {cars, status, error} = useSelector(state => state['carReducer']); // initialState: {cars: []}, same as getState() of a slice
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars()) // fills state with response data
  }, [])

  return (
    <div>
      {/*Loader*/}
      {status === 'pending' && <h1>Loading...</h1>}
      {/*Error message*/}
      {error && <h2>{error}</h2>}

      {cars.map(
        car => <Car key={car.id} car={car}/>
      )}
    </div>
  );
};

export {Cars};