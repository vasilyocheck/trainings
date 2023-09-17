import React from 'react';
import {PagesType} from "../../data/dataState";
import {useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PagePropsType = {
    pages: PagesType[]
}
export const Page: React.FC<PagePropsType> = ({pages}) => {
    const params=useParams();

    return (

        <div>
            {Number(params.id) < pages.length
                ? <div>
                    <div>{pages[Number(params.id)].heading}</div>
                    <div>{pages[Number(params.id)].about}</div>
                </div>
                : <Error404 /> }
        </div>
    );
};