
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies=()=>{

    const dispatch=useDispatch();

    const TopRatedMovies=useSelector(store=>store.movies.TopRatedMovies)
    let pageno=Math.floor((Math.random()*10)+1)

    const getTopRatedMovies=async()=>{

        const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page='+pageno, API_OPTIONS);

        const json=await data.json();

        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(()=>{
        !TopRatedMovies &&  getTopRatedMovies();
    },[])
}

export default useTopRatedMovies;