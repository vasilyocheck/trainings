import React, {useEffect, useState} from 'react';
import './App.css';
import Todolist from "./components/Todolist";

export type TasksFilterOptions = 'all' | 'active' | 'completed';
export type TasksType = {
    userId: number
    id: number
    title: string
    completed: boolean
}


function App() {
    const [tasks, setTasks] = useState<TasksType[]>([{userId: 1, id: 1, completed: false, title: 'init'}]);
    const [tasksFilter, setTasksFilter] = useState<TasksFilterOptions>('all');
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const getTasks = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTasks(json));
    }
    useEffect(() => {
        getTasks();
    }, []);
    const changeTasksFilter = (newTasksFilter: TasksFilterOptions) => {
        setTasksFilter(newTasksFilter);
    }
    let filteredTasks = tasks;
    if(tasksFilter === 'all') {
        filteredTasks = tasks;
    }
    if(tasksFilter === 'active') {
        filteredTasks = tasks.filter(t => !t.completed)
    }
    if(tasksFilter === 'completed') {
        filteredTasks = tasks.filter(t => t.completed)
    }
    const changeNewTaskTitle = (newTaskTitle: string) => {
        setNewTaskTitle(newTaskTitle);
    }
    const addTask = () => {
        const newTask = {userId: 1001, id: 1001, completed: false, title: newTaskTitle};
        setTasks([newTask, ...tasks]);
        setNewTaskTitle('');
    }


    return (
        <div className="App">
            <Todolist title='Todolist 1'
                      tasks={filteredTasks}
                      changeTasksFilter={changeTasksFilter}
                      addTask={addTask}
                      newTaskTitle={newTaskTitle}
                      changeNewTaskTitle={changeNewTaskTitle}
            />
        </div>
    );
}

export default App;
