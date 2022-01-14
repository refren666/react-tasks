import React from 'react';

const Flight = ({flightInfo: {mission_name, launch_year, links: {mission_patch_small}}}) => {

  return (
    <div className={'flight__block'}>
      <div className={'flight__description'}>
        <h3>{mission_name}</h3>
        <p>{launch_year}</p>
      </div>

      <div className={'mission__patch__image'}>
        <img src={mission_patch_small} alt='mission-patch'/>
      </div>
    </div>
  );
};

export default Flight;