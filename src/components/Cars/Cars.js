import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = ({trigger}) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    carService.getAll()
      .then(carsArr => setCars(carsArr))
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