import React from 'react';

import './style.css'

const MoviesListByGenre = ({movie}) => {
    const {id, title, poster_path, overview} = movie;
    const baseImageURL = "https://image.tmdb.org/t/p/"
    return (
        <div className={'movie-card'}>
            <img src={`${baseImageURL}/w185/${poster_path}`} alt={title}/>
            <div className={'movie-genre-overview'}>

                    <h3>{title}</h3>
                    <p>{overview}</p>

            </div>
        </div>
    );
};

export {MoviesListByGenre};