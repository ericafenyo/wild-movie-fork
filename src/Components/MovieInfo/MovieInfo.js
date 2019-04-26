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
    fetchMovieDetails(383498, res => {
      this.setState({ info: res, isLoading: false })
    })
  }

  render() {
    if (this.state.isLoading) {
      return <div>loading</div>
    }

    return (
      <Fragment>
        <ToolBar
          title="Movie details"
          leftIcon="close"
          rightIcon="bookmark"
          onClickLeftIcon={() => console.log("Close")}
          onClickRightIcon={() => console.log("Favorite")}
        />
        <MovieDetails info={this.state.info} />
      </Fragment >
    )
  }
}

export default MovieInfo