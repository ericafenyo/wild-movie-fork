import React from 'react';
import './Dropdown.css';

export const HistoryItem = ({ title }) => {
  return (
    <div className="history-item">
      <i className="material-icons">history</i>
      <p className="ellipses">{title}</p>
    </div>
  );
}

export const ResultItem = ({ title, handelClick }) => {
  return (
    <div className="resultItem">
      <p className="ellipsis">{title}</p>
    </div>
  );
}

export const Dropdown = ({ children }) => <div className="dropdown">{children}</div>;