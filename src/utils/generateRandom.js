import React from 'react'

const generateRandom = (AllMovies) => {

   let len= AllMovies.length;

   let randomNumber=Math.floor((Math.random()*len)+1);
    
    return randomNumber;
}

export default generateRandom;