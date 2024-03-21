import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:null,
        trailer : null
    },
    reducers:{
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        removeNowPlayingMovies:(state)=>{
            state.nowPlayingMovies = null
        },
        addPopularMovies : (state,action)=>{
            state.popular = action.payload
        },
        addTopRatedMovies : (state,action)=>{
            state.topRated = action.payload
        },
        addUpcomingMovies : (state,action)=>{
            state.upComing = action.payload
        },
        addTrailer : (state,action) => {
            state.trailer = action.payload
        },
        removeTrailer : (state) => {
            state.trailer = null
        }

    }
})

export const {addNowPlayingMovies,removeNowPlayingMovies,addTrailer,removeTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies} = movieSlice.actions

export default movieSlice.reducer