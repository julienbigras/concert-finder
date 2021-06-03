import React from 'react';

const EventTile = (props) => {
  console.log(props.eventDetails);
  return (
    <div className="event-tile-wrapper">
      <h2>{props.name}</h2>
      <h3>{props.date}</h3>
      <button onClick={() => props.addToUserList(props.eventDetails)}>
        Add to List
      </button>
    </div>
  );
};

export default EventTile;
