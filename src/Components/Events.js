import React from 'react';
import axios from 'axios';

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
        console.log(this.state.events, 'these are events');
      })
      .catch(() => console.log('something went wrong i guess'));
  };

  render() {
    return (
      <div>
        <button onClick={this.getEvents}>click here</button>
        <ul></ul>
      </div>
    );
  }
}

// function Events() {
//   const [events, setEvents] = useState([]);

//   function getEvents() {
//     const city = 'toronto';
//     const size = '20';

//     axios({
//       method: 'GET',
//       url: API_DATA.rootUrl,
//       dataResponse: 'json',
//       params: {
//         apikey: API_DATA.apiKey,
//         city: city,
//         classificationName: API_DATA.classificationName,
//         size: size,
//       },
//     })
//       .then((results) => {
//         results = results.data._embedded.events;
//         console.log(results, 'this is the data');
//         setEvents([...events, results]);
//         // setEvents(events.push(results));
//         console.log(events, 'these are events');
//       })
//       .catch(() => console.log('something went wrong i guess'));
//   }

//   return (
//     <div>
//       <button onClick={getEvents}>click here</button>
//       <ul></ul>
//     </div>
//   );
// }

export default Events;
