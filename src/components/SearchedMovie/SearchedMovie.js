import React from 'react';
import {Link} from "react-router-dom";

import './style.css'

const SearchedMovie = ({searchedMovie}) => {

    const {id, title, release_date, vote_average, backdrop_path, poster_path} = searchedMovie;

    const baseImageURL = "https://image.tmdb.org/t/p/";

    return (
        <div>
            <div className="search-card">
                <img src={`${baseImageURL}/w300/${poster_path}`} alt={title}/>
                <div>
                    <h5 className="search-title">{title}</h5>
                    <div> vote average - {vote_average}</div>
                    <Link to={`/movie/${id}/info`} state={searchedMovie}>
                        <button>Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export {SearchedMovie};