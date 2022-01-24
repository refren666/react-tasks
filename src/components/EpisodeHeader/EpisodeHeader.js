import React from 'react';

import classes from './EpisodeHeader.module.css'

const EpisodeHeader = ({episodeInfo}) => {
  const {name, air_date, episode} = episodeInfo;

  return (
    <div className={classes.header}>
      <h2>Name: {name}</h2>
      <h3>Air date: {air_date}</h3>
      <h3>Episode: {episode}</h3>
    </div>
  );
};

export default EpisodeHeader;