import React, { Component } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { Dropdown, ResultItem } from '../Dropdown/Dropdown';
import { search, fetchMovieChart } from '../../data/ApiEndpoint';
import { Button } from 'reactstrap';
import Slider from "../Slider/Slider";
import SearchBar from "../SearchBar/SearchBar";
import Modal from "../Modal/Modal";
import logo from "../Logo/logo.svg";
import "./HomeScreen.css";

const filter = {
  nowPlaying: "now_playing",
  upcoming: "upcoming",
  popular: "popular",
}

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "BOX OFFICE",
      isLoading: true,
      value: "",
      data: [],
      history: [],
      topCharts: [],
      chart: "now_playing"
    }
  }

handleClick = (tab) => {
  switch (tab) {
    case "BOX OFFICE":
      this.setState({ chart: filter.nowPlaying })
      break;

    case "COMING SOON":
      this.setState({ chart: filter.upcoming })
      break;

    case "POPULAR":
      this.setState({ chart: filter.popular })
      break;

    default:
  }

  this.setState({ active: tab });
}

onTextChange = (event) => {
  //Retrieve the value from the search input
  const value = event.target.value;
  // Update the state with the value 
  this.setState({ value: value })
  //Check if the value is empty
  if (value.notEmpty()) {
    // Value not empty
    // Perform a search request
    this.dispatchSearchRequest(value);
  } else {
    // Value is empty
    // Empty the data and hide the suggession box (Dropdown)
    this.cleanData();
  }
}

dispatchSearchRequest = (query) => {
  this.performSearch(query);
}

performSearch = (query) => {
  search(query, (movies) => {
    this.setState({ data: movies, isLoading: false })
  });
}

cleanData = () => {
  this.setState({ data: [], isLoading: true });
}

onSuggessionItemClick = (event) => {
  const suggession = event.target.textContent;
  console.log(suggession);
  // TODO: use this for history logs
  this.setState({ value: suggession });
  this.cleanData();
}

clearValue = (event) => {
  this.setState({ value: "" });
  this.cleanData();
  console.log("suggession");
  return false;
}

getCharts = () => {
  fetchMovieChart(this.state.chart, response => {
    this.setState({ topCharts: response });
  });
}

componentDidMount() {
  this.getCharts();
}

componentDidUpdate(_, prevState) {
  if (prevState.chart !== this.state.chart) {
    this.getCharts();
  }
}

render() {
  return (
    <div className="homeScreen">
      <header>
        <img src={logo} className="logo" alt="logo" />
      </header>
      <div className="searchBar">
        <SearchBar
          performSearch={this.performSearch}
          value={this.props.value}
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
        />
        {this.state.isLoading ? "" :
          <Dropdown className="drop">
            {this.state.data.slice(0, 5).map((movie) =>
              <ResultItem
                key={movie.id}
                title={movie.title}
                handleClick={this.onSuggessionItemClick}
              />)}
          </Dropdown>
        }
      </div>
      <div>
        <Button onClick={() => this.handleClick("BOX OFFICE")} className={this.state.active === "BOX OFFICE" ? "btnActive" : "btn"} >BOX OFFICE</Button>
        <Button onClick={() => this.handleClick("COMING SOON")} className={this.state.active === "COMING SOON" ? "btnActive" : "btn"} >COMING SOON</Button>
        <Button onClick={() => this.handleClick("POPULAR")} className={this.state.active === "POPULAR" ? "btnActive" : "btn"} >POPULAR</Button>
      </div>
      <Slider data={this.state.topCharts} />
      <NavLink exact to="/favorites">
        <Button className="btnFavorite">MY FAVORITES</Button>
      </NavLink>
      <Modal className="icon-help" />
    </div>
  );
}
}

export default HomeScreen;