import React from 'react';
import EventList from './Components/EventList';
import axios from 'axios';
import Form from './Components/Form';
import API_DATA from './apiData';
import './App.css';

class App extends React.Component {
  state = {
    selectedCity: 'toronto',
    events: [],
  };

  handleCityChange = (e) => {
    this.setState({ selectedCity: e.target.value });
    setTimeout(() => {
      console.log(this.state.selectedCity);
    }, 50);
  };

  getEvents = () => {
    axios({
      method: 'GET',
      url: API_DATA.rootUrl,
      dataResponse: 'json',
      params: {
        apikey: API_DATA.apiKey,
        city: this.state.selectedCity,
        classificationName: API_DATA.classificationName,
        size: 50,
      },
    })
      .then((results) => {
        results = results.data._embedded.events;
        console.log(results, 'this is the data');
        this.setState({ events: [...results] });
      })
      .catch(() => console.log('something went wrong i guess'));
  };

  updateCity = (e) => {
    e.preventDefault();
    this.getEvents();
  };

  render() {
    return (
      <div className="App">
        <h1>Concert Wishlist</h1>
        <Form
          handleCityChange={this.handleCityChange}
          selectValue={this.state.selectedCity}
          updateCity={this.updateCity}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
