import React, { useState, useEffect } from 'react';

function ListTasks({ tasks }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
        </ul>
    );
}

export default ListTasks;