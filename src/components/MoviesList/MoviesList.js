import React from 'react';
import {Link} from "react-router-dom";

import './style.css'

const MoviesList = ({movie}) => {
    const {id, title, release_date, vote_average, backdrop_path, poster_path} = movie
    const baseImageURL = "https://image.tmdb.org/t/p/"
    return (
        <div className="card">
            <img src={`${baseImageURL}/w300/${poster_path}`} alt={title}/>
            <div className={'card-info'}>
                <h5 className="title">{title}</h5>

                <div> vote average - {vote_average}</div>
                <Link to={`/movie/${id}/info`} state={movie}>
                    <button>Details</button>
                </Link>
            </div>

        </div>
    );
};

export {MoviesList};