import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { mapper } from '../../data/Mapper';
import "./SearchList.css";

const SearchItem = (props) => {
  return (
    <div>
      <Card className="card-search-list rounded-0">
        <CardImg top height="100%" src={props.imgUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle onClick={props.handleClick} className="card-title-date">{props.title} <span className="span-search-list">({props.date.split("-").shift()})</span></CardTitle>
          <div className="card-rating">
            <i className="material-icons star-rating">star_rate</i>
            <span className="rate"> {props.rating}</span>
          </div>
          <CardText className="card-spec m-0 p-0">Director: {props.director}</CardText>
          <CardText className="card-duration p-0">{props.duration} min | {props.genre} </CardText>
          <div className="favorite-border" onClick={props.removeFavorite}>
            <i className="material-icons favorite-clicked">favorite</i>
          </div>
          {/* <SearchListExpanded /> */}
        </CardBody>
      </Card>
    </div>
  );
}




class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: 0,
      navigateInfo: false
    }
  }

  manageMovie = (id) => {
    if (JSON.parse(localStorage.getItem('favoris'))) {
      if (JSON.parse(localStorage.getItem('favoris').includes(id))) {
        let favoris = JSON.parse(localStorage.getItem('favoris'));
        let index = favoris.indexOf(id);
        favoris.splice(index, 1);
        localStorage.setItem('favoris', JSON.stringify(favoris));
      } else {
        localStorage.setItem('favoris', JSON.stringify([...JSON.parse(localStorage.getItem('favoris')), id]))
      }
      // remove
    } else {
      localStorage.setItem('favoris', JSON.stringify([...JSON.parse(localStorage.getItem('favoris')) || [], id]))
    }
  }


  removeFavorite = (id) => {
    console.log("remove" + id);

  }
  navigateToInfo = (id) => {
    this.setState({ movieId: id, navigateInfo: true })
  }

  render() {
    if (this.state.navigateInfo) {
      return <Redirect to={{ pathname: '/info', state: this.state.movieId }} />
    }
    return (
      <div >
        {this.props.movieList.map(item => <SearchItem
          key={item.id}
          title={item.title}
          handleClick={() => this.navigateToInfo(item.id)}
          rating={item.vote_average / 2}
          director={mapper.parseDirector(item.credits.crew).name}
          date={item.release_date}
          duration={item.runtime}
          genre={item.genres.shift().name}
          imgUrl={mapper.buildImageUrl(item.poster_path)}
          removeFavorite={() => this.manageMovie(item.id)}
        />)}
      </div>
    );
  }
}

export default SearchList;


