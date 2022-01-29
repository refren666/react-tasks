import React from 'react';

const Dog = ({dogName, deleteDog}) => {
  return (
    <div style={{
      marginBottom: '10px'
    }}>
      <span>Dog name: {dogName}</span>
      <button onClick={() => deleteDog(dogName)}>Delete dog's name</button>
    </div>
  );
};

export default Dog;