import React from 'react'

const Shimmer = ({showShimmer}) => {
  return showShimmer===true?
    (<div className='my-4 p-4 bg-black text-white bg-opacity-70 w-[90%] mx-auto h-[100vh]'>
      <p>Please wait Loading...</p>
      </div>):showShimmer==="first"?(<div className='my-4 p-4 bg-black text-white bg-opacity-70 w-[90%] mx-auto'>
      <p>Explore our GPT Movies option or start searching now to find your next favorite film!</p>
      </div>):(<div className=''>
      <p>Please wait Loading...</p>
      </div>)
  
}

export default Shimmer