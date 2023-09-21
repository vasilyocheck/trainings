import React from 'react';
import {TasksFilterOptions} from "../App";

type TasksFilterPropsType = {
    changeTasksFilter: (newTaskFilter: TasksFilterOptions) => void
}

export const TasksFilter: React.FC<TasksFilterPropsType> = ({changeTasksFilter}) => {
    return (
        <div>
            <button onClick={() => changeTasksFilter('all')}>all</button>
            <button onClick={() => changeTasksFilter('active')}>active</button>
            <button onClick={() => changeTasksFilter('completed')}>completed</button>
        </div>
    );
};