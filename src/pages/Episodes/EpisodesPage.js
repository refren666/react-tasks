import React, {useEffect, useState} from 'react';

import {episodeService} from "../../services/episode.service";
import Episode from "../../components/Episode/Episode";
import classes from "./EpisodesPage.module.css"
import {Link} from "react-router-dom";

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    episodeService.getAll()
      .then(json => setEpisodes(json.results))
  }, [])

  return (
    <div>
      <h1 className={classes.title}>Rick and Morty episodes</h1>

      <div className={classes.episodesWrapper}>
        {episodes.map(
          episode => <Episode key={episode.id} episodeInfo={episode}/>)
        }
      </div>

      <div className={classes.buttonsBlock}>
        <Link to={'/'}>
          <button className={classes.button}>Prev</button>
        </Link>
        <Link to={'/'}>
          <button className={classes.button}>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default EpisodesPage;