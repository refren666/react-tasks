import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Menu = () => {
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
        <Link to={'cat-photo'}>
          <button>Cat</button>
        </Link>
        <Link to={'car-photo'}>
          <button>Car</button>
        </Link>
        <Link to={'dog-photo'}>
          <button>Dog</button>
        </Link>
        <Link to={'girl-photo'}>
          <button>Girl</button>
        </Link>
        <Link to={'notebook-photo'}>
          <button>Notebook</button>
        </Link>
      </nav>

      <div>
        <Outlet/>
      </div>
    </div>
)}

export {Menu};