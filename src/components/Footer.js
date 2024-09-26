import React from 'react'
import facebook from "../social image/facebook.png"
import youtube from  "../social image/youtube.png"
import instagram from  "../social image/instagram.png"
import twitter from  "../social image/twitter.png"

const Footer = ({diff}) => {

  
  return(
    <div className='w-[100%] h-[60vh] absolute text-[#f0f0f0] bg-black -bottom-[330px] text-sm bg-opacity-95' >

      <div className='flex ml-32 mt-10'>
        <img src={facebook} alt="" className='w-8 h-8 m-5'/>
        <img src={instagram} alt="" className='w-8 h-8 m-5 '/>
        <img src={twitter} alt="" className='w-8 h-8 m-5'/>
        <img src={youtube} alt="" className='w-8 h-8 m-5'/>
        {/* <p>hello</p> */}
      </div>
      <div className=' text-white ml-14 mt-4 '>
        <span className='m-20'>Audio Description</span>
        <span className='m-20'>Help Centre</span>
        <span className='m-20'>Gift Cards</span>
        <span className='m-20'>Media Centre</span>
      </div>

      <div className=' text-white ml-14 mt-4'>
        <span className='m-20'>Investor Relations</span>
        <span className='m-24'>Jobs</span>
        <span className='m-[90px]'>Terms of Use</span>
        <span className='m-20'>Privacy</span>
      </div>

      <div className=' text-white ml-14 mt-4'>
        <span className='m-20'>Legal Notices</span>
        <span className='m-20'>Cookie Preferences</span>
        <span className='m-12'>Corporate information</span>
        <span className='m-16'>Contact us</span>
      </div>
      <button className='ml-[132px] mt-4 border border-white p-2 '>Service code</button>
      <p className='ml-32 mt-2'>&copy;Developed by Arpit Singhal</p>
    </div>
  )
}

export default Footer