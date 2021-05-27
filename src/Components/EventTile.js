import React from 'react';

const EventTile = (props) => {
  console.log(props.name, 'EVENT TILE');
  return (
    <div className="event-tile-wrapper">
      <h2>{props.name}</h2>
    </div>
  );
};

export default EventTile;
