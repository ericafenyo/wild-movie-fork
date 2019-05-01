/**
 * @license
 * Copyright (C) 2019 Eric Afenyo
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file 
 * This file contains some helper functions for accessing movie data
 * from [The Movie Database (TMDb)]{@link https://www.themoviedb.org}.
 * It is recommended to parse the responses with mapper functions present in the [Mapper]{@link ./Mapper }
 * class.
 * 
 * To use these helper functions;
 * 1: Install axios using `yarn add axios` or `npm install axios`
 * 2: Import them into your javaScript file using `import { search, fetchMovieChart, fetchMovieDetails } from 'path` 
 * 3: Invoke the function of your choice and pass the required parameters.
 * Example `search("query", result => console.log(result))`
 * 
 * @see search
 * @see fetchMovieChart
 * @see fetchMovieDetails
 * @see {@link ./Repository }
 */

import axios from 'axios';

// API Related Information
const API_TOKEN = "64b4c85951711a3e428dc42847471e4c";
const BASE_URL = "https://api.themoviedb.org/3/";

/**
 * Performs a network request using the [axios api]{@link https://github.com/axios/axios}
 * @param {string} path The URL path to be appended to the base server URL.
 * @param {function} callback A Function to execute on the network response.
 * @param {object} params Optional: The URL parameters to be sent with the request.
 */
const _performNetworkCall = (path, callback, params = {}) => {
  // axios config options for making network requests
  const config = {
    baseURL: BASE_URL,
    params: {
      api_key: API_TOKEN,
      ...params
    }
  }
  // Perform a GET request wih the provided path and config option
  // TODO: Implement networkState to notify the "calling layer" about the state changes.
  axios.get(path, config)
    .then(response => {
      callback(response)
    }).catch(error => {
      console.log(error);
    })
}

/**
 * Search for closest matched movies by title.
 * 
 * @param {string} query The text query to search
 * @param {function} callback A Function to execute on the network response.
 * @param {number} page Optional: The page to query. Default value is 1
 */
export const search = (query, callback, page = 1) => {
  const path = "search/movie"
  const queryParams = {
    query: query,
    page: page
  }
  _performNetworkCall(path, response => {
    callback(response.data.results)
  }, queryParams)
}

/**
 * Get a list of top movies on TMDb
 * 
 * @param {string} chart Allowed values: now_playing, popular, top_rated and upcoming
 * @param {function} callback A Function to execute on the network response.
 * @param {number} page Optional: The page to query. Default value is 1
 */
export const fetchMovieChart = (chart, callback, page = 1) => {
  const path = `movie/${chart}`
  const queryParams = {
    page: page
  }
  _performNetworkCall(path, response => {
    callback(response.data.results)
  }, queryParams)
}

/**
 * Get the primary information about a particular movie.
 * 
 * @param {number} movieId TMDb movie id
 * @param {function} callback A Function to execute on the network response.
 */
export const fetchMovieDetails = (movieId, callback) => {
  const path = `movie/${movieId}`
  const PARAM_APPEND_TO_RESULT = "videos,credits"
  const queryParams = {
    append_to_response: PARAM_APPEND_TO_RESULT
  }
  _performNetworkCall(path, response => {
    callback(response.data);
  }, queryParams)
}

const deferredMovieDetails = async (movieId) => {
  const path = `movie/${movieId}`;
  const PARAM_APPEND_TO_RESULT = "videos,credits";
 
  const config = {
    baseURL: BASE_URL,
    params: {
      api_key: API_TOKEN,
      append_to_response: PARAM_APPEND_TO_RESULT
    }
  }
  let movie = await axios.get(path, config);
  return movie;
 }

 export const searchFull = async (query, callback, page = 1) => {
  const path = "search/movie";
 
  // axios config options for making network requests
  const config = {
    baseURL: BASE_URL,
    params: {
      api_key: API_TOKEN,
      query: query,
      page: page
    }
  }
 
  const movies = await axios.get(path, config);
  let promises = movies.data.results.map( async item => {
    let movie = await deferredMovieDetails(item.id);
    movie.data.isFav = false;
    let favSort = localStorage.getItem('favoris') || [];
    if(favSort.includes(movie.data.id)){
      movie.data.isFav = true;
    }
    return movie.data;
  })
    Promise.all(promises).then(res => callback(res));
 }