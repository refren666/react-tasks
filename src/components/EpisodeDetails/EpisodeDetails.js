import React, {useEffect, useState} from 'react';

import {characterService} from "../../services/character.service";
import EpisodeHeader from "../EpisodeHeader/EpisodeHeader";
import CharacterDetails from "../CharacterDetails/CharacterDetails";
import classes from './EpisodeDetails.module.css'

const EpisodeDetails = ({episode}) => {
  const [characters, setCharacters] = useState([]);
  const {characters: episodeCharacters} = episode;

  const charactersId = episodeCharacters
    .map(characterURL => characterURL.split('/'))
    .map(arr => arr[arr.length - 1])
    .toString()

  useEffect(() => {
    characterService.getAllById(charactersId)
      .then(charactersArray => setCharacters(charactersArray))
  }, [])

  return (
    <div>
      <EpisodeHeader episodeInfo={episode}/>
      <div className={classes.charactersWrapper}>
        {characters.map(
          character => <CharacterDetails key={character.id} characterInfo={character}/>
        )}
      </div>
    </div>
  );
};

export default EpisodeDetails;