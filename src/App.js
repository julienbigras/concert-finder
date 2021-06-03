import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import EventsMain from './Components/EventsMain';
import UserList from './Components/UserList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={EventsMain}></Route>
          <Route path="/mylist" component={UserList}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
