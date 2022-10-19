import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genresReducer, movieReducer} from "./slices";

const rootReducers = combineReducers({
    movies: movieReducer,
    genres: genresReducer
});

const setupStore= ()=> configureStore({
    reducer: rootReducers

});

export {setupStore};