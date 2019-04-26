import React, { Component } from 'react';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

import { mapper } from '../../data/Mapper';
import "./SearchList.css";
import "../../App.css";



const SearchItem = (props) => {
  return (<div>
    <Card className="card-search-list">
      <CardImg top height="100%" src={props.imgUrl} alt="Card image cap" />
      <CardBody>
        <div className="body-first-line">
          <CardTitle className="card-title-date">{props.title} <span className="span-search-list"> ({props.date})</span >
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



class SearchList extends Component {
  render() {

    return (
      <div>
        {this.props.movieList.map(item => <SearchItem
          key={item.id}
          title={item.title}
          rating={item.vote_average}
          director=''
          date={item.release_date}
          duration='120'
          imgUrl={mapper.buildImageUrl(item.poster_path)}
        />)}
      </div>
    );
  }
}

export default SearchList;