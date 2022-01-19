import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../../services/user.service";
import UserDetails from "../../../components/UserDetails/UserDetails";

const SingleUserPage = () => {
  const [user, setUser] = useState();
  const {userId} = useParams(); // userId = dynamic id
  const {state} = useLocation(); // state = user object!

  useEffect(() => {
    if (state) {
      setUser(state);
      return;
    }

    userService.getById(userId)
      .then(userObj => setUser(userObj))
  }, [userId])

  return (
    <div>
      <div>
        {user && <UserDetails user={user}/>}
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default SingleUserPage;