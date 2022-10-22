import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";

import './style.css';
import {useDispatch, useSelector} from "react-redux";
import {genreService} from "../../services";
import {genreAction} from "../../redux";

const MoviesListCard = () => {

    const {id} = useParams();
    const {state} = useLocation();
    const [movie, setMovie] = useState({});


    useEffect(() => {
        if (state) {
            setMovie(state)
            return
        }
    }, [id]);

    const navigate = useNavigate();
    const back = () => {
        navigate(-1)
    };

    // const {genres} = useSelector(state=>state.genres);
    // const dispatch = useDispatch();
    // useEffect(()=>{
    //     genreService.getAllGenres().then(({data})=>{
    //         dispatch(genreAction.getAllGenres(data.genres))
    //     })
    // },[]);

    return (
        <div>
            {
                movie &&
                <div className={'movie-single-card'}>
                    <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt={movie.title}/>
                    <div className={'single-movie-overview'}>
                        <h1>{movie.title}</h1>
                        <div className={'movie-overview'}>
                            <div>
                                <p>{movie.overview}</p>
                                <p>Release date: {movie.release_date}</p>
                                <p>Rating: {movie.vote_average}</p>
                            </div>
                            <button onClick={back}>Back to movies list</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export {MoviesListCard};