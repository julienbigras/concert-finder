import React from 'react';

class EventTile extends React.Component {
  render(props) {
    return (
      <div className="event-tile-wrapper">
        <h2>{this.props.artist}</h2>
      </div>
    );
  }
}

export default EventTile;
