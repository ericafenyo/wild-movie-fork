import React, { Component } from "react";
import logo from "../Logo/logo.svg";
import "./HomeScreen.css";
import icon from "../Icon/icon-about.svg";

import Slider from "./Slider";
import SearchBar from "../SearchBar/SearchBar.js";
import Dropdown from "../Dropdown/Dropdown.js";
import { Button } from 'reactstrap';


// let btn = {
//   color: "#657d95",
//   backgroundColor: "#242e42",
//   border: "none",
//   borderRadius: 0
// };

// let btnActive = {
//   color: "#242e42",
//   backgroundColor: "#ffab4f",
//   border: "none",
//   borderRadius: 0
// };

// let btnFavorite = {
//   color: "#657d95",
//   backgroundColor: "#242e42",
//   borderColor: "#ffab4f",
//   borderRadius: 0
// }

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
            <Button onClick={this.handleClick} className={navButton}>POPULAR</Button>{''}
          </div>
        </div>

        <div className="slider"><Slider /></div>

        <div>
          <Button className="btnFavorite">MY FAVORITES</Button>{''}
        </div>

        <img src={icon} className="iconAbout" alt="about" />

      </div>
    );
  }
}

export default HomeScreen;