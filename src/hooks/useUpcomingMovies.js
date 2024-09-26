
import { useDispatch, useSelector } from "react-redux";
import { addupcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies=()=>{

    const dispatch=useDispatch();

    const upcomingMovies=useSelector(store=>store.movies.upcomingMovies)
    let pageno=Math.floor((Math.random()*10)+1)

    const getUpcomingMovies=async()=>{

        const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page='+pageno, API_OPTIONS);

        const json=await data.json();

        dispatch(addupcomingMovies(json.results));
    }

    useEffect(()=>{
      !upcomingMovies &&  getUpcomingMovies();
    },[])
}

export default useUpcomingMovies;