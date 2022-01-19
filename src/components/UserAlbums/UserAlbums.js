import React, {useEffect, useState} from 'react';
import {Outlet, useLocation} from "react-router-dom";

import {userService} from "../../services/user.service";
import UserAlbum from "./UserAlbum/UserAlbum";

const UserAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const {state: {id}} = useLocation();

  useEffect(() => {
    userService
      .getAlbumsByUserId(id)
      .then(albumsArr => setAlbums(albumsArr))
  }, [])

  return (
    <div>
      <div>
        {albums.map(
        album => <UserAlbum key={album.id} albumInfo={album}/>
      )}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserAlbums;