import types from '../actions/types'

const { FEATURED_MOVIES_LOADING, FEATURED_MOVIES_SUCCESS } = types;

const initialState = {
  featured: {
    isLoading: true,
    data: []
  }
}

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FEATURED_MOVIES_LOADING:
      return Object.assign({}, state, {
        featured: {
          isLoading: false,
          data: action.payload
        }
      });
    case FEATURED_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        featured: {
          isLoading: false,
          data: action.payload
        }
      });

    default:
      return state;
  }
}