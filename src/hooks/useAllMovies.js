import { useDispatch, useSelector } from "react-redux";
import { addALLMovies } from "../utils/moviesSlice";
import { useEffect } from "react";





const useAllMovies=()=>{

    const dispatch=useDispatch();
    

    const NowPlayingMovies=useSelector(store=>store?.movies?.NowPlayingMovies)
    const TrendingMovies=useSelector(store=>store?.movies?.TrendingMovies)
    const TopRatedMovies=useSelector(store=>store?.movies.TopRatedMovies)
    const popularMovies=useSelector(store=>store?.movies?.popularMovies)
    const upcomingMovies=useSelector(store=>store?.movies?.upcomingMovies)
    const MoviesOfDifferentGenre=useSelector(store=>store?.movies?.MoviesOfDifferentGenre)


    const allMovie=[NowPlayingMovies,TrendingMovies,TopRatedMovies,popularMovies,upcomingMovies]; 


   

    const allMovies=[];
    
    const addingMovies=()=>{
        
        for(let i=0;i<allMovie?.length;i++)
            {
                allMovie[i]?.forEach((element)=>allMovies.push(element))
        
            }
        
            for(let i=0;i<MoviesOfDifferentGenre.length;i++)
            {
                MoviesOfDifferentGenre[i]?.forEach((element)=>allMovies.push(element))

            }

            return allMovies;

}


useEffect(()=>{


      const results=addingMovies()
      
      dispatch(addALLMovies(results));


},[])

}

export default useAllMovies;