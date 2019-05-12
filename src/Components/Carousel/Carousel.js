import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Glide from '@glidejs/glide';
import { mapper } from '../../data/Mapper';
import '@glidejs/glide/dist/css/glide.core.css';
import Slider from "react-slick";
import '@glidejs/glide/dist/css/glide.theme.min.css';
import './Carousel.css';

const Poster = ({ imageUrl, linkInfoFilm }) => {
  return (
    <div className="slide" onClick={linkInfoFilm}>
      <img src={imageUrl} alt="movie poster" />
    </div>
  );
}

class carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: 0,
      posterClick: false
    }

    this.settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        }
      ]
    }
  }

  handleClick = (id) => {
    this.setState({ posterClick: true, movieId: id });
  }

  render() {
    if (this.state.posterClick) {
      return <Redirect to={{ pathname: "/info", state: this.state.movieId }} />
    }

    return (
      <div className="mt-4 mb-4">
      <Slider {...this.settings} >
        {this.props.data.map((item) =>
          <Poster
            key={item.id}
            imageUrl={mapper.buildImageUrl(item.poster_path)}
            linkInfoFilm={() => this.handleClick(item.id)}
          />)}
      </Slider>
      </div>
    );
  }
}

export default carousel;