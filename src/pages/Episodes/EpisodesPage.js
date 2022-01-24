import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import {episodeService} from "../../services/episode.service";
import Episode from "../../components/Episode/Episode";
import classes from "./EpisodesPage.module.css"

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    episodeService.getAllPage(currentPage)
      .then(json => setEpisodes(json.results))
  }, [currentPage])

  const moveNext = () => {
    if (currentPage !== 3) {
      setCurrentPage(currentPage + 1);
    }
  }

  const moveBack = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

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
          <button className={classes.button} onClick={moveBack}>Prev</button>
        </Link>
        <Link to={'/'}>
          <button className={classes.button} onClick={moveNext}>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default EpisodesPage;