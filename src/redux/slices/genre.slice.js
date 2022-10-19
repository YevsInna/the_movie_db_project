import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    genres: []
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

const genreSlice = createSlice({
        name: 'genreSlice',
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addCase(getAllGenres.fulfilled, (state, action) => {
                    state.genres = action.payload.genres
                })
    }
);

const {reducer: genresReducer, actions:{}} = genreSlice;

const genreAction = {getAllGenres};

export {genresReducer, genreAction};