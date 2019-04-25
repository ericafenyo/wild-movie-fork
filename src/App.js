import React, { Component } from 'react';
import "./App.css";
import "./Components/HomeScreen/HomeScreen.css";
import SearchList from './Components/SearchList/SearchList';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <SearchList />
        </header>
      </div>
    );
  }
}

export default App;