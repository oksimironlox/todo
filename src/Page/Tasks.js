import React, { useEffect, useRef } from 'react';
import '../Style/App.css';
import '../Style/Tasks.css';
import weekday from "../Component/Weekday";

function Task() {
    const currentUrl = window.location.href;
    var weekday =currentUrl.split("/")[3];

   /* const inputRef = useRef(null);

    useEffect(() => {
        const button = document.querySelector('.tasks--addTask__button');

        const handleClick = function() {
            try {
                const value = inputRef.current.value;
                localStorage.setItem(weekday, value);
                console.log('Значение успешно сохранено в Local Storage:', value);
            } catch (error) {
                console.error('Ошибка при сохранении в Local Storage:', error);
            }
        };

        button.addEventListener('click', handleClick);

        return () => {
            button.removeEventListener('click', handleClick);
        };
    }, []);*/

    return (
        <div className="tasks--font tasks--addTask">
            <h2>{weekday}</h2>
            <div className="tasks--addTask--search">
               {/* <input ref={inputRef} className="tasks--addTask--search__input"></input>*/}
                <input className="tasks--addTask--search__input"></input>
                <button className="tasks--addTask__button">
                    Search
                </button>
            </div>
        </div>
    );
}

export default Task;