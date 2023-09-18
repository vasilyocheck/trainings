import React from 'react';
import { useNavigate } from 'react-router-dom';

type ContentTypeProps={
    heading:string,
    pages:string
}

export const Content = (props:ContentTypeProps) => {
    const{heading, pages}=props;
    const navigate = useNavigate();
    const mainPageHandler = () => {
        navigate('/page/0');
    }

    const comebackHandler = () => {
        navigate(-1);
    }

    return (
        <div>
            <div>{heading}</div>
            <div>{pages}</div>
            <button onClick={mainPageHandler}>Main Page</button>
            <button onClick={comebackHandler}>Back</button>
        </div>
    );
};

