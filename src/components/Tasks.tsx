import React from 'react';
import {TasksType} from "../App";


type TasksPropsTypes = {
    tasks: TasksType[];
}

export const Tasks: React.FC<TasksPropsTypes> = ({tasks}) => {
    const mappedTasks = tasks.map(t => {
            return (
                <li key={t.id}>
                    <span> {t.id} </span>
                    <span> {t.title} </span>
                    <span> {t.userId} </span>
                    <input type='checkbox' checked={t.completed} />
                </li>
            );
        })

    return (
        <ul>
            {mappedTasks}
        </ul>
    );
};