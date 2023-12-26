import React from 'react';
import './Style/Sidebar.css';

function Weekday(props) {
    return (
        <button className="sidebar__button--weekday">
            <p className="sidebar__button--weekday--name">{props.text}</p>
        </button>
    );
}

export default Weekday;