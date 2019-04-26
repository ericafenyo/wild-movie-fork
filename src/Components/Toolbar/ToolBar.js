import React from 'react';
import './Toolbar.css';
import { NavLink } from "react-router-dom";

const ToolBar = ({ title, leftIcon, rightIcon, onClickLeftIcon, onClickRightIcon, leftPath = "/", rightPath = "/favorites" }) => {
  return (
    <div className="toolbar-wrapper background-secondary">
      <div className="toolbar">
        <NavLink exact to = {leftPath}>
        <i className="material-icons md-light" onClick={onClickLeftIcon}>{leftIcon}</i>
        </NavLink>
        <p>{title}</p>
        <NavLink exact to = {rightPath}>
        <i className="material-icons  md-light" onClick={onClickRightIcon}>{rightIcon}</i>
        </NavLink>
      </div>
    </div>
  );
}

export default ToolBar;