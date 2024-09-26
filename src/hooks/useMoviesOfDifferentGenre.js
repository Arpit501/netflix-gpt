import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMoviesOfDifferentGenre } from "../utils/moviesSlice";
import { useEffect } from "react";


const useMoviesOfDifferentGenre=()=>{

    const GenreOfMovies=useSelector(store=>store.movies.GenreOfMovies);
    const dispatch=useDispatch();
    let pageno=Math.floor((Math.random()*10)+1)

    const getMoviesByGenre=async(genreKey)=>{
       
        if(genreKey===37)
        {
             pageno=1;
        }
        if(genreKey===36)
        {
            pageno=Math.floor((Math.random()*3)+1)
        }

        if(genreKey===10752)
        {
            pageno=Math.floor((Math.random()*3)+1)
        }
        if(genreKey===10770)
        {
            pageno=Math.floor((Math.random()*3)+1)
        }


        const data=await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page='+pageno+'&with_watch_providers=8&watch_region=IN&with_genres='+(genreKey),API_OPTIONS) 
   
        const json=await data.json();

        return json.results;

       }

    const fetchGenreResults=async()=>{
        if(GenreOfMovies)
            {
                const moviesByGenre=GenreOfMovies.map(genre=>getMoviesByGenre(genre.id))

                const moviesGenresResults=await Promise.all(moviesByGenre);

                dispatch(addMoviesOfDifferentGenre(moviesGenresResults));

            }
    }       
       useEffect(()=>{

        fetchGenreResults()
       
       },[GenreOfMovies])
}

export default useMoviesOfDifferentGenre;