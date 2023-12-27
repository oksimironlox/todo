
import '../Style/Tasks.css';

import React, { Component } from 'react';

class AddButton extends Component {
    showAlert() {
        const task = prompt('Describe your task', 'Chill');
        const currentUrl = window.location.href;
        const weekday = currentUrl.split('/')[3];

        if (task) {
            const existingTasks = JSON.parse(localStorage.getItem(weekday)) || [];
            const updatedTasks = [...existingTasks, { text: task, done: false }];

            localStorage.setItem(weekday, JSON.stringify(updatedTasks));
        }
    }

    render() {
        return (
            <button className="tasks__button--add" onClick={this.showAlert}>
                New Task
            </button>
        );
    }
}

export default AddButton;