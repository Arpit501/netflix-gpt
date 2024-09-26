import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useAllMovies from "../hooks/useAllMovies";


const SecondaryContainer=()=>{

   
      const {NowPlayingMovies,TrendingMovies,TopRatedMovies,popularMovies,upcomingMovies,GenreOfMovies,MoviesOfDifferentGenre}=useSelector(store=>store?.movies)

    useAllMovies();

    if(!MoviesOfDifferentGenre || !GenreOfMovies) return;
    


    return (
        <div className="-mt-16 bg-black bg-opacity-85 pb-10">

            <div className="relative -mt-28">

            <MovieList title={"Now Playing"} movies={NowPlayingMovies} />
            <MovieList title={"Trending"} movies={TrendingMovies} />
            <MovieList title={"Top Rated"} movies={TopRatedMovies} />
            <MovieList title={"Popular"} movies={popularMovies} />
            <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />

            {
              GenreOfMovies.map((list,index)=>(<MovieList title={list.name} movies={MoviesOfDifferentGenre[index]} />))
            } 
            </div>
       
        </div>
    )
}
export default SecondaryContainer;