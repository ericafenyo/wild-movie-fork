import React, { Component } from "react";
import ToolBar from "../Toolbar/ToolBar";
import {Redirect } from "react-router-dom";
import SearchList from "../SearchList/SearchList";
import { search } from '../../data/ApiEndpoint';
import "./SearchScreen.css";

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      isLoading: true,
      navigateHome: false
    }
  }

  componentDidMount() {
    search(this.props.location.state, result => 
      this.setState({ movieList: result, isLoading: false }));
  }

  navigateToHome = () => {
    this.setState({ navigateHome: true })
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading</div>
    } else if (this.state.navigateHome) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <ToolBar
         title="Movie deatails"
         leftIcon="arrow_back"
         rightIcon="bookmark"
       />
       <SearchList movieList={this.state.movieList}/>
      </div>
    );
  }
}

export default SearchScreen;