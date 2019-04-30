import React, { Component, Fragment } from 'react';
import { mapper } from "../../data/Mapper";
import ToolBar from '../Toolbar/ToolBar';
import './FavoritePage.css';
import axios from 'axios';

class FavoritePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true
    }
  }

  componentDidMount() {
    let favorisId = JSON.parse(localStorage.getItem('favoris')) || [164825];
    favorisId.forEach((favori) => {
      axios.get(`https://api.themoviedb.org/3/movie/${favori}?api_key=64b4c85951711a3e428dc42847471e4c&language=en-US`)
        .then((result) => {
          this.setState({ movies: [...this.state.movies, result.data] });
        });
    });
  }

  manageMovie = (id) => {
    if (JSON.parse(localStorage.getItem('favoris'))) {
      if (JSON.parse(localStorage.getItem('favoris').includes(id))) {
        let favoris = JSON.parse(localStorage.getItem('favoris'));
        let index = favoris.indexOf(id);
        favoris.splice(index, 1);
        this.setState({ movies: favoris });
        localStorage.setItem('favoris', JSON.stringify(favoris));
        let favtemp = this.state.movies;
        let indexTemp = favtemp.findIndex((movie) => {
          return movie.id === id;
        })
        favtemp.splice(indexTemp, 1);
        this.setState({ movies: favtemp });
      } else {
        localStorage.setItem('favoris', JSON.stringify([...JSON.parse(localStorage.getItem('favoris')), id]));
      }
    } else {
      localStorage.setItem('favoris', JSON.stringify([...JSON.parse(localStorage.getItem('favoris')) || [164825], id]));
    }
  }
  render() {
    return (
      <Fragment>
        <ToolBar
          title="Favorites"
          leftIcon="arrow_back"
        />
        <div className="row p-0 m-0">
          {
            this.state.movies.map((movie) =>
              (
                < div key={movie.id} className="iconName col-6 col-sm-4 col-md-3 col-lg-3  favorite-item m-0 p-0 ">
                  <div>
                    <img
                      className="sizeImg img-fluid"
                      src={mapper.buildImageUrl(movie.poster_path)}
                      alt="poster_path" />
                    <div className="icon-favorite" onClick={() => this.manageMovie(movie.id)}>
                      <i className="material-icons" >favorite</i>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </Fragment>
    );
  }
}

export default FavoritePage;