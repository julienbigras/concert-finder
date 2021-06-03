import React from 'react';
import EventTile from './EventTile';

const Events = (props) => {
  const renderEvent = () => {
    const events = props.events.map((event, i) => {
      return (
        <EventTile
          eventDetails={event}
          name={event.name}
          date={event.dates.start.localDate}
          key={i}
          addToUserList={props.addToUserList}
        />
      );
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
