import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { search, fetchMovieChart } from '../../data/ApiEndpoint';
import Carousel from '../carousel/';
import SearchBar from '../SearchBar/SearchBar';
import Modal from '../Modal/Modal';
import './HomeScreen.css';

const HomeScreen = () => {
  const filter = {
    nowPlaying: 'now_playing',
    upcoming: 'upcoming',
    popular: 'popular',
  };

  const [navigateToInfo, setNavigateToInfo] = useState(false);
  const [navigateToList, setsNavigateToList] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [active, setActive] = useState('BOX OFFICE');
  const [isLoading, setLoading] = useState(true);
  const [value, setValue] = useState('');
  const [topCharts, setTopCharts] = useState([]);
  const [chart, setChart] = useState(filter.nowPlaying);
  const [movieId, setMovieId] = useState(0);

  const handleSubmit = ({ key }) => {
    const ENTER_KEYCODE = 'Enter';
    if (key === ENTER_KEYCODE) {
      setsNavigateToList(true);
    }
  };

  const handleClick = (tab) => {
    let trackingChart = '';
    switch (tab) {
      case 'BOX OFFICE':
        trackingChart = filter.nowPlaying;
        break;

      case 'COMING SOON':
        trackingChart = filter.upcoming;
        break;

      case 'POPULAR':
        trackingChart = filter.popular;
        break;
      default:
        trackingChart = filter.popular;
    }

    setChart(trackingChart);
    setActive(tab);
  };

  const onTextChange = ({ target }) => {
    // Update the state with the value
    setValue(target.value);
  };

  const performSearch = (query) => {
    search(query, (movies) => {
      setSuggestions(movies);
      setLoading(false);
    });
  };

  const dispatchSearchRequest = (query) => {
    performSearch(query);
  };


  const getCharts = () => {
    fetchMovieChart(chart, (response) => {
      setTopCharts(response);
      setLoading(false);
    });
  };

  useEffect(() => {
    getCharts();
  }, [chart]);


  const onSuggestionsFetchRequested = ({ value }) => {
    // Check if the value is empty
    if (/\S/.test(value)) {
      // Value not empty
      // Perform a search request
      dispatchSearchRequest(value);
    } else {
      // Value is empty
      // Empty the data and hide the suggestion box (Dropdown)
      setSuggestions([]);
    }
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = suggestion => suggestion.title;

  const renderSuggestion = suggestion => (
    <p className="suggestion-item">{suggestion.title}</p>
  );

  const onSuggestionSelected = (event, { suggestion }) => {
    event.preventDefault();
    setMovieId(suggestion.id);
    setNavigateToInfo(true);
  };

  const inputProps = {
    placeholder: 'Search movies',
    value,
    onChange: onTextChange,
    onKeyPress: handleSubmit,
    className: 'w-100 px-3',
  };

  if (navigateToInfo) {
    return <Redirect push to={{ pathname: `${process.env.PUBLIC_URL}/info`, state: movieId }} />;
  } if (navigateToList) {
    return <Redirect push to={{ pathname: `${process.env.PUBLIC_URL}/movies`, state: value }} />;
  }

  return (
    <div className="homeScreen">
      <div className="container">
        <SearchBar
          suggestions={suggestions.slice(0, 5)}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={onSuggestionSelected}
          alwaysRenderSuggestions
          onSubmit={handleSubmit}
          inputProps={inputProps}
        />
        <div className="tab-layout">
          <button type="button" onClick={() => handleClick('BOX OFFICE')} className={`button ${active === 'BOX OFFICE' ? 'ui-button-secondary' : 'ui-button-primary'}`}>BOX OFFICE</button>
          <button type="button" onClick={() => handleClick('COMING SOON')} className={`button ${active === 'COMING SOON' ? 'ui-button-secondary' : 'ui-button-primary'}`}>COMING SOON</button>
          <button type="button" onClick={() => handleClick('POPULAR')} className={`button ${active === 'POPULAR' ? 'ui-button-secondary' : 'ui-button-primary'}`}>POPULAR</button>
        </div>
        {
          !isLoading && <Carousel data={topCharts} />
        }
        <NavLink className="button ui-button-outline" exact to={`${process.env.PUBLIC_URL}/favorites`}>MY FAVORITES</NavLink>
        <Modal />
      </div>
    </div>
  );
};

export default HomeScreen;
