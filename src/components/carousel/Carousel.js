import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Slider from 'react-slick';
import { mapper } from '../../data/Mapper';
import './Carousel.css';

const Poster = ({ imageUrl, linkInfoFilm }) => (
  <div
    className="slide"
    onClick={linkInfoFilm}
    onKeyDown={linkInfoFilm}
    role="link"
  >
    <img src={imageUrl} alt="movie poster" />
  </div>
);

Poster.prototype = {
  imageUrl: PropTypes.string,
  linkInfoFilm: PropTypes.string,
};

const Carousel = ({ data }) => {
  Carousel.prototype = {
    data: PropTypes.array,
  };

  const [movieId, setMovieId] = useState(0);
  const [posterClick, setPosterClick] = useState(false);

  const settings = {
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
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  const handleClick = (id) => {
    setMovieId(id);
    setPosterClick(true);
  };

  if (posterClick) {
    return <Redirect to={{ pathname: `${process.env.PUBLIC_URL}/info`, state: movieId }} />;
  }

  return (
    <div className="mt-3 mb-4">
      <Slider {...settings}>
        {data.map(item => (
          <Poster
            key={item.id}
            imageUrl={mapper.buildImageUrl(item.poster_path)}
            linkInfoFilm={() => handleClick(item.id)}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
