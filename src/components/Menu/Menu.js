import React, {useEffect, useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import ApiService from "../../services/api.service";

const Menu = () => {
  const [catPhoto, setCatPhoto] = useState();
  const catService = new ApiService('/users')
  const car = new ApiService('/car')
  const girl = new ApiService('/girl')
  const dog = new ApiService('/dog')
  const notebook = new ApiService('/notebook')

  // useEffect(() => {
  //   ApiService.getPhoto().
  // }, [])
  const getCatPhoto = () => {
    fetch('https://loremflickr.com/320/240/cat')
      .then(response => response.json())
      .then(photo => setCatPhoto(photo))
    console.log(catPhoto)
  }

  return (
    <div style={{
      display: 'flex',
      columnGap: '50px'
    }}>

      <nav style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '15px'
      }}>
        <Link to={'cat'}>
          <button>Cat</button>
        </Link>
        <Link to={'car'}>
          <button>Car</button>
        </Link>
        <Link to={'photo'}>
          <button>Girl</button>
        </Link>
        <Link to={'dog'}>
          <button>Dog</button>
        </Link>
        <Link to={'notebook'}>
          <button>Notebook</button>
        </Link>
      </nav>

      <div>
        <Outlet/>
      </div>
    </div>
)}

export default Menu;