import React, {useEffect, useState} from 'react';
import {imageService} from "../../services/image.service";
import Loader from "../Loader/Loader";

const NotebookPhoto = () => {
  const [trigger, setTrigger] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    imageService.getNotebook().then(blob => {
      document.getElementById('notebookPhoto').src = URL.createObjectURL(blob);
      setLoading(false);
    })
  }, [trigger])

  return (
    <div>
      {loading && <Loader/>}

      <div>
        <img src="" alt="photo" id={'notebookPhoto'}/>
      </div>

      <button onClick={setTrigger}>Update</button>
    </div>
  );
};

export {NotebookPhoto};