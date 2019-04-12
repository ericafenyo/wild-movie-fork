import React, { Component } from "react";
// import logo from "../Logo/logo.svg";
import "./HomeScreen.css";

import { Button } from 'reactstrap';
import SearchBar from "../SearchBar/SearchBar";


let btn = {
  color: "#657d95",
  backgroundColor: "#242e42",
  border: "none",
  borderRadius: 0
};

let btnActive = {
  color: "#242e42",
  backgroundColor: "#ffab4f",
  border: "none",
  borderRadius: 0
};

let btnFavorite = {
  color: "#657d95",
  backgroundColor: "#242e42",
  borderColor: "#ffab4f",
  borderRadius: 0
}

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
  }

  handleClick = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <div className="HomeScreen">
        <header className="HomeScreen-header">
          {/* <img src={logo} className="HomeScreen-logo" alt="logo" /> */}
        </header>
        <div className="searchBar">
          <SearchBar />
        </div>
        <div className="NavBar">
          <Button style={btn} onClick={this.handleClick}>BOX OFFICE</Button>{''}
          <Button style={btn} onClick={this.handleClick}>COMMING SOON</Button>{''}
          <Button style={btnActive} onClick={this.handleClick}>POPULAR</Button>{''}
        </div>
        
        <div>
          {/* <Carrousel /> */}
        </div>

        <div>
          <Button style={btnFavorite} onClick={this.handleClick}>MY FAVORITES</Button>{''}
        </div>
      </div>
    );
  }
}

export default HomeScreen;