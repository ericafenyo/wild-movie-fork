import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { mapper } from '../../data/Mapper';
import "./SearchList.css";
import "../../App.css";

class SearchList extends Component {
  
  manageMovie = (id) => {
    if(JSON.parse(localStorage.getItem('favoris'))) {
      if(JSON.parse(localStorage.getItem('favoris').includes(id))) {
        let favoris = JSON.parse(localStorage.getItem('favoris'));
        let index = favoris.indexOf(id);
        favoris.splice(index,1);
        localStorage.setItem('favoris', JSON.stringify(favoris));
      } else {
        localStorage.setItem('favoris', JSON.stringify([...JSON.parse(localStorage.getItem('favoris')), id]))
      }
      // remove
    } else {
      localStorage.setItem('favoris', JSON.stringify([...JSON.parse(localStorage.getItem('favoris')) || [], id]))
    }
  }

  render() {
    return (
      <div>
        {this.props.movieList.map((item, index) => {
          return (
            <div key={index}>
              <Card className="card-search-list">
                <CardImg top height="100%" src={mapper.buildImageUrl(item.poster_path)} alt="Card image cap" />
                <CardBody>
                  <div className="body-first-line">
                    <CardTitle className="card-title-date">{item.title} <span className="span-search-list"> ({item.date})</span >
                    </CardTitle>
                    <i className="material-icons chevron-closed"> keyboard_arrow_down</i>
                    {/* <i class="material-icons chevron-opened">keyboard_arrow_up</i> */}
                  </div>
                  <CardText className="card-rating">
                    <i className="material-icons star-rating">star_rate</i>
                    {item.rating}
                  </CardText>
                  <CardText className="card-spec">{item.director}</CardText>
                  <CardText className="card-duration">{item.duration}</CardText>
                  <CardText className="favorite-border" onClick={() => this.manageMovie(item.id)}>
                    <i className="material-icons favorite-clicked">favorite</i>
                  </CardText>
                  {/* <SearchListExpanded /> */}
                </CardBody>
              </Card>
            </div>
            )
        })}
      </div>
    );
  }
}

export default SearchList;


