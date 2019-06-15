import React, { Fragment, useState, useEffect } from 'react';
import { MovieDetails, ToolBar } from 'components';
import { LoadingState } from 'view-states';
import './MovieInfo.css';
import { fetchMovieDetails } from '../../data/ApiEndpoint';

const MovieInfo = (props) => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovieDetails(props.location.state, (result) => {
      setMovie(result);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <LoadingState />;
  }

  return (
      <MovieDetails info={movie} />
  );
};

export default MovieInfo;
