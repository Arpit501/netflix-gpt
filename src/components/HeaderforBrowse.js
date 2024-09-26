
import {auth} from "../utils/firebase"
import {signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANAGUAGES, USER_AVATAR1 } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { useState } from "react";

const HeaderforBrowse=()=>{

    const user=useSelector( store=>store.user);
    const dispatch=useDispatch();
    const showGptSearch=useSelector(store=>store.gpt.showGptSearch)

    const handleSignOut=()=>{
        signOut(auth).then(() => {

          }).catch((error) => {

          });
          
    }

    const[toggleBtn,setToggleBtn]=useState(false);

    const handleToggleSignOut=()=>{
        setToggleBtn(!toggleBtn);
    }

    const handleGptSearchClick=()=>{
            dispatch(toggleGptSearchView())
    }

    const handleLanguageChange=(e)=>{
        dispatch(changeLanguage(e.target.value))
    }

    return(

        <div className="z-10 absolute bg-gradient-to-b from-black h-16 px-8 py-0.5 flex justify-between w-screen ">
            <img className="w-32 " src={LOGO} alt="Logo" />

            <div className="flex p-2 items-center ">


               {showGptSearch && (<select name="" id="" className="p-2 text-white bg-black bg-opacity-90 mr-1" onChange={handleLanguageChange}>

                    {SUPPORTED_LANAGUAGES.map(langauge=><option key={langauge.identifier} value={langauge.identifier} className="bg-black bg-opacity-90">{langauge.name}</option>)} 

                </select>
                )}

                <button className="py-2 px-4 mx-4 my-2 shadow-inner font-semibold text-white bg-purple-700 rounded-lg"
                onClick={handleGptSearchClick}
                >
                 { showGptSearch?"Homepage":"GPT Search"}
                </button>

                <img className="w-10 h-10 hover:border border-white" src={user?.photoURL} alt="usericon" onClick={handleToggleSignOut} />

               {toggleBtn?(<div className="absolute top-16 right-9 w-40 h-52 bg-white bg-opacity-50 rounded-md shadow-xl hover:bg-gradient-to-t from-100% from-black">

                <div className="flex items-center">
                <img className="w-8 h-8 m-2 hover:border border-white" src={USER_AVATAR1} alt="usericon"/>
                <span className=" text-white font-semibold text-lg font-sans mr-1 cursor-pointer hover:text-black">{user && user.displayName}</span>
                </div>
                <hr className="bg-black" />

                <div className="flex mt-1 ">
                    <i className="font-semibold text-sm text-white  bg-white bg-opacity-20 rounded-md m-2 p-2 shadow-lg ">Welcome to NetflixGPT! Enjoy Movies!</i>
                </div>

                <div className="flex justify-center mt-1 ">

                <button className="font-semibold text-white  bg-white bg-opacity-20 rounded-md p-2  shadow-lg" onClick={handleSignOut}><i>Sign Out of Netflix</i></button>
                </div>

                </div>):""}
            </div>
        </div>
    )

}

export default HeaderforBrowse;