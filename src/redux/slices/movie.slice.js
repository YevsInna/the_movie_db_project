import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    movie: null
};

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
    // .addCase()
});

const {reducer: movieReducer, actions: {}} = movieSlice;

const movieAction = {};

export {movieAction, movieReducer};