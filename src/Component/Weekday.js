import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../Style/Sidebar.css';

function Weekday(props) {
    const location = useLocation();
    const dayOfWeek = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

    useEffect(() => {
        const buttons = document.querySelectorAll('.sidebar__button--weekday');
        buttons.forEach(button => {
            if (button.textContent === dayOfWeek) {
                button.classList.add('sidebar__button--weekday--active');
            }
        });
    }, [dayOfWeek]);

    function redirectToTasks() {
        window.location.href = "/" + props.text;
    }

    return (
        <button onClick={redirectToTasks} className="sidebar__button--weekday">
            <p className="sidebar__button--weekday--name">{props.text}</p>
        </button>
    );
}

export default Weekday;