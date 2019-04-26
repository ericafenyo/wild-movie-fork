import React, { Component } from "react";
import ToolBar from "../Toolbar/ToolBar";
import SearchList from "../SearchList/SearchList";
import "./SearchScreen.css";

class SearchScreen extends Component {
  constructor () {
    super ()
  }

  render() {
    return (
      <div>
        <ToolBar
         title="Movie deatails"
         leftIcon="arrow_back"
         rightIcon="bookmark"
         onClickLeftIcon={this.navigateToHome}
         onClickRightIcon={this.navigateToFavorites}
       />

       <SearchList />

      </div>
    )
  }
}

export default SearchScreen;