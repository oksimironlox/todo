import React, { useEffect, useState } from 'react';
import '../Style/App.css';
import '../Style/Tasks.css';
import AddButton from "../Component/AddButton";

function Tasks() {
    const currentUrl = window.location.href;
    var weekday = currentUrl.split("/")[3];

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [tasks, setTasks] = useState(() => {
        const storedTasks = JSON.parse(localStorage.getItem(weekday));
        return storedTasks || [];
    });

    useEffect(() => {
        localStorage.setItem(weekday, JSON.stringify(tasks));
    }, [weekday, tasks]);

    const handleSearch = () => {
        if (searchTerm === '') {
            setSearchResults(null);
        } else {
            const filteredTasks = tasks.filter(task =>
                task.text.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(filteredTasks);
        }
    };

    const handleChangeTask = (index, newText, done) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = { text: newText, done };
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (index) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            const updatedTasks = [...tasks];
            updatedTasks.splice(index, 1);
            setTasks(updatedTasks);
        }
    };

    const handleCheckBoxChange = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].done = !updatedTasks[index].done;
        setTasks(updatedTasks);
    };

    const handleAlert = (index) => {
        const task = tasks[index];
        const newText = prompt('Enter the new task text', task.text);

        if (newText !== null) {
            /* eslint-disable no-restricted-globals */
            const done = confirm('Is the task done?');
            handleChangeTask(index, newText, done);
        }
    };

    return (
        <div className="tasks--font tasks">
            <h2>{weekday}</h2>
            <AddButton />
            <div className="tasks--search">
                <input
                    className="tasks--search__input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="tasks--search__button" onClick={handleSearch}>
                    Search
                </button>
            </div>
            <div className="tasks__list">
                {searchResults !== null
                    ? searchResults.map((task, index) => (
                        <div className="tasks__list__item" key={index}>
                            <input
                                type="checkbox"
                                checked={task.done}
                                onChange={() => handleCheckBoxChange(index)}
                            />
                            <span>{task.text}</span>
                            <button className="tasks__list__item__button" onClick={() => handleAlert(index)}>Edit</button>
                            <button className="tasks__list__item__button" onClick={() => handleDeleteTask(index)}>Delete</button>
                        </div>
                    ))
                    : tasks.map((task, index) => (
                        <div className="tasks__list__item" key={index}>
                            <input
                                type="checkbox"
                                checked={task.done}
                                onChange={() => handleCheckBoxChange(index)}
                            />
                            <span>{task.text}</span>
                            <button className="tasks__list__item__button" onClick={() => handleAlert(index)}>Edit</button>
                            <button className="tasks__list__item__button" onClick={() => handleDeleteTask(index)}>Delete</button>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Tasks;