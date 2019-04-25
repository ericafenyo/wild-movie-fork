import React, { Component } from 'react';
import "./MovieDetails.css";
import { mapper } from "../../data/Mapper"
import Casting from "../Casting/Casting"
import playButton from './icon-play.svg'
import StarRatings from "react-star-ratings"

const Detail = (props) => {
  return (
    <div className="movie-details background-primary">
      <div className="container p-0 wm-card background-secondary">
        <div className="backdrop-wrapper">
          <img className="backdrop" src={props.backdrop} />
          <div className="play-button">
            <img src={playButton} onClick={props.launchYoutube} />
          </div>
        </div>
        <div className="info-wrapper m-4">
          <div className="poster">
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
              <p className="text-body-">{props.synopsis}</p>
            </div>

          </div>
        </div>
        <Casting casts={props.cast} />
      </div>
    </div>
  );
}

class MovieDetails extends Component {

  launchYoutube = (youtubeUrl) => {
    if(youtubeUrl){
      window.open(youtubeUrl)
    }
  }
  render() {
    return (
      <div>
        <Detail
          backdrop={mapper.buildImageUrl(this.props.info.backdrop_path)}
          poster={mapper.buildImageUrl(this.props.info.poster_path)}
          title={this.props.info.title}
          rating={this.props.info.vote_average / 2}
          duration={this.props.info.runtime}
          genre={this.props.info.genres.shift().name}
          synopsis={this.props.info.overview}
          cast={this.props.info.credits.cast}
          launchYoutube={()=> this.launchYoutube("https://www.youtube.com/watch?v=Ct6BUPvE2sM")}
        />
      </div>
    )
  }
}

export default MovieDetails