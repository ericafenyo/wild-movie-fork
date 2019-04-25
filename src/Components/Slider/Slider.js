import React from 'react';
import './Slider.css';
import {mapper} from '../../data/Mapper'

const Poster = ({ imageUrl }) => {
  return ( 
    <div
      className="slide" onClick={() => console.log("Poster click")}><img src={imageUrl} alt="movie poster"/>
    </div>
  );
}

const Slider = ({data}) => {    
  return (
    <div className="slider-frame">
      <div className="slider-container">
      <div class="btn prev">
      <i class="material-icons">keyboard_arrow_left</i>
      </div>
         {data.map((item,index) =>  <Poster key ={item.id} imageUrl ={mapper.buildImageUrl(item.poster_path)}/>)}
      </div>
      <div class="btn next">
      <i class="material-icons">keyboard_arrow_right</i>
      </div>
    </div>
  );
}

export default Slider;