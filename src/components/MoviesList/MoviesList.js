import React from 'react';
import {Link} from "react-router-dom";

import './style.css'

const MoviesList = ({movie}) => {
    const {id, title, release_date, vote_average, backdrop_path, poster_path} = movie
    const baseImageURL = "https://image.tmdb.org/t/p/"
    return (
        <div className="card">
            <img src={`${baseImageURL}/w300/${backdrop_path}`} alt={title}/>
            <div>
                <div className="title">{title}</div>
                <div>release date - {release_date}</div>
                <div> vote average - {vote_average}</div>
                <Link to={`/movie/${id}/info`} state={movie}>
                    <button>Details</button>
                </Link>
            </div>

        </div>
    );
};

export {MoviesList};