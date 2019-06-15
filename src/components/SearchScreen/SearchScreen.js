import React, { useState, useEffect } from 'react';
import { LoadingState } from 'view-states';
import ToolBar from '../Toolbar/ToolBar';

import SearchList from '../SearchList/SearchList';
import { searchFull } from '../../data/ApiEndpoint';
import './SearchScreen.css';

const SearchScreen = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    searchFull(props.location.state, (result) => {
      setMovies(result);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <div className="search-screen">
      <ToolBar
        title="Search results"
        leftIcon="arrow_back"
        rightIcon="bookmark"
      />
      <SearchList movies={movies} />
    </div>
  );
};

export default SearchScreen;
