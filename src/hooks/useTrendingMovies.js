
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS} from "../utils/constants";

const useTrendingMovies=()=>{

    const dispatch=useDispatch();

    const TrendingMovies=useSelector(store=>store.movies.TrendingMovies)
    

    const getTrendingMovies=async()=>{

        const data=await fetch('https://api.themoviedb.org/3/trending/movie/day', API_OPTIONS);

        const json=await data.json();
        
        dispatch(addTrendingMovies(json.results));
    }

    useEffect(()=>{
       !TrendingMovies && getTrendingMovies();
    },[])
}

export default useTrendingMovies;