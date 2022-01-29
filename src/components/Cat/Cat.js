import React from 'react';

const Cat = ({catName, deleteCat}) => {
  return (
    <div style={{
      marginBottom: '10px'
    }}>
      <span>Cat name: {catName}</span>
      <button onClick={() => deleteCat(catName)}>Delete cat's name</button>
    </div>
  );
};

export default Cat;