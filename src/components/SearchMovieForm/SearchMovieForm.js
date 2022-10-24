import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {movieAction} from "../../redux";
import {SearchedMovie} from "../SearchedMovie/SearchedMovie";
import './style.css';

const SearchMovieForm = () => {

    const {handleSubmit, register, reset} = useForm();

    const {searchMovies} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const search = ({searchKey}) => {
        dispatch(movieAction.searchMovie({searchKey}))
        reset()
    };

    return (
        <div>

            <div className={'form'}>
                <form onSubmit={handleSubmit(search)}>
                    <input
                        type="text"
                        placeholder={'Search movie'}
                        {...register("searchKey")}
                    />
                    <button>Search</button>
                </form>
            </div>

            <div className={'search-page-container'}>
                {
                    searchMovies.map(searchedMovie => <SearchedMovie key={searchedMovie.id} searchedMovie={searchedMovie}/>)
                }
            </div>

        </div>
    );
};

export {SearchMovieForm};