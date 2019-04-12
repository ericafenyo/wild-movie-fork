import React, { Component } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import { search } from './data/ApiEndpoint';
import { Dropdown, ResultItem, HistoryItem} from './Components/Dropdown/Dropdown'
import './App.css';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      value: "",
      data: [],
 
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
      this.setState({ isLoading: false })
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
         {this.state.isLoading ?  "" :
            <Dropdown >
              {this.state.data.slice(0, 5).map((item, index) =>
                <div key={index}><HistoryItem title={item.title} /></div>
              )}
            </Dropdown>
          }
        </div>
        </div>
  )}
  
}

export default App;