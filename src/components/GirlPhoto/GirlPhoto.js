import React, {useEffect, useState} from 'react';

import {imageService} from "../../services/image.service";
import Loader from "../Loader/Loader";

const GirlPhoto = () => {
  const [trigger, setTrigger] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    imageService.getGirl().then(blob => {
      document.getElementById('girlPhoto').src = URL.createObjectURL(blob);
      setLoading(false);
    })
  }, [trigger])

  return (
    <div>
      {loading && <Loader/>}

      <div>
        <img src="" alt="photo" id={'girlPhoto'}/>
      </div>

        <button onClick={setTrigger}>Update</button>
    </div>
  );
};

export {GirlPhoto};