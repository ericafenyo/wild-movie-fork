
import React from 'react'
import './SearchBar.css'



const SearchBar = ({ performSearch, handleChange, handleSubmit, value }) => (
  <div className="search-bar">
    <i className="material-icons">search</i>
    <input
      id="search-input"
      className="search-view"
      onChange={handleChange}
      onKeyUp = {handleSubmit}
      value={value}
      type="text"
      placeholder="Search movies" />
    <i className="material-icons icon-close">close</i>
  </div>
)



export default SearchBar