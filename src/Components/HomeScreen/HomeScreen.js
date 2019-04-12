import React, { Component } from "react";
import logo from "../Logo/logo.svg";
import "./HomeScreen.css";
import icon from "../Icon/icon-about.svg";

import Slider from "../Slider/Slider.js";
import SearchBar from "../SearchBar/SearchBar.js";

import { Button } from 'reactstrap';
import { Dropdown } from "../Dropdown/Dropdown";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active
    };
  }

  handleClick = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const navButton = this.state.active ? "btnActive" : "btn";
    return (
      <div className="homeScreen">
        <header className="homeScreenHeader">
          <img src={logo} className="logo" alt="logo" />
        </header>

        <div className="searchBar"><SearchBar /></div>
        <div className="dropdownSB"><Dropdown /></div>


        <div className="navBar">
          <div className="buttonBox">
            <Button onClick={this.handleClick} className={navButton}>BOX OFFICE</Button>
          </div>
          <div className="buttonSoon">
            <Button onClick={this.handleClick} className={navButton}>COMING SOON</Button>
          </div>
          <div className="buttonPop">
            <Button onClick={this.handleClick} className={navButton}>POPULAR</Button>
          </div>
        </div>

        <Slider />

        <div>
          <Button className="btnFavorite">MY FAVORITES</Button>{''}
        </div>

        <img src={icon} className="iconAbout" alt="about" />

      </div>
    );
  }
}

export default HomeScreen;