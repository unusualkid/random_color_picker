import React from "react";
import "./App.css";
import Random from "../Random/Random";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>random_color_picker</h1>
        <Random />
      </div>
    );
  }
}

export default App;
