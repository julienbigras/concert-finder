import React from 'react';
import axios from 'axios';
import EventTile from './EventTile';

const API_DATA = {
  rootUrl: 'https://app.ticketmaster.com/discovery/v2/events',
  apiKey: '7tJ4PTQk1AwotZuntBSGZxAeepKSywAH',
  classificationName: 'music',
};

class Events extends React.Component {
  state = { events: [] };

  getEvents = () => {
    const city = 'toronto';
    const size = '20';

    axios({
      method: 'GET',
      url: API_DATA.rootUrl,
      dataResponse: 'json',
      params: {
        apikey: API_DATA.apiKey,
        city: city,
        classificationName: API_DATA.classificationName,
        size: size,
      },
    })
      .then((results) => {
        results = results.data._embedded.events;
        console.log(results, 'this is the data');
        this.setState({ events: [...results] });
        // console.log(this.state.events, 'these are events');
        // this.renderEvent();
      })
      .catch(() => console.log('something went wrong i guess'));
  };

  renderEvent = () => {
    console.log(this.state.events, 'these are the events again babyyy');
    this.state.events.map((event) => {
      return <EventTile name={event.name} />;
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.getEvents}>click here</button>
        <ul>{this.renderEvent()}</ul>
      </div>
    );
  }
}

export default Events;
