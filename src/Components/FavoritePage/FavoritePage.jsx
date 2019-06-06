import React, { Fragment, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { mapper } from '../../data/Mapper';
import ToolBar from '../Toolbar/ToolBar';
import './FavoritePage.css';
import EmptyState from '../ViewStates/EmptyState';
import { getFavoriteMovies } from '../../data/ApiEndpoint';
import { useLocalStorage } from 'react-use';

const FavoritePage = () => {
  const [favoriteIds, setFavoriteIds] = useLocalStorage('favorites', []);
  const [movies, setMovies] = useState([]);
  const [movieId, setMoviesId] = useState(0);
  const [navigateToInfo, setNavigateToInfo] = useState(false);

  useEffect(() => {
    getFavoriteMovies(favoriteIds, (response) => {
      setMovies(response)
    });
  }, []);

  const removeMovie = (id) => {
    if (favoriteIds) {
      if (favoriteIds.includes(id)) {
        const idIndex = favoriteIds.indexOf(id);
        favoriteIds.splice(idIndex, 1);
        setFavoriteIds(favoriteIds);
        const newMovies = [...movies];
        const movieIndex = newMovies.findIndex(movie => movie.id === id);
        newMovies.splice(movieIndex, 1);
        setMovies(newMovies);
      }
    }
  }

  if (navigateToInfo) {
    return <Redirect push to={{ pathname: `${process.env.PUBLIC_URL}/info`, state: movieId }} />;
  }

  if (!movies.length) {
    return <EmptyState message = "No favorites saved" />;
  }

  const navigateTodetails = (id) => {
    setMoviesId(id);
    setNavigateToInfo(true);
  }

  return (
    <Fragment>
      <ToolBar
        title="Favorites"
        leftIcon="arrow_back"
      />
      <div className="row p-0 m-0 ">
        {movies.map(movie => (
          <div key={movie.id} className="iconName col-6 col-sm-4 col-md-3 col-lg-3  favorite-item m-0 p-0 ">
            <img
              className="w-100 h-100"
              src={mapper.buildImageUrl(movie.poster_path)}
              alt="Movie poster"
              onClick={() => navigateTodetails(movie.id)}
            />
            <div className="icon-favorite" onClick={() => removeMovie(movie.id)}>
              <i className="material-icons">favorite</i>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default FavoritePage;
