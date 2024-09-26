import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMovieVideo, toggleMute } from '../utils/moviesSlice';
import generateRandom from '../utils/generateRandom';
import {addMovieInfo} from '../utils/moviesSlice'
import { API_OPTIONS } from '../utils/constants';

const VideoTitle = ({title,overview}) => {

  const[display,setDisplay]=useState(true);
  const dispatch=useDispatch();
  const isMute=useSelector(store=>store.movies?.mute)
  const AllMovies=useSelector(store=>store.movies.AllMovies)


  useEffect(()=>{
   const clear= setTimeout(()=>{
     setDisplay(false);
    },10000);

    return ()=>{
     clearTimeout(clear) 
    }
    
  },[])


  const handleShowRandomMovie=async()=>{

      let no= generateRandom(AllMovies);

    let result=AllMovies[no];

    const data=await fetch('https://api.themoviedb.org/3/movie/'+ result.id +'/videos', API_OPTIONS)
 
      const json=await data.json();

      const filterData=json.results.filter(video=>video.type==="Trailer")
     
      const trailor=filterData.length?filterData[0]:json.results[0];
      
      dispatch(addMovieVideo(trailor))
    
      dispatch(addMovieInfo({
      title:result.title,
      overview:result.overview,
      id:result.id
      }))
    
    
  }



  const onOff=()=>{
  
    isMute==='&mute=1'?dispatch(toggleMute('&mute=0')):dispatch(toggleMute('&mute=1'))

   }

   const obj={}

  
    if(display===false)
    {
       obj["padding-top"]="28rem";
     }
     else
     {
      if(display && overview.length>300)    
      {
        obj["padding-top"]="18rem";
      }
      else if(display && overview.length<300 && overview.length>250)
      {
        obj["padding-top"]="20rem";
      }
      else if(display && overview.length<250)
      { 
          obj["padding-top"]="23rem"  
      }
     }

     
     const obj1={
      1:{
        "font-size":"3rem"
      },
      2:{
        "font-size":"1.5rem"
      },
     }
     

  return (
    <div style={obj} className=" pl-14 absolute text-white w-screen aspect-video bg-gradient-to-r from-black via-transparent to-transparent">
        <h1 style={title.length>20?obj1[2]:obj1[1]} className='font-bold '>{title}</h1>
        {display && <p className='mt-4 text-sm font-normal text-justify w-4/12 '><em>{overview}</em></p>}
        <div className='mt-3 flex justify-between'>

          <div className='mt-4'>
            <button className=' bg-white p-2 w-28 text-xl font-semibold text-black rounded-md mr-4 hover:bg-opacity-50' onClick={
              handleShowRandomMovie
            }>

             Suggest
            </button>
            <button className=' bg-gray-100 p-2 w-36 text-xl bg-opacity-30 
            rounded-md hover:bg-opacity-60' onClick={()=>{setDisplay(!display)}}>More Info</button>

            </div>
            <button className='mr-7 bg-gray-100 p-2 w-36 text-xl bg-opacity-30 
            rounded-md hover:bg-opacity-60' onClick={onOff}>Mute</button>

        </div>
    </div>
  )
}

export default VideoTitle;