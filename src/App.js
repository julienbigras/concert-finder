import React from 'react';
import EventList from './Components/EventList';
import Form from './Components/Form';
import './App.css';

class App extends React.Component {
  state = {
    city: '',
    events: [],
  };

  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <Form />
        <EventList />
      </div>
    );
  }
}

export default App;
