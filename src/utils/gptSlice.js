import { createSlice } from '@reduxjs/toolkit'

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptSearch: false,
        movieNames:null,
        movieResults:null
    },
    reducers:{
        toggleGptSearch:(state)=>{
            state.gptSearch = !state.gptSearch
        },
        addMovies:(state,actions) => {
            const {movieNames,movieResults} = actions.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        }
    }

})

export const {toggleGptSearch,addMovies} = gptSlice.actions
export default gptSlice.reducer
