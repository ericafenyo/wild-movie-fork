
//  import React, { Component } from 'react'
import React from 'react';
import './Dropdown.css';



export const HistoryItem = ({ title }) => {
  <div>
    <div className="history-item">
      <i className="material-icons">history</i>
      <p className="ellipses">{title}</p>
    </div>
  </div>
}

export const ResultItem = ({ title, handelClick }) => {
  <div>
    <div className="resultItem">
      <p className="ellipsis">{this.props.title}</p>
    </div>
  </div>
}


export const Dropdown = ({ children }) => <div className="dropdown">{children}</div>