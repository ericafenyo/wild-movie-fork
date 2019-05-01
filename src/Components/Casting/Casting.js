import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import { mapper } from "../../data/Mapper";
import '@glidejs/glide/dist/css/glide.core.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import "./Casting.css";

const Cast = (props) => {
  return (
    <div className="glide__slide">
      <div className="cast " onClick={props.launchDetails}>
        <div className="profile" >
          <img src={props.imgUrl} alt="cast profile" />
        </div>
        <p className="text-caption-light truncate">{props.character}</p>
      </div>
    </div>
  );
}

const Casting = ({ launchDetails, casts }) => {
  let glide = React.createRef()
  let settings = {
    type: "carousel",
    perView: 6,
    gap: 12,
    breakpoints: {
      577: {
        gap: 8,
        perView: 4
      },
      768: {
        gap: 4,
        perView: 5
      }
    }
  }

  useEffect(() => {
    new Glide(glide.current, settings).mount()
  }, []);

  return (
    <div className="glide  mt-4 mb-4" ref={glide}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {
            casts.map(cast =>
              <Cast
                key={cast.id}
                imgUrl={mapper.buildImageUrl(cast.profile_path)}
                name={cast.name}
                character={cast.character}
              />)
          }
        </ul>
      </div>
      <div className="glide__arrows d-none d-lg-block" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
      </div>
    </div>
  );
}

export default Casting;