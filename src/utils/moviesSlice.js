import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowplayingMovies: null,
        popularMovies:null,
        movieTrailor: null
    },
    reducers: {
        addNowplayingmovies: (state, action) => {
            state.nowplayingMovies = action.payload
        },
        addPopularmovies: (state, action) => {
            state.popularMovies = action.payload
        },
        showMovieTrailor: (state, action) => {
            state.movieTrailor = action.payload
        }

    }
})

export const { addNowplayingmovies,showMovieTrailor,addPopularmovies } = moviesSlice.actions

export default moviesSlice.reducer