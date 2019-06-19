import React from 'react';
import './Toolbar.css';
import { NavLink } from 'react-router-dom';

const ToolBar = ({
  title, rightIcon, onClickLeftIcon, onClickRightIcon, leftPath = `${process.env.PUBLIC_URL}/`, rightPath = `${process.env.PUBLIC_URL}/favorites`,
}) => (
    <div className="toolbar">
      <i className="icon icon-white icon-arrow-back" onClick={onClickLeftIcon} />
      <p>{title}</p>
      <NavLink to={rightPath}>
        <i className="material-icons  md-light" onClick={onClickRightIcon}>{rightIcon}</i>
      </NavLink>
    </div>
  );

export default ToolBar;
