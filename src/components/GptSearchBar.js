import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
import {GET_DIFFERENT_MOVIES} from '../utils/constants'





const GptSearchBar = () => {

    const dispatch=useDispatch();
    const searchText=useRef(null);
    const langKey=useSelector(store=>store.config.lang)
    
    const searchMovieTMDB=async(movie)=>{
        

        const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS);

        const json=await data.json();

        return json.results

    }


    const handleGptSearchClick=async()=>{

      dispatch(addGptMovieResult({movieResults:null,movieNames:null}));

      const gptQuery= "Act as a Movie Recommendation system and suggest some movies for the query :" + searchText.current.value + ". only give me name of 5 best,latest and most rated movie, with comma seperated like the example result given ahead. Example Result: Stree 2 , Kill , Sanam Teri Kasam , Ashiqui 2 , Golmaal. ";

      const gptResults= await openai.chat.completions.create({
          messages: [{ role: 'user', content:gptQuery}],
            model: 'gpt-3.5-turbo',
          });

          const gptMovies=gptResults.choices[0]?.message?.content.split(",")

       const promiseArray=gptMovies.map(movie=>searchMovieTMDB(movie)) 

          const tmdbResults= await Promise.all(promiseArray)

          dispatch(addGptMovieResult({movieResults:tmdbResults,movieNames:gptMovies}));

    }

    const handleGPTMovies=async()=>{
      dispatch(addGptMovieResult({movieResults:null,movieNames:null}));

     let no= Math.floor((Math.random()*GET_DIFFERENT_MOVIES.length)+1);

      const gptQuery= GET_DIFFERENT_MOVIES[no];
      
      const gptResults= await openai.chat.completions.create({
        messages: [{ role: 'user', content:gptQuery}],
          model: 'gpt-3.5-turbo',
        });

        const gptMovies=gptResults.choices[0]?.message?.content.split(",")

        const promiseArray=gptMovies.map(movie=>searchMovieTMDB(movie)) 

        const tmdbResults= await Promise.all(promiseArray)

        dispatch(addGptMovieResult({movieResults:tmdbResults,movieNames:gptMovies}));

       

    }


  return (
    <div className='mt-[5%] flex justify-center'>
      
      <div className='bg-white bg-opacity-85 font-semibold text-lg text-white p-2 w-32 h-16 col-span-1 -ml-36  rounded-md mr-4 mt-5 border border-white hover:bg-opacity-90' ><button className='h-10 w-28 bg-purple-500 bg-opacity-70 mt-2 rounded-md hover:bg-opacity-90' onClick={handleGPTMovies}>GPT Movies</button></div>
        <form className='h-24 bg-black bg-opacity-90 w-1/2 grid grid-cols-12 rounded-md ' onSubmit={(e)=>{
          e.preventDefault();
        }}>
            <input ref={searchText} type=" text"className='p-2 m-4 col-span-9 rounded-md ' 
            placeholder={lang[langKey].gptSearchPlaceholder} 
            />
                <button className='col-span-3 my-4 mx-2 py-2 px-4 text-white bg-red-600 rounded-lg' onClick={handleGptSearchClick}>

                {lang[langKey].search}

                </button>
        </form>
       
    </div>
  )
}

export default GptSearchBar