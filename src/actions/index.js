
import types from './types';
import { fetchMovieChart } from '../data/ApiEndpoint'

export const featuredMoviesLoading = () => ({
  type: types.FEATURED_MOVIES_LOADING
});

/**
 * 
 * @param {array} data 
 */
export const featuredMoviesSuccess = (data) => ({
  type: types.FEATURED_MOVIES_SUCCESS,
  payload: data
});

/**
 * 
 * @param {string} message A string describing the type of error.
 */
export const featuredMoviesFailure = (message) => ({
  type: types.FEATURED_MOVIES_FAILURE,
  message: message
});

/**
 * Dispatches actions to retrieve a list of top movies on TMDb.
 * @param {string} chart Allowed values: now_playing, popular, top_rated and upcoming.
 */
export const loadFeaturedMovies = (chart) =>
  (dispatch, getState) => {
    // Retrieve the current state from redux.
    const state = getState();
    /* If the `data` is an empty array, trigger a loading state until
     * we receive data from the api endpoint. This prevents unnecessary
     * re-rendering of react components.
     */
    if (!state.movies.featured.data.length) {
      dispatch(featuredMoviesLoading);
    }

    fetchMovieChart(chart, (result) => {
      dispatch(featuredMoviesSuccess(result));
    })
  }