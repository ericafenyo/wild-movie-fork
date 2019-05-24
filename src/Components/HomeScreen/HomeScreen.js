import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { search, fetchMovieChart } from '../../data/ApiEndpoint';
import Carousel from "../Carousel/Carousel";
import SearchBar from "../SearchBar/SearchBar";
import Modal from "../Modal/Modal";
import "./HomeScreen.css";

const filter = {
  nowPlaying: "now_playing",
  upcoming: "upcoming",
  popular: "popular"
}

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigateToInfo: false,
      navigateToList: false,
      suggestions: [],
      active: "BOX OFFICE",
      chartLoading: true,
      isLoading: true,
      value: "",
      history: [],
      topCharts: [],
      chart: "now_playing"
    }
  }

  handleSubmit = ({ key }) => {
    const ENTER_KEYCODE = "Enter";

    if (key === ENTER_KEYCODE) {
      this.setState({ navigateToList: true });
    }
  };

  handleClick = (tab) => {
    switch (tab) {
      case "BOX OFFICE":
        this.setState({ chart: filter.nowPlaying });
        break;

      case "COMING SOON":
        this.setState({ chart: filter.upcoming });
        break;

      case "POPULAR":
        this.setState({ chart: filter.popular });
        break;

      default:
    }

    this.setState({ active: tab });
  }

  onTextChange = (event) => {
    //Retrieve the value from the search input
    const value = event.target.value;
    // Update the state with the value 
    this.setState({ value: value });
  }

  dispatchSearchRequest = (query) => {
    this.performSearch(query);
  }

  performSearch = (query) => {
    search(query, (movies) => {
      this.setState({ suggestions: movies, isLoading: false });
    });
  }

  getCharts = () => {
    fetchMovieChart(this.state.chart, response => {
      this.setState({ topCharts: response, chartLoading: false });
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

  onSuggestionsFetchRequested = ({ value }) => {
    //Check if the value is empty
    if (/\S/.test(value)) {
      // Value not empty
      // Perform a search request
      this.dispatchSearchRequest(value);
    } else {
      // Value is empty
      // Empty the data and hide the suggestion box (Dropdown)
      this.setState({ suggestions: [] });
    }
  }

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [], hideContent: false });
  }

  getSuggestionValue = suggestion => suggestion.title;
  renderSuggestion = (suggestion) => {
    this.setState({ hideContent: true });
    return (
      <p className="suggestion-item">{suggestion.title}</p>
    );
  }

  onSuggestionSelected = (event, { suggestion }) => {
    event.preventDefault();
    this.setState({ movieId: suggestion.id, navigateToInfo: true });
  }

  render() {
    const inputProps = {
      placeholder: "Search movies",
      value: this.state.value,
      onChange: this.onTextChange,
      onKeyPress: this.handleSubmit,
      className: "w-100 px-3"
    }

    if (this.state.navigateToInfo) {
      return <Redirect push to={{ pathname: process.env.PUBLIC_URL + '/info', state: this.state.movieId }} />
    } else if (this.state.navigateToList) {
      return <Redirect push to={{ pathname: process.env.PUBLIC_URL + '/movies', state: this.state.value }} />
    }

    return (
      <div className="homeScreen">
        <div className="container">
          <SearchBar
            suggestions={this.state.suggestions.slice(0, 5)}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            onSuggestionSelected={this.onSuggestionSelected}
            alwaysRenderSuggestions={true}
            onSubmit={this.handleSubmit}
            inputProps={inputProps} />
          <div className="tab-layout">
            <button onClick={() => this.handleClick("BOX OFFICE")} className={"button " + (this.state.active === "BOX OFFICE" ? "ui-button-secondary" : "ui-button-primary")} >BOX OFFICE</button>
            <button onClick={() => this.handleClick("COMING SOON")} className={"button " + (this.state.active === "COMING SOON" ? "ui-button-secondary" : "ui-button-primary")} >COMING SOON</button>
            <button onClick={() => this.handleClick("POPULAR")} className={"button " + (this.state.active === "POPULAR" ? "ui-button-secondary" : "ui-button-primary")} >POPULAR</button>
          </div>
          {
            !this.state.chartLoading && <Carousel data={this.state.topCharts} />
          }
          <NavLink className="button ui-button-outline" exact to={process.env.PUBLIC_URL + "/favorites"}>MY FAVORITES</NavLink>
          <Modal />
        </div>
      </div>
    );
  }
}

export default HomeScreen;