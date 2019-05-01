import React from 'react';
import './Toolbar.css';
import { NavLink } from "react-router-dom";

const ToolBar = ({ title, leftIcon, rightIcon, onClickLeftIcon, onClickRightIcon, leftPath = process.env.PUBLIC_URL+"/", rightPath = process.env.PUBLIC_URL+"/favorites" }) => {
  return (
    <div className="toolbar background-secondary">
      <NavLink to={leftPath}>
        <i className="material-icons md-light" onClick={onClickLeftIcon}>{leftIcon}</i>
      </NavLink>
      <p>{title}</p>
      <NavLink to={rightPath}>
        <i className="material-icons  md-light" onClick={onClickRightIcon}>{rightIcon}</i>
      </NavLink>
    </div>
  );
}

export default ToolBar;