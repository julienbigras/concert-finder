import React from 'react';

const EventTile = (props) => {
  return (
    <div className="event-tile-wrapper">
      <h2>{props.name}</h2>
      <h3>{props.date}</h3>
    </div>
  );
};

export default EventTile;
