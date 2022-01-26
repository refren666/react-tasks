import React, {useEffect, useState} from 'react';

import {imageService} from "../../services/image.service";
import Loader from "../Loader/Loader";

const CatPhoto = () => {
  const [blobItem, setBlobItem] = useState();
  const [trigger, setTrigger] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    imageService.getCat().then(blob => {
      setBlobItem(URL.createObjectURL(blob));
      setLoading(false)
    })
  }, [trigger])

  return (
    <div>
      {loading ? <Loader/> : <div>
        <img src={blobItem} alt="photo"/>
      </div>}

      <button onClick={setTrigger}>Update</button>
    </div>
  );
};

export {CatPhoto};