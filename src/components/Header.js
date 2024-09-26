
import HeaderforBrowse from "./HeaderforBrowse"
import { useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice"
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";

const Header=({showWhere})=>{

    const dispatch=useDispatch();
    const navigate=useNavigate();
    
   useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName,photoURL} = user ;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                navigate("/browse")
            } else {

              dispatch(removeUser());
              navigate("/")
            }
          });

          return ()=> unsubscribe();
    },[])

    return showWhere?
        (<div className="absolute bg-gradient-to-b w-[100%] from-black px-28 py-0.5 z-10">
            <img className="w-48 " src={LOGO} alt="Logo"/>
        </div>):<HeaderforBrowse/>
}

export default Header;