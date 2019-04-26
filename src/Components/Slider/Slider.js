import React, { Component} from 'react';
import './Slider.css';
import {mapper} from '../../data/Mapper';
import { Redirect } from "react-router-dom";

const Poster = ({ imageUrl, linkInfoFilm }) => {
  return ( 
    <div 
      className="slide" onClick={linkInfoFilm}><img src={imageUrl} alt="movie poster"/>
    </div>
  );
}

class Slider extends Component {  
  constructor (props) {
    super (props);
    this.state = {
      movieid:0,
      posterClick: false
    }
  }

  handleClick = (id) => {
    this.setState({posterClick: true,movieid:id})
  }

  render() {
    if (this.state.posterClick){
   return  <Redirect to={{ pathname: "/info", state: this.state.movieid }} /> 
    }

    console.log(this.state.movieid);
    

    return (
      

      <div className="slider-frame">
        <div className="slider-container">
        {/* <div class="btn prev">
        <i class="material-icons">keyboard_arrow_left</i>
        </div> */} 
           {this.props.data.map((item,index) =>  <Poster 
           key ={item.id} 
           imageUrl ={mapper.buildImageUrl(item.poster_path)}
           linkInfoFilm= {()=>this.handleClick(item.id)}
           />)}
        </div>
        {/* <div class="btn next">
        <i class="material-icons">keyboard_arrow_right</i>
        </div> */}
      </div>
    );
  }
}

export default Slider;