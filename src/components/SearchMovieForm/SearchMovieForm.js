import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {movieAction} from "../../redux";
import {MoviesList} from "../MoviesList/MoviesList";

const SearchMovieForm = () => {

    const {handleSubmit, register, reset} = useForm();

    const {searchMovies} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const search = ({searchKey}) => {
        dispatch(movieAction.searchMovie({searchKey}))
    };

    return (
        <div>

            <div>
                <form onSubmit={handleSubmit(search)}>
                    <input
                        type="text"
                        placeholder={'Search movie'}
                        {...register("searchKey")}
                    />
                    <button onClick={()=>reset()}>Search</button>
                </form>
            </div>

            <div>
                {
                    searchMovies.map(movie => <MoviesList key={movie.id} movie={movie}/>)
                }
            </div>

        </div>
    );
};

export {SearchMovieForm};