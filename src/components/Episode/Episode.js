import React from 'react';
import {Link} from "react-router-dom";

import classes from './Episode.module.css'

const Episode = ({episodeInfo}) => {
  const {id, name, episode, air_date} = episodeInfo;

  return (
    <div className={classes.episodeBlock}>
      <div className={classes.episodeInfo}>
        <h3>{name}</h3>
        <p>Episode: {episode}</p>
        <p>Air Date: {air_date}</p>
      </div>

      <span>
        <Link className={classes.episodeLink}
              to={'episodes/' + id.toString()}
              state={{...episodeInfo}}
        >
        Episode details
      </Link>
      </span>
    </div>
  );
};

export default Episode;