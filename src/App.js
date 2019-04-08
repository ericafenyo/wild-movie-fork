import React, { Component } from 'react';
import lien from './components/dopdown'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
       
         
        </header>
      </div>
      
        
          <FORM NAME="Choix">
          <SELECT NAME="Liste" onChange="Lien()">
          <OPTION VALUE="">Choisir une option
          <OPTION VALUE="../../copains.html">Les copains
          <OPTION VALUE="../../plongee/index.html">La plongée
          <OPTION VALUE="http://www pt.google.com">Recherche
          </SELECT>
          </FORM>
          
      
    );
  }
}

export default App;
