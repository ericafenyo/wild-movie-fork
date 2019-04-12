// Variables utilisées pour stocker la clé API TMDB
const token = "64b4c85951711a3e428dc42847471e4c"
const baseUrl = "https://api.themoviedb.org/3/search/movie"

const performFetch = (url, callback) => {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      callback(json)
    });
}

/**
 * Search for closest matched movies using a provided query string and we provide. 
 * 
 * @param {*} query a text query to search
 * @param {*} page the page to query
 */
export const search = (query, callback, page = 1) => {
  const url = `${baseUrl}?api_key=${token}&query=${query}&page=${page}`
  performFetch(url, result => {
    callback(result)
  })
}
