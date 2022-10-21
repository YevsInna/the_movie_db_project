import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    genres: [],
    loading: false,
    error: null,
    moviesByGenre: []
}

const getAllGenres = createAsyncThunk(
    'movieSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAllGenres();
            return data.genres
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getMoviesByGenre = createAsyncThunk(
    'movieSlice/getMoviesByGenre',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getMoviesByGenre(id, page);
            return data.results;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const genreSlice = createSlice({
        name: 'genreSlice',
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addCase(getAllGenres.fulfilled, (state, action) => {
                    state.genres = action.payload;
                    state.loading = false;
                    state.error = null
                })
                .addCase(getAllGenres.pending, (state, action) => {
                    state.loading = true
                })
                .addCase(getAllGenres.rejected, (state, action) => {
                    state.error = action.payload;
                    state.loading = false;
                })
                .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                    state.moviesByGenre = action.payload;
                    state.loading = false;
                    state.error = null
                })
                .addCase(getMoviesByGenre.pending, (state, action) => {
                    state.loading = true;
                })
                .addCase(getMoviesByGenre.rejected, (state, action) => {
                    state.error = action.payload;
                    state.loading = false;
                })
    }
);

const {reducer: genresReducer, actions: {}} = genreSlice;

const genreAction = {getAllGenres, getMoviesByGenre};

export {genresReducer, genreAction};