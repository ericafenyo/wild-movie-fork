import React, { Component } from 'react';
import { search } from "../../data/ApiEndpoint";
// import  {fetchMovieDetails} from "../../data/ApiEndpoint"
import './MovieInfo.css'



class MovieInfo extends Component {
   constructor(props) {
     super(props);
     this.state = {
       results: [],
       isLoading: true
       
     }
   }

   componentDidMount() {
       fetch(`https://api.themoviedb.org/3/search/movie?api_key=64b4c85951711a3e428dc42847471e4c&query=tron`)


     search('le seigneur', response => {
       this.setState({ results: response })
     });
   }
   
render() {
   console.log({results: this.state.results})
   return (
       <div>
      {this.state.results}
       </div>


       );
   }
 }



export default MovieInfo