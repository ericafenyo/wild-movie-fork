import React, { Component, Fragment, useState } from 'react';
import { mapper } from "../../data/Mapper";
import Casting from "../Casting/Casting";
import StarRatings from "react-star-ratings";
import "./MovieDetails.css";
import playButton from './icon-play.svg';

const Detail = (props) => {
  // Hook variable
  const [favList, setFavList] = useState(props.clicked);

  return (
    <div className="movie-details vh-100  background-secondary">
      <div className="backdrop-wrapper">
        <img className="backdrop" src={props.backdrop} alt="backdrop" />
        <div className="play-button">
          <img src={playButton} onClick={props.launchYoutube} alt="play button" />
        </div>
      </div>
      <div className="info-wrapper">
        <div className="poster wm-card">
          <img src={props.poster} alt="small poster" />
        </div>
        <div className="info">
          <div className="last-wrapper">
            <p className="text-header">{props.title}</p>
            <StarRatings
              numberOfStars={5}
              rating={props.rating}
              starDimension="20px"
              starSpacing="4px"
              starRatedColor="#ffab4f"
              startEmptyColor="#2f3b52"
            />
            <p className="info-color">{props.duration + " min | " + props.genre}</p>
            <p className="info-color">{props.director}</p>
            <p className="text-body- d-none d-md-block">{props.synopsis}</p>
            <div className="" onClick={() => { props.manageMovie(); setFavList(!favList) }}>
              <i className={favList ? "material-icons favorite-clicked" : "material-icons favorite-null"} >favorite</i>
            </div>
          </div>
        </div>

      </div>
      <p className="body-text mx-3 d-md-none">{props.synopsis}</p>
      <Casting casts={props.cast} />
    </div>
  );
}

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      heart: false
    }
  }

  launchYoutube = (youtubeUrl) => {
    if (youtubeUrl) {
      window.open(youtubeUrl);
    }
  }

  manageMovie = (id) => {
    if (JSON.parse(localStorage.getItem('favoris'))) {
      if (JSON.parse(localStorage.getItem('favoris').includes(id))) {
        this.setState({ heart: true });
        let favoris = JSON.parse(localStorage.getItem('favoris'));
        let index = favoris.indexOf(id);
        favoris.splice(index, 1);
        localStorage.setItem('favoris', JSON.stringify(favoris));
      } else {
        this.setState({ heart: false });
        localStorage.setItem('favoris', JSON.stringify([...JSON.parse(localStorage.getItem('favoris')), id]))
      }
    }
  }

  render() {
    return (
      <Fragment>
        <Detail
          backdrop={mapper.buildImageUrl(this.props.info.backdrop_path)}
          poster={mapper.buildImageUrl(this.props.info.poster_path)}
          title={this.props.info.title}
          rating={this.props.info.vote_average / 2}
          duration={this.props.info.runtime}
          genre={this.props.info.genres.length ? this.props.info.genres[0].name : "N/A"}
          manageMovie={() => this.manageMovie(this.props.info.id)}
          synopsis={this.props.info.overview}
          cast={this.props.info.credits.cast}
          launchYoutube={() => this.launchYoutube(mapper.parseYoutubeUrl(this.props.info.videos))}
        />
      </Fragment>
    );
  }
}

export default MovieDetails;