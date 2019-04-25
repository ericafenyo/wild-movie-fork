import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import { search } from '../../data/ApiEndpoint';
import { mapper } from '../../data/Mapper';
import "./SearchList.css";
import "../../App.css";
import { strict } from 'assert';


const SearchItem = (props) => {
  return (<div>
    <Card className="card-search-list">
      <CardImg top height="100%" src={props.imgUrl} alt="Card image cap" />
      <CardBody>
        <div className="body-first-line">
          <CardTitle className="card-title-date">{props.title} <span className="span-search-list"> ({props.date})</span >
          </CardTitle>
          <i class="material-icons chevron-closed"> keyboard_arrow_down</i>
          {/* <i class="material-icons chevron-opened">keyboard_arrow_up</i> */}
        </div>
        <CardText className="card-rating">
          <i className="material-icons star-rating">star_rate</i>
          {props.rating}
        </CardText>
        <CardText className="card-spec">{props.director}</CardText>
        <CardText className="card-duration">{props.duration}</CardText>
        <CardText className="favorite-border"><i class="material-icons favorite-clicked">favorite</i></CardText>
        {/* <SearchListExpanded /> */}
      </CardBody>
    </Card>

  </div>
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
      isLoading: true
    }
  }

  componentDidMount() {
    search('mad max', result => this.setState({ movieList: result, isLoading: false }))
  }

  render() {

    if (this.state.isLoading) {
      return <div>Loading</div>
    }
    console.log(this.state.movieList)
    return (

      <div>
        {this.state.movieList.map(item => <SearchItem
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