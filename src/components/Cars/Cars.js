import React, {useEffect, useState} from 'react';

import {carsService} from "../../services/cars.service";
import Car from "../Car/Car";

const Cars = ({trigger}) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    carsService
      .getAll()
      .then(carsArr => {
        setCars(carsArr)
        console.log(carsArr)
      })
  }, [trigger])

  return (
    <div>
      {cars.map(
        car => <Car key={car.id} carInfo={car}/>
      )}
    </div>
  );
};

export default Cars;