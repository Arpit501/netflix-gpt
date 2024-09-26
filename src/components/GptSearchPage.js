import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearchPage = () => {
  return (
    <div className='absolute h-screen w-screen overflow-x-hidden'>
      <div className="fixed -z-10 ">
        <img src={BG_URL} alt=""  className='h-[100%] w-[100%]'/>
        </div>
        <GptSearchBar/>

        <GptMovieSuggestions/>
        
    </div>
  )
}

export default GptSearchPage;