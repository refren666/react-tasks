import {Route, Routes} from 'react-router-dom';

import './App.css';
// import {useState} from "react";
import CarsPage from "./pages/CarsPage/CarsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import Layout from "./components/Layout/Layout";

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
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route path={'/cars'} element={<CarsPage />}/>
        <Route path={'/users'} element={<UsersPage />}/>
        <Route path={'/posts'} element={<PostsPage />}/>
        <Route path={'/comments'} element={<CommentsPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
