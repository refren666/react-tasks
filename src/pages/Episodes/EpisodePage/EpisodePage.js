import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {episodeService} from "../../../services/episode.service";
import EpisodeDetails from "../../../components/EpisodeDetails/EpisodeDetails";

const EpisodePage = () => {
  const [episode, setEpisode] = useState(null);
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

  return (
    <div>
      {episode && <EpisodeDetails episode={episode}/>}
    </div>
  );
};

export default EpisodePage;