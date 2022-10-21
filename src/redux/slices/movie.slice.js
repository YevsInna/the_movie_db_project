import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
        movies: [],
        movie: null,
        searchMovie: '',
        currentPage: 1,
        pages: 0
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
    async ({currentPage, searchMovie}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovie(currentPage, searchMovie);
            return data.results
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        madeSearchMovie: (state, action) => {
            state.searchMovie = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload

            })
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.movies = action.payload
                state.pages = action.payload.total_pages
            })

});

const {reducer: movieReducer, actions: {madeSearchMovie, setCurrentPage}} = movieSlice;

const movieAction = {getAll, searchMovie, madeSearchMovie, setCurrentPage};

export {movieAction, movieReducer};