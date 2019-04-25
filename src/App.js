import React, { Component } from 'react';
import "./App.css";
import "./Components/HomeScreen/HomeScreen.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <HomeScreen />
        </header>
      </div>
    );
  }
}

export default App;