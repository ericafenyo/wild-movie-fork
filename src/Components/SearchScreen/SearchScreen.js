import React, { Component } from "react";
import ToolBar from "../Toolbar/ToolBar";

import SearchList from "../SearchList/SearchList";
import { searchFull } from '../../data/ApiEndpoint';
import "./SearchScreen.css";

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      isLoading: true,
      navigateInfo: false
    }
  }

  componentDidMount() {
    searchFull(this.props.location.state, result => 
      this.setState({ movieList: result, isLoading: false }));
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading</div>
    } 

    return (
      <div className="search-screen">
        <ToolBar
         title="Search results"
         leftIcon="arrow_back"
         rightIcon="bookmark"
       />
       <SearchList  movieList={this.state.movieList}/>
      </div>
    );
  }
}

export default SearchScreen;