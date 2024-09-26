import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({title,movies}) => {
  
  if(!movies) return;
  return (
    <div className='px-6 w-screen my-6'>
        <h1 className='text-2xl text-white py-1 pl-3'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar'>
        <div className='flex '>
        {movies.map(movie=><MovieCard title={movie.title} overview={movie.overview} key={movie?.id} movieId={movie?.id} poster_path={movie.poster_path}/>) }
        </div>
        </div>
        
    </div>
  )
}

export default MovieList