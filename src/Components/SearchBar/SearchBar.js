import React from 'react'
import './SearchBar.css'

const SearchBar = () => (
  <div className="search-bar">
    <i class="material-icons">search</i>
    <input className="search-view" type="text" placeholder="Search movies" />
    <i class="material-icons icon-close">close</i>
  </div>
)

export default SearchBar