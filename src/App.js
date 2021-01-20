import React from "react";
import "./App.css";
import Body from "./components/Body";
import Todos from "./components/toDo";
function App() {
  return (
    <div className="App">
      <Body title="Aehoo" />
      <Todos />
    </div>
  );
}

export default App;
