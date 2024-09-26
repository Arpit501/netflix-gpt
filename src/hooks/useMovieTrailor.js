
import { addTrailorVideo } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import  { useEffect } from 'react'


const useMovieTrailor=(movieId)=>{

    const dispatch=useDispatch();

    const trailorVideo=useSelector(store=>store.movies.trailorVideo)
  
    const getMovieVideo=async()=>{
  
  
      const data=await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_OPTIONS)
 
  
      const json=await data.json();
  
  
      const filterData=json.results.filter(video=>video.type==="Trailer")
      const trailor=filterData.length?filterData[0]:json.results[0];
  
      dispatch(addTrailorVideo(trailor))
    }
  
    useEffect(()=>{
  
     !trailorVideo && getMovieVideo();
  
    },[])
}

export default useMovieTrailor;