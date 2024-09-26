import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailor from '../hooks/useMovieTrailor';


const VideoBackground = ({movieId}) => {

  const trailorVideo=useSelector(store=>store.movies?.trailorVideo)
  const isMute=useSelector(store=>store.movies?.mute)
  const MovieVideo=useSelector(store=>store.movies?.MovieVideo)

  useMovieTrailor(movieId);
  

  return (
     <div className='-mt-24 '>

    {MovieVideo? (<iframe className='w-screen aspect-video '
       src={"https://www.youtube.com/embed/"+MovieVideo?.key+"?autoplay=1&controls=0&loop=1"+isMute+"&playlist="+MovieVideo?.key+"&rel=0&modestbranding=1&vq=hd1080"} 
        title="YouTube video player"  
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
       allowFullScreen="allowFullScreen"
        ></iframe>):(<iframe className='w-screen aspect-video '
          src={"https://www.youtube.com/embed/"+trailorVideo?.key+"?autoplay=1&controls=0&loop=1"+isMute+"&playlist="+trailorVideo?.key+"&rel=0&modestbranding=1&vq=hd1080"} 
           title="YouTube video player"  
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen="allowFullScreen"
           ></iframe>)
    } 

        <div className='relative w-screen bg-white bg-opacity-15 bg-gradient-to-b from-black h-24 -mt-24'></div>


      </div>
  )
}

export default VideoBackground

