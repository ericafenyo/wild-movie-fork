import React, { Component } from 'react';

import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import { search } from './data/ApiEndpoint';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      value: "",
      data: []
    }
  }

  handleChange = (event) => {
    const value = event.target.value
    console.log(value)
    this.setState({ value: value })
  }

  handleSubmit = (event) => {
    const ENTER_KEYCODE = 13
    const keyCode = event.keyCode
    const query = this.state.value
    if (keyCode === ENTER_KEYCODE && query) {
      this.performSearch(ENTER_KEYCODE)
    }
  }

  performSearch = (query) => {
    search(query, (movies) => { this.setState({ data: movies.results }) })
  }

  render() {
    return (
      <div className="box-wrapper">
        <div className="box">
          <SearchBar
            performSearch={this.performSearch}
            value={this.state.value}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default App;
