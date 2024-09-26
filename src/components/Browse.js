
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import GptSearchPage from "./GptSearchPage";
import { useDispatch, useSelector } from "react-redux";
import useMoviesByGenre from "../hooks/useMoviesByGenre";
import useMoviesOfDifferentGenre from "../hooks/useMoviesOfDifferentGenre";
import Footer from "./Footer";
import { ToggleScrollToTop } from "../utils/moviesSlice";
import Shimmer from "./Shimmer";



const Browse=()=>{

    const dispatch=useDispatch()
    const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
    const ScrollToTop=useSelector(store=>store.movies.ScrollToTop);

    const NowPlayingMovies=useSelector(store=>store?.movies?.NowPlayingMovies)
    const TrendingMovies=useSelector(store=>store?.movies?.TrendingMovies)
    const TopRatedMovies=useSelector(store=>store?.movies.TopRatedMovies)
    const popularMovies=useSelector(store=>store?.movies?.popularMovies)
    const upcomingMovies=useSelector(store=>store?.movies?.upcomingMovies)
    const MoviesOfDifferentGenre=useSelector(store=>store?.movies?.MoviesOfDifferentGenre)
    
  
    
    useNowPlayingMovies();
    useTrendingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    useMoviesByGenre();
    useMoviesOfDifferentGenre()


    if(!NowPlayingMovies || !TrendingMovies|| !TopRatedMovies || !popularMovies || !upcomingMovies || !MoviesOfDifferentGenre) return <Shimmer/>
   


    const scrollToTop = () =>{ 
        window.scrollTo({ 
          top: 0,  
          behavior: 'smooth'
        }); 
        dispatch(ToggleScrollToTop());
      }; 


    return(
        <div className="absolute">

            <Header showWhere={false}/>
            {
                    showGptSearch?(<GptSearchPage/>
                    ):(
                    <>
                    <MainContainer/>
                    <SecondaryContainer/>
                    {ScrollToTop && scrollToTop()}
                    </>)
            }   
           {!showGptSearch?<Footer/>:""}
        </div>
    )
}

export default Browse;