import React, { Component } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import { search } from './data/ApiEndpoint';
import { Dropdown, ResultItem, HistoryItem } from './Components/Dropdown/Dropdown'

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
    this.setState({ value: value })

    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 2000)

    this.handleSubmit(event)
  }

  handleSubmit = (event) => {
    // const ENTER_KEYCODE = 13
    // const keyCode = event.keyCode
    const query = this.state.value
    console.log(event.target)
    if (query) {
      this.performSearch(query)
    }
  }

  performSearch = (query) => {

    search(query, (movies) => { this.setState({ data: movies.results }) })

    this.setState({ isLoading: false })
  }

  displayDropdown = () => !this.state.value ? { opacity: 0 } : { opacity: 1 }

  render() {
    console.log(this.state.data)
    return (
      <div className="box-wrapper">
        <div className="box">
          <SearchBar
            performSearch={this.performSearch}
            value={this.state.value}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />

          {this.state.isLoading ? "" :
            <Dropdown style={this.displayDropdown()} >
              {this.state.data.slice(0, 5).map((movie, index) => <ResultItem title={movie.title} />)}
            </Dropdown>
          }
        </div>
      </div>
    );
  }
}

export default App;
