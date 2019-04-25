import React from 'react';
import './Toolbar.css';

const ToolBar = ({ title, leftIcon, rightIcon, onClickLeftIcon, onClickRightIcon }) => {
  return (
    <div className="toolbar-wrapper background-secondary">
      <div className="toolbar container">
        <i className="material-icons md-light" onClick={onClickLeftIcon}>{leftIcon}</i>
        <p>{title}</p>
        <i className="material-icons  md-light" onClick={onClickRightIcon}>{rightIcon}</i>
      </div >
    </div>
  );
}

export default ToolBar;