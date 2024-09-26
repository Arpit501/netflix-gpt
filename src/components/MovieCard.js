import React from 'react'
import { API_OPTIONS, IMG_CDN_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addMovieInfo, addMovieVideo, ToggleScrollToTop } from '../utils/moviesSlice';
import {toggleGptSearchView} from "../utils/gptSlice"



const MovieCard = ({poster_path,movieId,title,overview}) => {

  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)

  const dispatch=useDispatch()

  const handleMovieId=async()=>{

      const data=await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos', API_OPTIONS)
 
      const json=await data.json();

      const filterData=json.results.filter(video=>video.type==="Trailer")
     
      const trailor=filterData.length?filterData[0]:json.results[0];

      dispatch(addMovieVideo(trailor))

      
      if(showGptSearch)
        {
          dispatch(toggleGptSearchView(false));
        
        }

      dispatch(addMovieInfo(
        {
          title:title,
          overview:overview,
          id:movieId
        }
        ));


      dispatch(ToggleScrollToTop());

  }

  if(!poster_path) return null;

  return (
    <div className='w-40 mx-3 cursor-pointer' onClick={handleMovieId}>
        <img 
         
         className='rounded-xl shadow-inner hover:border border-gray-50,shadow-2xl '
        src={IMG_CDN_URL+poster_path} 
        alt="moviecard"
         />
    </div>
  )
}

export default MovieCard