import React from 'react';
import Climb from './Climb';

const Climbs = ({ climbs, removeClimb }) => {
  return (
    <div>
      {climbs.map((climb) => (
        <Climb 
        key={climb.id} 
        climb={climb} 
        removeClimb={removeClimb}>
        </Climb>
      ))}
    </div>
  );
};

export default Climbs;
