import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieService} from "../../services";
import {movieAction} from "../../redux";

const Genres = ({genre}) => {
    const {id, name} = genre

    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

export {Genres};