import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const gptSlice=createSlice({

    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieResults:"first",
        movieNames:"first",
    },

    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMovieResult:(state,action)=>{
            const {movieNames,movieResults} =action.payload;
            state.movieResults=movieResults
            state.movieNames=movieNames;
        }
    }
})

export const {toggleGptSearchView,addGptMovieResult}=gptSlice.actions;

export default gptSlice.reducer;
