import {useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import generateRandom from "../utils/generateRandom";
import Shimmer from "./Shimmer"


const MainContainer=()=>{

    const ShowRandomMovie=useSelector(store=>store?.movies?.ShowRandomMovie)
    const movies=useSelector(store=>store.movies?.NowPlayingMovies)
    const MovieInfo=useSelector(store=>store.movies?.MovieInfo)
    const AllMovies=useSelector(store=>store.movies.AllMovies)

    if(!movies || !AllMovies) return <Shimmer/> ;
    
    
    let randomNumber;

    const getRandomMovie=()=>{
        
        randomNumber=generateRandom(AllMovies);
    }
    

    !ShowRandomMovie && getRandomMovie();

    let mainMovie=AllMovies[randomNumber]
    
    if(MovieInfo)
        {
         mainMovie=MovieInfo;
            
        }

    const {title,overview,id}=mainMovie;
    
    return(
        <div className="">
            <VideoTitle title={title} overview={overview} />
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;