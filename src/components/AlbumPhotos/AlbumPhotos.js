import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {albumService} from "../../services/album.service";
import AlbumPhoto from "./AlbumPhoto/AlbumPhoto";

const AlbumPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const {state: {id}} = useLocation();

  useEffect(() => {
    albumService
      .getPhotosByAlbumId(id)
      .then(photosArr => setPhotos(photosArr))
  }, [id])

  return (
    <div style={{
      borderTop: '1px solid black',
      marginTop: '15px'
    }}>
      {photos.map(
        photo => <AlbumPhoto key={photo.id} photoDetails={photo}/>
      )}
    </div>
  );
};

export default AlbumPhotos;