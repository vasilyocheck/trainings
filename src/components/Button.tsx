import React from 'react';

type ButtonPropsType = {
    name: string
    callback?: () => void
}
export const Button: React.FC<ButtonPropsType> = ({name, callback}) => {
    return (
        <button onClick={callback}>{name}</button>
    );
};