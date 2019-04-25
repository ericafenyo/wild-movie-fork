import React, { Component, Fragment } from 'react';
import { search, fetchMovieDetails, } from "../../data/ApiEndpoint";
import ToolBar from "../Toolbar/ToolBar"

import Casting from "../Casting/Casting"
import './MovieInfo.css'

import MovieDetails from '../MovieDetails/MovieDetails'

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      results: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    fetchMovieDetails(480414, res => {
      this.setState({ info: res, isLoading: false })
    })
  }

  render() {
    if (this.state.isLoading) {
      return <div>loading</div>
    }

    return (
      <div className="background-primary">
        <div className="mb-5">
          <ToolBar 
          title="Movie details"
          leftIcon="close"
          rightIcon = "favorite"
          onClickLeftIcon = {()=> console.log("Close")}
          onClickRightIcon = {()=> console.log("Favorite")}
          />
        </div>
        <MovieDetails info={this.state.info} />
      </div >
    )
  }
}

export default MovieInfo