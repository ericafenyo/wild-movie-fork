import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen/HomeScreen';
import FavoritePage from './components/FavoritePage/FavoritePage';
import MovieInfo from './components/MovieInfo/MovieInfo';
import SearchScreen from './components/SearchScreen/SearchScreen';
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/`} exact component={HomeScreen} />
      <Route path={`${process.env.PUBLIC_URL}/movies`} component={SearchScreen} />
      <Route path={`${process.env.PUBLIC_URL}/favorites`} component={FavoritePage} />
      <Route path={`${process.env.PUBLIC_URL}/info`} component={MovieInfo} />
    </Switch>
  </Router>
);

export default App;
