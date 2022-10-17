import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './Navigate.module.css'

const MoviesPage = () => {
    return (
        <div className={css.Navigate}>
            <NavLink to={'/movies'}>Movies list</NavLink>
            <NavLink to={'/genres'}>Genres list</NavLink>
            <Outlet/>
        </div>
    );
};

export {MoviesPage};