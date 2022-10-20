import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    genres: [],
    selectGenre: null
}

const getAllGenres = createAsyncThunk(
    'movieSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAllGenres();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const genreSlice = createSlice({
        name: 'genreSlice',
        initialState,
        reducers: {
            selectGenre:(state, action)=>{
                state.selectGenre = action.payload
            }
        },
        extraReducers: builder =>
            builder
                .addCase(getAllGenres.fulfilled, (state, action) => {
                    state.genres = action.payload.genres
                })
    }
);

const {reducer: genresReducer, actions:{selectGenre}} = genreSlice;

const genreAction = {getAllGenres, selectGenre};

export {genresReducer, genreAction};