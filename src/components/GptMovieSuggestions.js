import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import Shimmer from './Shimmer'


const GptMovieSuggestions = () => {

  const {movieResults,movieNames}=useSelector(store=>store.gpt);

  if(movieNames==="first" && movieResults==="first")
  {
     return <Shimmer showShimmer="first"/>
  }

  if(!movieNames && !movieResults) return <Shimmer showShimmer={true}/>;

  return(
    
      
        <div className='my-4 p-4 bg-black text-white bg-opacity-70 w-[90%] mx-auto ' >
    
      <div>
        { movieNames.map((movieName,index)=>(<MovieList key={index} 
        
        title={movieName} 
        movies={movieResults[index]}/>
      
        ))}
        
      </div>
    </div>
  )

}

export default GptMovieSuggestions