import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import HomeScreen from "./Components/HomeScreen/HomeScreen"
import FavoritePage from './Components/FavoritePage/FavoritePage';
import MovieInfo from './Components/MovieInfo/MovieInfo';
import SearchScreen from './Components/SearchScreen/SearchScreen';
import "./App.css";
import "./Components/HomeScreen/HomeScreen.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={process.env.PUBLIC_URL+'/'} exact component={HomeScreen} />
        <Route path={process.env.PUBLIC_URL+'/movies'} component={SearchScreen} />
        <Route path={process.env.PUBLIC_URL+'/favorites'} component={FavoritePage} />
        <Route path={process.env.PUBLIC_URL+'/info'} component={MovieInfo} />
      </Switch>
    );
  }
}

export default App;