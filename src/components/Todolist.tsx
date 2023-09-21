import React from 'react';
import {Tasks} from "./Tasks";
import {TaskInput} from "./TaskInput";
import {TasksFilter} from "./TasksFilter";
import {TasksFilterOptions, TasksType} from "../App";



type TodolistPropsType = {
    title: string
    tasks: TasksType[]
    changeTasksFilter: (newTasksFilter: TasksFilterOptions) => void
    addTask: () => void
    newTaskTitle: string
    changeNewTaskTitle: (newTaskTitle: string) => void
}

export const Todolist: React.FC<TodolistPropsType> = (
    {
        title,
        tasks,
        changeTasksFilter,
        addTask,
        changeNewTaskTitle,
        newTaskTitle
    }
) => {
    return (
        <div>
            <h1>{title}</h1>
            <TaskInput addTask={addTask} newTaskTitle={newTaskTitle} changeNewTaskTitle={changeNewTaskTitle}/>
            <TasksFilter changeTasksFilter={changeTasksFilter}/>
            <Tasks tasks={tasks}/>

        </div>
    );
};

export default Todolist;