import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices";

const rootReducers = combineReducers({
    movies: movieReducer
});

const setupStore= ()=> configureStore({
    reducer: rootReducers

});

export {setupStore};