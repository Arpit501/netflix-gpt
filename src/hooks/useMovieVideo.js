
import { addMovieVideo } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import  { useEffect } from 'react'

const useMovieVideo=()=>{


    const dispatch=useDispatch();

    const MovieVideo=useSelector(store=>store.movies?.MovieVideo)
    const MovieId=useSelector(store=>store.movies?.MovieId)
    
    const getMovieVideo=async()=>{
  
  
      const data=await fetch('https://api.themoviedb.org/3/movie/'+ MovieId +'/videos?language=en-US', API_OPTIONS)
 
  
      const json=await data.json();
  
      const filterData=json.results.filter(video=>video.type==="Trailer")
      const trailor=filterData.length?filterData[0]:json.results[0];
  
      dispatch(addMovieVideo(trailor))
      
    }
  
    useEffect(()=>{
  
     !MovieVideo && getMovieVideo();
  
    },[MovieVideo])
}

export default useMovieVideo;