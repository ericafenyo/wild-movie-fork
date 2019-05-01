import React, { Component} from 'react';
import {mapper} from '../../data/Mapper';
import { Redirect } from "react-router-dom";
import './Slider.css';

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
    this.setState({posterClick: true,movieid:id});
  }

  render() {

    if (this.state.posterClick){
      return  <Redirect to={{ pathname: process.env.PUBLIC_URL+"/info", state: this.state.movieid }} /> 
    }

    return (
      <div className="slider-frame">
        <div className="slider-container">
           {this.props.data.map((item,index) =>  <Poster 
           key ={item.id} 
           imageUrl ={mapper.buildImageUrl(item.poster_path)}
           linkInfoFilm= {()=>this.handleClick(item.id)}
           />)}
        </div>
      </div>
    );
  }
}

export default Slider;