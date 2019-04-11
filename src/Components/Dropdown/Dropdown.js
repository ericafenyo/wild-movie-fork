
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
      
      return <div className="dropdown">{this.props.children}>
        </div>
      
    }
  }

  export {Dropdown, ResultItem, HistoryItem}








