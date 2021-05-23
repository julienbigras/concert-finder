import { useState } from "react";
import Events from "./Components/Events";
import "./App.css";

function App() {
  const [name, setName] = useState("friend");

  return (
    <div className="App">
      <h1>hello {name}</h1>
      <Events />
    </div>
  );
}

export default App;
