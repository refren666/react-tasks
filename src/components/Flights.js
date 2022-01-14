import React, {useEffect, useState} from 'react';

import Flight from "./Flight";

const Flights = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches/')
      .then(response => response.json())
      .then(value => setFlights(value))
  }, [])


  return (
    <>
      {flights.reduce((accumulator, rocket) => {
        if (rocket.launch_year !== '2020') {
          accumulator.push( <Flight key={rocket.flight_number} flightInfo={rocket}/> )
        }
        return accumulator;
      }, [])}
    </>
  );
};

export default Flights;