import React from 'react'
import './Toolbar.css'

const ToolBar = ({ title, leftIcon, rightIcon, onClickLeftIcon, onClickRightIcon }) => {
    return (
        <div className="toolbar">
            <i className="material-icons" onClick={onClickLeftIcon}>{leftIcon}</i>
            <p>{title}</p>
            <i className="material-icons" onClick={onClickRightIcon}>{rightIcon}</i>
        </div >
    )
}

export default ToolBar