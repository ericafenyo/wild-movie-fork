import React, { Component } from 'react';
import { Route, withRouter, Redirect } from "react-router-dom";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import { search } from '../../data/ApiEndpoint';
import { mapper } from '../../data/Mapper';
import "./SearchList.css";
import "../../App.css";
import { strict } from 'assert';
import ToolBar from '../Toolbar/ToolBar'


const SearchItem = (props) => {
  return (<div>
    <Card>
      <CardImg top height="100%" src={props.imgUrl} alt="Card image cap" />
      <CardBody>
        <div className="body-first-line">
          <CardTitle className="card-title-date">{props.title} <span> ({props.date})</span>
          </CardTitle>
          <i className="material-icons chevron-closed"> keyboard_arrow_down</i>
          {/* <i class="material-icons chevron-opened">keyboard_arrow_up</i> */}
        </div>
        <CardText className="card-rating">
          <i className="material-icons star-rating">star_rate</i>
          {props.rating}
        </CardText>
        <CardText className="card-spec">{props.director}</CardText>
        <CardText className="card-duration">{props.duration}</CardText>
        <CardText className="favorite-border">
          <i className="material-icons favorite-clicked">favorite</i></CardText>
        {/* <SearchListExpanded /> */}
      </CardBody>
    </Card>

  </div >
  );
};

const imageNull = (path) => {
  if (!path) {
    return "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/No_picture_available.png/401px-No_picture_available.png"
  }

  return mapper.buildImageUrl(path)
}

// const releaseYear = (duration) => {
//   str.slice(0, 4) {
//     return
//   }
// }


class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      isLoading: true,
      navigateHome: false
    }
  }

  componentDidMount() {
    search(this.props.history.location.state, result => this.setState({ movieList: result, isLoading: false }))
  }

  navigateToHome = () => {
    this.setState({ navigateHome: true })
  }

  navigateToFavorites = () => {
    this.props.history.push('/favorites')
  }
  render() {
    if (this.state.isLoading) {
      return <div>Loading</div>
    } else if (this.state.navigateHome) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <ToolBar
          title="Movie deatails"
          leftIcon="arrow_back"
          rightIcon="favorite"
          onClickLeftIcon={this.navigateToHome}
          onClickRightIcon={this.navigateToFavorites}
        />
        {this.state.movieList.map(item => <SearchItem
          key={item.id}
          title={item.title}
          rating={item.vote_average}
          director=''
          date={item.release_date}
          duration='120'
          imgUrl={imageNull(item.poster_path)}
        />)}
      </div>
    );
  }
}

export default SearchList;