import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {movieAction} from "../../redux";
import {MoviesList} from "../../components";
import './style.css'
import {movieService} from "../../services";

const MoviesPage = () => {

    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies);
    // const {searchMovies} = useSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieAction.getAll({page: query.get('page')}))
    }, [query]);

    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    }
    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    };

    const [searchKey, setSearchKey] = useState('');

    useEffect(() => {
        movieService.searchMovie().then(({data}) => setSearchKey(data));

    }, [])


    const search = (e) => {
        e.preventDefault();

    }

    return (
        <div>
            <div className={'page-container'}>
                <form onSubmit={search} className={'form'}>
                    <input
                        className={'input'}
                        type="text"
                        placeholder={'Search movie'}
                        value={searchKey}
                        onChange={(event) => setSearchKey(event.target.value)}
                    />
                    <button type={'submit'}>Search</button>
                </form>
            </div>

            <div className={'page-container'}>
                {movies.map(movie => <MoviesList key={movie.id} movie={movie}/>)}
            </div>
            <div className={'movie-button-container page-container'}>
                <button disabled={query.get('page') === '1'} onClick={prevPage}>prevPage</button>
                <button disabled={query.get('page') === '500'} onClick={nextPage}>nextPage</button>
            </div>
        </div>
    );
};

export {MoviesPage};