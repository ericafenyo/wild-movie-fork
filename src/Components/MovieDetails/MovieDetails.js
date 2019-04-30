import React, { Component, Fragment } from 'react';
import { mapper } from "../../data/Mapper";
import Casting from "../Casting/Casting";
import StarRatings from "react-star-ratings";
import "./MovieDetails.css";
import playButton from './icon-play.svg';

const Detail = (props) => {
  return (
    <div className="movie-details  background-secondary">
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
          </div>
        </div>
      </div>
      <p className="body-text mx-3 d-md-none">{props.synopsis}</p>
      <Casting casts={props.cast} />
    </div>
  );
}

class MovieDetails extends Component {
  launchYoutube = (youtubeUrl) => {
    if (youtubeUrl) {
      window.open(youtubeUrl);
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
          genre={this.props.info.genres.shift().name}
          synopsis={this.props.info.overview}
          cast={this.props.info.credits.cast}
          launchYoutube={() => this.launchYoutube(mapper.parseYoutubeUrl(this.props.info.videos))}
        />
      </Fragment>
    );
  }
}

export default MovieDetails;