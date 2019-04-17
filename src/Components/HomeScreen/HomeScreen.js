import React, { Component } from "react";
import logo from "../Logo/logo.svg";
import "./HomeScreen.css";

import Slider from "../Slider/Slider.js";
import SearchBar from "../SearchBar/SearchBar.js";
import Modal from "../Modal/Modal.js"

import { Button } from 'reactstrap';
import { Dropdown } from "../Dropdown/Dropdown";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "BOX OFFICE"      
    }
  }

  handleClick = (tab) => {
    this.setState({ active: tab});
  }

  render() {
    return (
      <div className="homeScreen">
        <header>
          <img src={logo} className="logo" alt="logo" />
        </header>
        <div className="searchBar">
          <SearchBar />
          <Dropdown />
        </div>
        <div>
          <Button onClick={() => this.handleClick("BOX OFFICE")} className={this.state.active === "BOX OFFICE" ? "btnActive" : "btn"} >BOX OFFICE</Button>
          <Button onClick={() => this.handleClick("COMING SOON")} className={this.state.active === "COMING SOON" ? "btnActive" : "btn"} >COMING SOON</Button>
          <Button onClick={() => this.handleClick("POPULAR")} className={this.state.active === "POPULAR" ? "btnActive" : "btn"} >POPULAR</Button>
        </div>
        <Slider />
        <Button className="btnFavorite">MY FAVORITES</Button>
        <Modal />
      </div>
    );
  }
}


export default HomeScreen;
