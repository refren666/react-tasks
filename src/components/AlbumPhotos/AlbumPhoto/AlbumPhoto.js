import React from 'react';

const AlbumPhoto = ({photoDetails}) => {
  const {albumId, id, title, url, thumbnailUrl} = photoDetails;

  return (
    <div>
      <h3>Photo #{id} of album #{albumId}</h3>

      <h4>Title: {title}</h4>

      <div>
        <img src={thumbnailUrl} alt="picture"/>
      </div>

      <div>
        <img src={url} alt="picture"/>
      </div>
    </div>
  );
};

export default AlbumPhoto;