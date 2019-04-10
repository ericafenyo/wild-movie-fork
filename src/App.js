import React, { Component } from 'react';
<<<<<<< HEAD
import HomeScreen from "./Components/HomeScreen/HomeScreen"
import "./App.css";
import "./Components/HomeScreen/HomeScreen.css";


=======
import Dropdown from './Components/Dropdown/Dropdown'

// import DropdownV2 from './Components/Dropdown/DropdownV2'
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
>>>>>>> 99675866e985cef981151459abd9948f616a534d

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <header>
         <HomeScreen/>
       
         
        </header>
=======
     <div>
       <Dropdown/>
      
      
        {/* <DropdownV2/> */}
>>>>>>> 99675866e985cef981151459abd9948f616a534d
      </div>
        
      
    );
  }
}

export default App;
