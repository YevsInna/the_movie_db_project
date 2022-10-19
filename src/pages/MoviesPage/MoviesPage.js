import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieAction} from "../../redux";
import {MoviesList} from "../../components";
import css from './MoviesPage.module.css'
import {useSearchParams} from "react-router-dom";
import {movieService} from "../../services";


const MoviesPage = () => {

    const [movies, setMovies] = useState([]);
    const [prev, setPrev] = useState(1);
    const [next, setNext] = useState(1);
    const [query, setQuery] = useSearchParams({page: '1'});

    const [searchMovie, setSearchMovie] = useState('');

    useEffect(() => {
        movieService.getAll(query.get('page')).then(({data}) => {
            setMovies(data.results)
            setPrev(data.prev)
            setNext(data.next)
        })
    }, [query]);


    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
        setPrev(prev - 1)
        setNext(prev + 1)
    }
    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
        setPrev(prev - 1)
        setNext(prev + 1)
    };

    useEffect(() => {
        movieService.searchMovie().then(({data}) => {
            console.log(data.results)
        })
    }, [])

    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        useEffect(() => {
            movieService.searchMovie().then(({data}) => {
                setMovies(data.results)
            })
        }, [])
    }

    const change = (e) => {
        setSearchMovie(e.target.value)
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input
                    className=""
                    type="search"
                    placeholder={'Search movie'}
                    value={searchMovie}
                    onChange={change}
                />
                <button>Search</button>
            </form>

            <div className={css.movie_list}>
                {movies?.map(movie => <MoviesList key={movie.id} movie={movie}/>)}
            </div>
            <button disabled={+prev === 1} onClick={prevPage}>prevPage</button>
            <button disabled={+next === 500} onClick={nextPage}>nextPage</button>
        </div>
    );
};

export {MoviesPage};