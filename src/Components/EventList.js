import React from 'react';
import EventTile from './EventTile';

const Events = (props) => {
  const renderEvent = () => {
    const events = props.events.map((event) => {
      return <EventTile name={event.name} />;
    });

    return events;
  };

  return (
    <div>
      <ul>{renderEvent()}</ul>
    </div>
  );
};

export default Events;
