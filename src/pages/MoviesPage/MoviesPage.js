import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieAction} from "../../redux";
import {MoviesList} from "../../components";
import css from './MoviesPage.module.css'
import {useSearchParams} from "react-router-dom";
import {movieService} from "../../services";


const MoviesPage = () => {

const [movies, setMovies] = useState([]);
const [prev, setPrev] = useState(null);
const [next, setNext] = useState(null);
const [query, setQuery] = useSearchParams({page: '1'});

useEffect(()=>{
    movieService.getAll(query.get('page')).then(({data})=>{
        setMovies(data.results)
        setPrev(data.prev)
        setNext(data.next)
    })
},[query]);

    const prevPage = () => {
        setQuery(value=>({page:value.get('page')-1}))
    }
    const nextPage = () => {
        setQuery(value=>({page:+value.get('page')+1}))
    }
    return (
        <div>

            <div className={css.movie_list}>
                {movies?.map(movie => <MoviesList key={movie.id} movie={movie}/>)}
            </div>
            <button disabled={!prev} onClick={prevPage}>prevPage</button>
            <button disabled={!next} onClick={nextPage}>nextPage</button>
        </div>
    );
};

export {MoviesPage};