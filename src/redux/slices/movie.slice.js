import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
        movies: [],
        movie: null,
        searchMovies: [],
        currentPage: 1,
        pages: 0,
        loading: false,
        errors: null
    }
;
const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data.results
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async ({searchKey}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovie(searchKey);
            return data.results
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.errors = null;
                state.loading = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload;
            })
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.searchMovies = action.payload
                state.loading = false;
                state.errors = null;
            })
            .addCase(searchMovie.pending, (state, action) => {
                state.loading = true;
                state.errors = null;
            })
            .addCase(searchMovie.rejected, (state, action) => {
                state.errors = action.payload
                state.loading = false
            })

});

const {reducer: movieReducer, actions: {}} = movieSlice;

const movieAction = {getAll, searchMovie};

export {movieAction, movieReducer};