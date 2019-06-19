import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, SearchScreen, MovieInfo, FavoritePage } from 'components';
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
      <Route path={`${process.env.PUBLIC_URL}/movies`} component={SearchScreen} />
      <Route path={`${process.env.PUBLIC_URL}/favorites`} component={FavoritePage} />
      <Route path={`${process.env.PUBLIC_URL}/info`} component={MovieInfo} />
    </Switch>
  </Router>
);

export default App;
