import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody, CardTitle,
} from 'reactstrap';
import { mapper } from '../../data/Mapper';
import './SearchList.css';
import { useLocalStorage } from 'react-use';

const SearchItem = (props) => {
  const [favorites, setFavorites] = useState(props.clicked);

  return (
    <div>
      <Card className="card-search-list rounded-0">
        <CardImg top height="100%" src={props.imgUrl} alt="Card image cap" />
        <CardBody>
          <div className="body-first-line">
            <CardTitle onClick={props.handleClick} className="card-title-date">
              {props.title}
              {' '}
              <span className="span-search-list">
                {' '}
(
                {props.date.split('-').shift()}
)
              </span>
            </CardTitle>
          </div>
          <div className="card-rating">
            <i className="material-icons star-rating">star_rate</i>
            <span className="rate">{props.rating}</span>
          </div>
          <CardText className="card-spec m-0 p-0">
Director:
            {props.director}
          </CardText>
          <CardText className="card-duration p-0">
            {props.duration}
            {' '}
min |
            {' '}
            {props.genre}
            {' '}
          </CardText>
          <div className="favorite-border" onClick={() => { props.removeFavorite(); setFavorites(!favorites); }}>
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
      console.log(favoriteIdsCopy);
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
