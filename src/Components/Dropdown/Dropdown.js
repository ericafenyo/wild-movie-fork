
//  import React, { Component } from 'react'
 import React from 'react';
 import './Dropdown.css';

 class HistoryItem extends React.Component {
   render(){
     return (
     <div>
        <div className="history-item">
        <i class="material-icons">history</i>
          <p>{this.props.title}</p>
        </div>
      </div>
      )
   }
 }
 class ResultItem extends React.Component {
  render(){
    return (
    <div>
       <div className="resultItem">
        <p>{this.props.title}</p>
       </div>
     </div>
     )
  }
}

class Dropdown extends React.Component {
    render() {
      return (
      <div className="dropdown">
        <ResultItem title = "Machete"/>
        <HistoryItem title = "Star wars"/>
        <HistoryItem title = "Star wars 2"/>
        <HistoryItem title = "Star wars 3"/>
        </div>
      
      );
    }
  }

  export default Dropdown 








