import { createSlice } from "@reduxjs/toolkit";



const moviesSlice=createSlice(
    {
        name:"movies",
        initialState:{
            AllMovies:null,
            NowPlayingMovies:null,
            popularMovies:null,
            TopRatedMovies:null,
            upcomingMovies:null,
            trailorVideo:null,
            MovieVideo:null,
            TrendingMovies:null,
            GenreOfMovies:null,
            MoviesOfDifferentGenre:null,
            MovieInfo:null,
            ScrollToTop:false,
            ShowRandomMovie:false,
            mute:"&mute=1",
        },
        reducers:{
            addALLMovies:(state,action)=>{
                state.AllMovies=action.payload;
            },
            addNowPlayingMovies:(state,action)=>{
                state.NowPlayingMovies=action.payload; 
            },
            addPopularMovies:(state,action)=>{
                state.popularMovies=action.payload; 
            },
            addTopRatedMovies:(state,action)=>{
                state.TopRatedMovies=action.payload; 
            },
            addupcomingMovies:(state,action)=>{
                state.upcomingMovies=action.payload; 
            },
            addTrendingMovies:(state,action)=>{
                state.TrendingMovies=action.payload; 
            },
            addTrailorVideo:(state,action)=>{
                state.trailorVideo=action.payload;
            },
            addMovieVideo:(state,action)=>{
                state.MovieVideo=action.payload;
            },
            addGenreOfMovies:(state,action)=>{
                state.GenreOfMovies=action.payload;
            },
            addMoviesOfDifferentGenre:(state,action)=>{
                state.MoviesOfDifferentGenre=action.payload;
            },
            addMovieInfo:(state,action)=>{
                state.MovieInfo=action.payload;
            },
            toggleMute:(state,action)=>{
                state.mute=action.payload;
            },
            ToggleScrollToTop:(state,action)=>{
                state.ScrollToTop=!state.ScrollToTop;
            },
            addShowRandomMovie:(state,action)=>{
                state.ShowRandomMovie=!state.ShowRandomMovie;
            }

        }
    }
)

export const {addNowPlayingMovies,addTrailorVideo,toggleMute,addPopularMovies,addTopRatedMovies,addupcomingMovies,addTrendingMovies,addGenreOfMovies,addMoviesOfDifferentGenre,addMovieInfo,addALLMovies,addMovieVideo,ToggleScrollToTop,addShowRandomMovie}=moviesSlice.actions

export default moviesSlice.reducer;