import '../Style/Sidebar.css';
import Weekday from "./Weekday";
import React from 'react';

    function redirectToTasks() {
        window.location.href = "/tasks";
    }


function Sidebar() {


    return (
        <div className="sidebar">
            <h1 className="sidebar__heading">Weekday</h1>
            <Weekday href="#monday" text="Monday"/>
            <Weekday href="#tuesday" text="Tuesday"/>
            <Weekday href="#wednesday" text="Wednesday"/>
            <Weekday href="#thursday" text="Thursday"/>
            <Weekday href="#friday" text="Friday"/>
            <Weekday href="#saturday" text="Saturday"/>
            <Weekday href="#sunday" text="Sunday"/>
        </div>
    );
}

export default Sidebar;