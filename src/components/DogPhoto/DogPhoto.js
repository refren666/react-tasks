import React, {useEffect, useState} from 'react';

import {imageService} from "../../services/image.service";
import Loader from "../Loader/Loader";

const DogPhoto = () => {
  const [trigger, setTrigger] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    imageService.getDog().then(blob => {
      document.getElementById('dogPhoto').src = URL.createObjectURL(blob);
      setLoading(false);
    })
  }, [trigger])

  return (
    <div>
      {loading && <Loader/>}

      <div>
        <div>
          <img src="" alt="photo" id={'dogPhoto'}/>
        </div>

        <button onClick={setTrigger}>Update</button>
      </div>
    </div>
  );
};

export {DogPhoto};