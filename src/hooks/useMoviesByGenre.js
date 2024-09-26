import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGenreOfMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";


const useMoviesByGenre=()=>{

    const dispatch=useDispatch()
    const GenreOfMovies=useSelector(store=>store.movies.GenreOfMovies)

    const getMoviesByGenre=async()=>{

        const data=await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en',API_OPTIONS)   
   
        const json=await data.json();
   
        dispatch(addGenreOfMovies(json.genres))
   
       }

    useEffect(()=>{
        
        !GenreOfMovies && getMoviesByGenre()
    },[])
}

export default useMoviesByGenre;