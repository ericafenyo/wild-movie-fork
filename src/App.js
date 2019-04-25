import React, { Component } from 'react';
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import "./App.css";
import "./Components/HomeScreen/HomeScreen.css";
import Casting from "./Components/Casting/Casting";
import MovieInfo from "./Components/MovieInfo/MovieInfo";
import FavoritePage from './Components/FavoritePage/FavoritePage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <FavoritePage />
        {/* <Casting imgUrl ='https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2Fbb68b562-88cc-401f-a78d-7eba0acf03c9.2Ejpeg/380x380/quality/80/brad-pitt.jpg' 
        linkMovie = '#lien'
        actor = 'brad pitt'
        /> */}
      </div>
    );
  }
}

export default App;