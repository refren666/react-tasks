import React, {useEffect, useState} from 'react';

import {imageService} from "../../services/image.service";
import Loader from "../Loader/Loader";

const CarPhoto = () => {
  const [trigger, setTrigger] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    imageService.getCar().then(blob => {
      document.getElementById('carPhoto').src = URL.createObjectURL(blob);
      setLoading(false)
    })
  }, [trigger])

  return (
    <div>
      {loading && <Loader/>}

      <div>
        <img src="" alt="photo" id={'carPhoto'}/>
      </div>

      <button onClick={setTrigger}>Update</button>
    </div>
  );
};

export {CarPhoto};