import React, { Fragment, useState } from 'react';
import StarRatings from 'react-star-ratings';
import './MovieDetails.css';
import ReactPlayer from 'react-player';
import { useLocalStorage } from 'react-use';
import { mapper } from 'mapper';
import { Casting } from 'components';

const Backdrop = ({ youtubeKey, backdrop }) => {
  const opts = {
    youtube: {
      playerVars: {
        showinfo: 0,
        modestbranding: 1,
        rel: 0,
      },
    },
  };

  return youtubeKey ?
    <ReactPlayer
      url={mapper.parseYoutubeUrlWithKey(youtubeKey)}
      config={opts}
      className="react-player"
      width="100%"
      height="100%"
    />
    :
    <div className="backdrop-wrapper react-player">
      <img className="backdrop" src={backdrop} alt="backdrop" />
    </div>
    ;
};

const Detail = (props) => {
  const [favorites, setFavorites] = useState([]);
  const {
    poster,
    title,
    rating,
    duration,
    backdrop,
    genre,
    videoKey,
    director,
    synopsis,
    cast,
    manageMovie,
  } = props;

  return (
    <div className="movie-details background-dark">
      <div className="container p-0">
        <div className="test-style">
          <div className="player-wrapper">
            <Backdrop youtubeKey={videoKey} backdrop={backdrop} />
          </div>
          <div>
            <div className="info-wrapper">

              <div className="poster wm-card">
                <img src={poster} alt="small poster" />
              </div>
              <div className="info">
                <div className="last-wrapper">
                  <p className="header-2">{title}</p>
                  <StarRatings
                    numberOfStars={5}
                    rating={rating}
                    starDimension="20px"
                    starSpacing="4px"
                    starRatedColor="#ffab4f"
                    startEmptyColor="#2f3b52"
                  />
                  <p className="info-color my-2">{`${duration} min | ${genre}`}</p>
                  <p className="info-color">{director}</p>
                  <p className="body-text d-none d-md-block">{synopsis}</p>
                  <div className="favorite-icon mt-3" onClick={() => { manageMovie(); setFavorites(!favorites); }}>
                    <i className={favorites ? 'icon-heart-fill favorite-active' : 'icon-heart favorite-inactive'} />
                  </div>
                </div>
              </div>
            </div>
            <p className="body-text mx-3 d-md-none">{synopsis}</p>
            <Casting casts={cast} />
          </div>
        </div>
      </div>
    </div>
  );
};

const MovieDetails = ({ info }) => {
  const [favoriteIds, setFavoriteIds] = useLocalStorage('favorites', []);
  const updateFavorites = (id) => {
    if (favoriteIds.includes(id)) {
      const index = favoriteIds.indexOf(id);
      const favoriteIdsCopy = [...favoriteIds];
      favoriteIdsCopy.splice(index, 1);
      setFavoriteIds(favoriteIdsCopy);
    } else {
      setFavoriteIds([...favoriteIds, id]);
    }
  };

  return (
    <Fragment>
      <Detail
        backdrop={mapper.buildImageUrl(info.backdrop_path)}
        poster={mapper.buildImageUrl(info.poster_path)}
        title={info.title}
        rating={info.vote_average / 2}
        duration={info.runtime}
        genre={info.genres.length ? info.genres[0].name : 'N/A'}
        manageMovie={() => updateFavorites(info.id)}
        synopsis={info.overview}
        cast={info.credits.cast}
        videoKey={mapper.getYoutubeKey(info.videos)}
      />
    </Fragment>
  );
};

export default MovieDetails;
