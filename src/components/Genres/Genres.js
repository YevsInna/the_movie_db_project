import React from 'react';

import "./style.css"
import {Link} from "react-router-dom";

const Genres = ({genre}) => {

    const {id, name} = genre

    return (
        <div>
            <div className={'genre'}>
                <Link to={id.toString()}>{name}</Link>
            </div>
        </div>
    );
};

export {Genres};