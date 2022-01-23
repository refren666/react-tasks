import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {episodeService} from "../../../services/episode.service";
import {characterService} from "../../../services/character.service";
import EpisodeDetails from "../../../components/EpisodeDetails/EpisodeDetails";

const EpisodePage = () => {
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);
  const {episodeId} = useParams();
  const {state} = useLocation();

  useEffect(() => {
    if (state) {
      setEpisode(state)
      return;
    }

    episodeService.getById(episodeId)
      .then(episode => setEpisode(episode))
  }, [])

  const charactersId = episode?.characters
    .map(characterURL => characterURL.split('/'))
    .map(arr => arr[arr.length - 1])
    .toString()

  console.log(charactersId)

  useEffect(() => {
    characterService.getAllById(charactersId)
      .then(charactersArray => setCharacters(charactersArray))

    // IT WORKS
    // fetch(`https://rickandmortyapi.com/api/character/1,2,3`)
    //   .then(response => response.json())
    //   .then(charactersArray => setCharacters(charactersArray))
  }, [])

  // console.log(characters)

  return (
    <div>
      {episode && <EpisodeDetails episode={episode}/>}
    </div>
  );
};

export default EpisodePage;