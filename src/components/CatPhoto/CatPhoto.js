import React, {useEffect, useState} from 'react';

import {imageService} from "../../services/image.service";
import Loader from "../Loader/Loader";

const CatPhoto = () => {
  const [trigger, setTrigger] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    imageService.getCat().then(blob => {
      document.getElementById('catPhoto').src = URL.createObjectURL(blob);
      setLoading(false)
    })
  }, [trigger])

  return (
    <div>
      {loading && <Loader/>}

      <div>
        <img src="" alt="photo" id={'catPhoto'}/>
      </div>

      <button onClick={setTrigger}>Update</button>
    </div>
  );
};

export {CatPhoto};