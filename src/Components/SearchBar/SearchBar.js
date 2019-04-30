import React from 'react';
import Autosuggest from 'react-autosuggest';
import './SearchBar.css';

const SearchBar = (props) => {
  const {
    suggestions,
    onSuggestionsFetchRequested,
    onSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion,
    onSuggestionSelected,
    inputProps
  } = props;
  
  return (
    <div className="search-bar" >
      <i className="material-icons" >search</i>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={onSuggestionSelected}
        inputProps={inputProps} />
    </div >
  );
}

export default SearchBar;