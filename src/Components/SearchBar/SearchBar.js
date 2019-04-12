import React from 'react'
import './SearchBar.css'

/** 
 * TODO: Checklist
 * Input loose focus only when empty
 * 
 * Display close button only when Input has content
 * 
 * Click on the the close icon to clear the input without loosing focus
 * 
 * Add a search button
 * 
 * add propsTypes
 */

const SearchBar = ({ handleChange, handleSubmit, value, clearValue }) => (
  <div className="search-bar">
    <i className="material-icons" >search</i>
    <input
      id="search-input"
      className="search-view"
      onChange={handleChange}
      onKeyUp={handleSubmit}
      value={value}
      type="text"
      autoComplete="off"
      placeholder="Search movies" />
    <i className="material-icons icon-close" onClick={clearValue} >close</i>
  </div>
)

export default SearchBar