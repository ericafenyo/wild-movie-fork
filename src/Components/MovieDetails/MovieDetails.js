import React, { Component, Fragment, useState, useRef } from 'react';
import { mapper } from "../../data/Mapper";
import Casting from "../Casting/Casting";
import StarRatings from "react-star-ratings";
import "./MovieDetails.css";
import ReactPlayer from 'react-player'

const Detail = (props) => {
  const { clicked, poster, title, rating, youtubeUrl } = props;
  // Hook variable
  const [favorites, setFavorites] = useState(clicked);
  const opts = {
    youtube: {
      playerVars: {
        showinfo: 0,
        modestbranding: 1,
        rel: 0
      }
    }
  }

  const Backdrop = ({ videoKey }) => {
    console.log(videoKey)
    return (videoKey ?
      <ReactPlayer
        url={mapper.parseYoutubeUrlWithKey(videoKey)}
        config={opts}
        className='react-player'
        width='100%'
        height="100%"
      /> :
      <div className="backdrop-wrapper react-player">
        <img className="backdrop" src={props.backdrop} alt="backdrop" />
      </div>)
  }

  return (
    <div className="movie-details vh-100 background-secondary">
      <div className='player-wrapper'>
        <Backdrop videoKey = {props.videoKey}/>
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
              <p className="info-color my-2">{props.duration + " min | " + props.genre}</p>
              <p className="info-color">{props.director}</p>
              <p className="body-text d-none d-md-block">{props.synopsis}</p>
              <div className="favorite-icon mt-3" onClick={() => { props.manageMovie(); setFavorites(!favorites) }}>
                <i className={favorites ? "material-icons favorite-active" : "material-icons favorite-inactive"} >favorite</i>
              </div>
            </div>
          </div>

        </div>
        <p className="body-text mx-3 d-md-none">{props.synopsis}</p>
        <Casting casts={props.cast} />
      </div>
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

  componentDidMount() {
    try {
      console.log(document.querySelector('iframe'));
    } catch (error) {

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
          videoKey={mapper.getYoutubeKey(this.props.info.videos)}
        />
      </Fragment>
    );
  }
}

export default MovieDetails;