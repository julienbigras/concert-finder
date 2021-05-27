import React from 'react';
import EventList from './Components/EventList';
import Form from './Components/Form';
import './App.css';

class App extends React.Component {
  state = {
    // city: '',
    selectValue: '',
    events: [],
  };

  handleCityChange = (e) => {
    this.setState({ selectValue: e.target.value });
    console.log(this.state.selectValue, 'select value');
  };

  updateCity = (e) => {
    e.preventDefault();
    console.log('hello i have been clicked');
    // this.setState({ city: city })
  };

  render() {
    return (
      <div className="App">
        <h1>Concert Wishlist</h1>
        <form action="">
          <label htmlFor="cities">Choose a city: </label>
          <select
            name="cities"
            id="cities"
            value={this.state.selectValue}
            onChange={this.handleCityChange}
          >
            <option value="toronto">Toronto</option>
            <option value="montreal">Montreal</option>
            <option value="ottawa">Ottawa</option>
            <option value="buffalo">Buffalo</option>
            <option value="detroit">Detroit</option>
          </select>
          <button onClick={(e) => this.updateCity(e)}>click</button>
        </form>
        {/* <Form updateCity={this.updateCity} handleCityChange={this.handleCityChange} /> */}
        <EventList />
      </div>
    );
  }
}

export default App;
