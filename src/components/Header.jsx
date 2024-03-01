/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user
        dispatch(addUser(
          {
            uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL
          }
        ))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });
  },[])




  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch(() => {
        // An error happened.
        navigate('/error')
      });
  };
  return (
    <div className="absolute bg-gradient-to-b from-black w-full flex justify-between">
      <img
        className="w-48 mx-14 my-2 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {
        user &&
      <div className="flex mx-4">
        <img
          className="w-10 h-10 my-10"
          src={user?.photoURL}
          alt="user-logo"
        />
        <button className="text-white font-bold mx-2" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
      }
    </div>
  );
};

export default Header;
