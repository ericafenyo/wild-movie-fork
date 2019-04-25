import React, { useEffect } from 'react';
import "./Casting.css";
import { mapper } from "../../data/Mapper"
import '@glidejs/glide/dist/css/glide.core.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'
import Glide from '@glidejs/glide'

const Cast = (props) => {
  return (
    <div className="glide__slide">
      <div className="cast " onClick={props.launchDetails}>
        <div className="profile" >
          <img src={props.imgUrl} alt="cast profile" />
        </div>
        <p className="textcolor">{props.character}</p>
        <p className="textcolor">{props.name} </p>
      </div>
    </div>
  );
}

const Casting = ({ launchDetails, casts }) => {
  let glide = React.createRef()
  let settings = {
    type: "carousel",
    perView: 4,
    gap: 8,
    peek: {
      before: 24,
      after: 24
    },
    breakpoints: {
      768: {
        perView: 3
      },
      992: {
        perView: 4
      },

      1200: {
        perView: 5
      }
    }
  }

  useEffect(() => {
    new Glide(glide.current, settings).mount()
  }, [])

  return (
    <div class="glide" ref={glide}>
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          {
            casts.map(cast =>
              <Cast
                imgUrl={mapper.buildImageUrl(cast.profile_path)}
                name={cast.name}
                character={cast.character}
              />)
          }
        </ul>
      </div>
    </div>
  );
};

export default Casting;