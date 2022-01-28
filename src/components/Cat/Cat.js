import React from 'react';

const Cat = ({catNames}) => {
  console.log(catNames)
  return (
    <div>
      Name: {catNames}
    </div>
  );
};

export default Cat;