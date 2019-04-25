import React, { Component } from 'react';
import { Route, withRouter, Redirect } from "react-router-dom";
import "./App.css";
import "./Components/HomeScreen/HomeScreen.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from "./Components/HomeScreen/HomeScreen"
import SearchList from "./Components/SearchList/SearchList"
import { search } from './data/ApiEndpoint';
import FavoritePage from './Components/FavoritePage/FavoritePage';
import MovieInfo from './Components/MovieInfo/MovieInfo';

//Utility extension functions (Should be moved to a utility file)

/**
 * Check if a string value is empty or just whites paces
 */

/*eslint no-extend-native: ["error", { "exceptions": ["String"] }]*/
Object.defineProperty(String.prototype, "notEmpty", {
  value: function () {
    const regex = /\S/
    return regex.test(this)
  },
  writable: true,
  configurable: true
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      value: "",
      data: []
    };
  }

  performSearch = (query) => {
    search(query, (movies) => { this.setState({ data: movies.results, isLoading: false }) })
  }

  handleSubmit = (event) => {
    const ENTER_KEYCODE = 13
    const keyCode = event.keyCode
    const query = this.state.value
    if (query.notEmpty() && keyCode === ENTER_KEYCODE) {
      this.dispatchSearchRequest(query)
    }
  };

  dispatchSearchRequest = (query) => {
    this.performSearch(query)
    this.setState({ isLoading: false })
  }

  onTextChange = (event) => {
    //Retrieve the value from the search input
    const value = event.target.value
    // Update the state with the value 
    this.setState({ value: value })
  }

  render() {
    return (
      <div >
        <Route
          path="/" exact
          render={props => (
            !this.state.isLoading ?
              <Redirect to={{ pathname: "/movies", state: this.state.value }} /> :
              <HomeScreen
                value={this.state.value}
                handleSubmit={this.handleSubmit}
                handleChange={this.onTextChange}
                {...props}
              />)} />
        <Route
          exact path="/movies"
          component={SearchList}
        />

        <Route
          exact path="/favorites"
          component={FavoritePage}
        />

        <Route
          exact path="/info"
          component={MovieInfo}
        />

      </div>
    );
  }
}

export default withRouter(App)