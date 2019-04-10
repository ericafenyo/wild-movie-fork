import React, { Component } from 'react';

import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="box-wrapper">
        <div className="box">
          {/* <header className="App-header"> */}
          <SearchBar />


          {/* </header> */}
        </div>
      </div>
    );
  }
}

export default App;
