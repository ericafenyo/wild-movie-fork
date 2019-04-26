import React, { Component, Fragment } from 'react';
import { search } from "../../data/ApiEndpoint";
import { mapper } from "../../data/Mapper";
import ToolBar from '../Toolbar/ToolBar';
import './FavoritePage.css';

const FavIcon = ({ url, openDetail, adFavorite }) => {
  return (
    <div>
      <img
        onClick={openDetail}
        className="sizeImg img-fluid"
        src={url}
        alt="poster_path" />
      <div className="icon-favorite" >
        <i className="material-icons" onClick={adFavorite}>favorite</i>
      </div>
    </div>
  );
}

class FavoritePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    search('james', response => {
      this.setState({ results: response, isLoading: false })
    });
  }

  openetail = () => {
    console.log("test");
  }

  adFavorite = () => {
    console.log("test");
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
            this.state.results.map(item =>
              (
                < div key={item.id} className="iconName col-6  favorite-item m-0 p-0 ">
                  <FavIcon url={mapper.buildImageUrl(item.poster_path)} openDetail={this.openetail} adFavorite={this.adFavorite} />
                </div>
              )
            )
          }
        </div>
      </Fragment>
    );
  }
}

export default FavoritePage;