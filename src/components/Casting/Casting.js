import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Glide from '@glidejs/glide';
import { mapper } from 'mapper';
import '@glidejs/glide/dist/css/glide.core.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import './Casting.css';

const Cast = ({ imgUrl, character }) => (
  <div className="glide__slide">
    <div className="cast">
      <div className="profile">
        <img src={imgUrl} alt="cast profile" />
      </div>
      <p className="text-caption-light truncate">{character}</p>
    </div>
  </div>
);

Cast.prototype = {
  imgUrl: PropTypes.string,
  character: PropTypes.string,
};

const Casting = ({ casts }) => {
  const glide = React.createRef();
  const settings = {
    type: 'carousel',
    perView: 6,
    gap: 12,
    breakpoints: {
      577: {
        gap: 8,
        perView: 4,
      },
      768: {
        gap: 4,
        perView: 5,
      },
    },
  };

  Casting.prototype = {
    casts: PropTypes.array,
  };

  useEffect(() => {
    new Glide(glide.current, settings).mount();
  }, []);

  return (
    <div className="glide  mt-4 mb-4" ref={glide}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {
            casts.map(cast => (
              <Cast
                key={cast.id}
                imgUrl={mapper.buildImageUrl(cast.profile_path)}
                name={cast.name}
                character={cast.character}
              />
            ))
          }
        </ul>
      </div>
      <div className="glide__arrows d-none d-lg-block" data-glide-el="controls">
        <button type="button" className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
        <button type="button" className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
      </div>
    </div>
  );
};

export default Casting;
