import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {Genres} from "../../components/Genres/Genres";
import {genreAction} from "../../redux";
import './style.css'

const GenresPage = () => {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(genreAction.getAllGenres())
    }, [])
    return (
        <div>
            <div className={'genres-container'}>
                {
                    genres.map(genre => <Genres key={genre.id} genre={genre}/>)
                }
            </div>
            <Outlet/>
           
        </div>

    );
};

export {GenresPage};