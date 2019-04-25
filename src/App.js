import React, { Component } from 'react';
import "./App.css";
import "./Components/HomeScreen/HomeScreen.css";
import 'bootstrap/dist/css/bootstrap.min.css';



String.prototype.notEmpty = function () {
  const regex = /\S/
  return regex.test(this)
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <HomeScreen />
      </div>
    );
  }
}

export default App;