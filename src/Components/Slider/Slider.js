import React from 'react';
import './Slider.css';

const images = [
  "https://vignette.wikia.nocookie.net/harrypotter/images/f/f1/Affichefilm_HP1.jpg/revision/latest/scale-to-width-down/250?cb=20120819063135&path-prefix=fr",
  "https://assets.e-cinema.com/UPLOADS/169796-collateral-affiche.jpg",
  "https://assets.e-cinema.com/UPLOADS/FC1F26-million-dollar-baby-affiche.jpg",
  "https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg",
  "https://assets.e-cinema.com/UPLOADS/A0C659-hannibal-affiche.jpg",
  "https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg",
  "https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg",
  "https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg",
  "https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg",
  "https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg",
  "https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg"
];

const Poster = ({ imageUrl }) => {
  return ( 
    <div
      className="slide" onClick={() => console.log("Poster click")}><img src={imageUrl} alt="movie poster"/>
    </div>
  );
}

const Slider = () => {
  return (
    <div className="slider-frame">
      <div className="slider-container">
        {/* <div class="btn prev"></div>
          <div class="btn next"></div> */}
         {images.map((image,index) =>  <Poster key ={index} imageUrl ={image}/>)}
      </div>
    </div>
  );
}

export default Slider;