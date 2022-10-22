import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";

import {genreAction} from "../../redux";
import {MoviesListByGenre} from "../MoviesListByGenre/MoviesListByGenre";
import './style.css'

const MoviesByGenre = () => {

    const {moviesByGenre} = useSelector(state => state.genres);

    const dispatch = useDispatch();

    const {id} = useParams();

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(genreAction.getMoviesByGenre({id, page: query.get('page')}))
    }, [id, query]);

    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    }
    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    };
    return (

        <div className={'container-movies-byGenre'}>
            <div className={'movies-byGenre'}>
                {moviesByGenre.map(movie => <MoviesListByGenre key={movie.id} movie={movie}/>)}
            </div>
            <div className={'button-container'}>
                <button disabled={query.get('page') === '1'} onClick={prevPage}>Previous page</button>
                <button onClick={nextPage}>Next page</button>
            </div>
        </div>
    );
};

export {MoviesByGenre};