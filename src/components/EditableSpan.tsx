import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    oldTitle: string
    callBack: (newTitle: string) => void
}
export const EditableSpan: React.FC<EditableSpanPropsType> = (props) => {
    const [newTitle, setNewTitle] = useState(props.oldTitle)
    const [edit, setEdit] = useState(false);
    const changeStatusHandler = () => {
        setEdit(!edit);
        if(edit) {
            props.callBack(newTitle);
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value);
    }
    return (
        edit
        ? <input value={newTitle} onBlur={changeStatusHandler} onChange={onChangeHandler}autoFocus/>
       : <span onDoubleClick={changeStatusHandler}>{props.oldTitle}</span>
    );
};