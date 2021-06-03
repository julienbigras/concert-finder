import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header';
import EventsMain from './Components/EventsMain';
import UserList from './Components/UserList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={EventsMain}></Route>
            <Route path="/mylist" component={UserList}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
