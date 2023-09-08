import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Button} from "./Button";

type TaskInputPropsType = {
    addTask: () => void
    newTaskTitle: string
    changeNewTaskTitle: (newTaskTitle: string) => void
}

export const TaskInput:React.FC<TaskInputPropsType> = (props) => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            props.addTask();
        }
    }
    return (
        <div>
            <input value={props.newTaskTitle}
                   type='text'
                   onChange={onChangeInputHandler}
                   onKeyDown={onKeyPressHandler}
            />
            <Button name='+' callback={() => props.addTask()}/>
        </div>
    );
};