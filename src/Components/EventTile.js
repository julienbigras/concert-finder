import React from 'react';

const EventTile = (props) => {
  const name = props.eventDetails.name;
  const date = props.eventDetails.dates.start.localDate;

  return (
    <li className="event-tile-wrapper">
      <div className="text-container">
        <h2>{name}</h2>
        <h3>{date}</h3>
      </div>
      <div className="button-container">
        <button onClick={() => props.addToUserList(props.eventDetails)}>
          Add to List
        </button>
        <button onClick={() => console.log('hello')}>View More Details</button>
      </div>
    </li>
  );
};

export default EventTile;
