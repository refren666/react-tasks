import './App.css';
// import {useState} from "react";
import {Cars, Form} from "./components";

function App() {
  // cars - array of objects!
  // const [cars, setCars] = useState([]);

  /*const getFormData = (data) => {
    // data = Object - {model: 'value', price: 'value', year: 'value'}
    setCars([...cars, {id: Date.now(), ...data}]) // в новий масив додаємо об'єкт з айді і розгорнуті дані форми
    // set cars = {id: number, model: 'value', price: 'value', year: 'value'}
  }*/

  /*const getCarId = (id) => {
    setCars(cars.filter( car => car.id !== id ))
  }*/

  return (
    <>
      <Form />
      <Cars />
    </>
  );
}

export default App;
