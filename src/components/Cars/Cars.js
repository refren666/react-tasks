import React, {useEffect, useState} from 'react';
import {carsService} from "../../services/cars.service";
import Car from "../Car/Car";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    carsService
      .getAll()
      .then(carsArr => setCars(carsArr))
  }, [])

  return (
    <div>
      {cars.map(
        car => <Car key={car.id} carInfo={car}/>
      )}
    </div>
  );
};

export default Cars;