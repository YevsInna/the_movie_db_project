import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {genreService} from "../../services";
import {Genres} from "../../components/Genres/Genres";

const GenresPage = () => {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();
    useEffect(()=>{
        genreService.getAllGenres().then(({data})=>{
           dispatch(genreService.getAllGenres(data.genres))
        })
    },[])
    return (
        <div>
            {
                genres.map(genre=><Genres key={genre.id} genre={genre}/>)
            }
        </div>
    );
};

export {GenresPage};