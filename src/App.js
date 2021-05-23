import { useState } from 'react';
import EventList from './Components/EventList';
import './App.css';

function App() {
  const [name, setName] = useState('friend');

  return (
    <div className="App">
      <h1>hello {name}</h1>
      <EventList />
    </div>
  );
}

export default App;
