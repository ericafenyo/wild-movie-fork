import React, { Component } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import { Dropdown, ResultItem } from './Components/Dropdown/Dropdown'

import { search } from './data/ApiEndpoint';


// ───── Utility extension functions (Should be movied to a utitility file) ────

/**
 * Check if a string value is empty or just whitespaces
 */

/*eslint no-extend-native: ["error", { "exceptions": ["String"] }]*/
String.prototype.notEmpty = function () {
  const regex = /\S/
  return regex.test(this)
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      value: "",
      data: [],
      history: []
    }
  }

  onTextChange = (event) => {
    //Retrieve the value from the search input
    const value = event.target.value
    // Update the state with the value 
    this.setState({ value: value })
    //Check if the value is empty
    if (value.notEmpty()) {
      // Value not empty
      // Perform a search request
      this.dispatchSearchRequest(value)
    } else {
      // Value is empty
      // Empty the data and hide the suggession box (Dropdown)
      this.cleanData()
    }
  }

  dispatchSearchRequest = (query) => {
    this.performSearch(query)
    this.setState({ isLoading: false })
  }

  performSearch = (query) => {
    search(query, (movies) => { this.setState({ data: movies.results, isLoading: false }) })
  }

  cleanData = () => {
    this.setState({ data: [], isLoading: true })
  }

  onSuggessionItemClick = (event) => {
    const suggession = event.target.textContent
    console.log(suggession);
    // TODO: use this for history logs
    this.setState({ value: suggession })
    this.cleanData()
  }

  handleSubmit = (event) => {

    // const ENTER_KEYCODE = 13
    // const keyCode = event.keyCode
    // const query = this.state.value
    // if (query && query.notEmpty()) {
    //   this.performSearch(query)
    // }
  }

  clearValue = (event) => {
    this.setState({ value: "" })
    this.cleanData()
    console.log("suggession");
    return false;

    // const ENTER_KEYCODE = 13
    // const keyCode = event.keyCode
    // const query = this.state.value
    // if (query && query.notEmpty()) {
    //   this.performSearch(query)
    // }
  }


  componentDidUpdate() {
    console.log(this.state.data)
  }

  render() {
    return (
      <div className="box-wrapper">
        <div className="box">
          <SearchBar
            performSearch={this.performSearch}
            value={this.state.value}
            handleChange={this.onTextChange}
            handleSubmit={this.handleSubmit}
            clearValue={this.clearValue}
          />

          {this.state.isLoading ? "" :
            <Dropdown>
              {this.state.data.slice(0, 5).map((movie) =>
                <ResultItem
                  key={movie.id}
                  title={movie.title}
                  handleClick={this.onSuggessionItemClick}
                />)}
            </Dropdown>
          }
        </div>
      </div>
    );
  }
}

export default App;
