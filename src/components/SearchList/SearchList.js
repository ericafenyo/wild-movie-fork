import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody, CardTitle,
} from 'reactstrap';
import { useLocalStorage } from 'react-use';
import { mapper } from 'mapper';
import './SearchList.css';

const SearchItem = (props) => {
  const {
    clicked,
    handleClick,
    title,
    date,
    rating,
    director,
    duration,
    genre,
    imgUrl,
    removeFavorite,
  } = props;
  const [favorites, setFavorites] = useState(clicked);

  return (
    <div>
      <Card className="card-search-list rounded-0">
        <CardImg top height="100%" src={imgUrl} alt="Card image cap" />
        <CardBody>
          <div className="body-first-line">
            <CardTitle onClick={handleClick} className="card-title-date">
              {title}
              <span className="span-search-list">{` (${date.split('-')[0]})`}</span>
            </CardTitle>
          </div>
          <div className="card-rating">
            <i className="material-icons star-rating">star_rate</i>
            <span className="rate">{rating}</span>
          </div>
          <CardText className="card-spec m-0 p-0">
            Director:
            {' '}
            {director}
          </CardText>
          <CardText className="card-duration p-0">
            {duration}
            {' '}
            min |
            {' '}
            {genre}
            {' '}
          </CardText>
          <div className="favorite-border" onClick={() => { removeFavorite(); setFavorites(!favorites); }}>
            <i className={favorites ? 'material-icons favorite-clicked' : 'material-icons favorite-null'}>favorite</i>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

const SearchList = ({ movies }) => {
  const [favoriteIds, setFavoriteIds] = useLocalStorage('favorites', []);
  const [movieId, setMovieId] = useState(0);
  const [navigateInfo, setNavigateInfo] = useState(false);

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

  const navigateToInfo = (id) => {
    setMovieId(id);
    setNavigateInfo(true);
  };

  if (navigateInfo) {
    return <Redirect to={{ pathname: `${process.env.PUBLIC_URL}/info`, state: movieId }} />;
  }

  return (
    <div>
      {movies.map(item => (
        <SearchItem
          key={item.id}
          title={item.title}
          handleClick={() => navigateToInfo(item.id)}
          rating={item.vote_average / 2}
          director={mapper.parseDirector(item.credits.crew).name}
          date={item.release_date}
          duration={item.runtime}
          genre={item.genres.length ? item.genres[0].name : ''}
          imgUrl={mapper.buildImageUrl(item.poster_path)}
          removeFavorite={() => updateFavorites(item.id)}
          clicked={item.isFav}
        />
      ))}
    </div>
  );
};

export default SearchList;
