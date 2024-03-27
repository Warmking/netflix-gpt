/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import { removeNowPlayingMovies } from "../utils/movieSlice";
import { toggleGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGS } from "../utils/constants";
import { addLanguageKey } from "../utils/langConfigSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const gptSearch = useSelector((state) => state.gpt.gptSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const browse = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        dispatch(removeNowPlayingMovies());
        navigate("/");
      }
    });
    return () => {
      browse();
    };
  }, []);
  const handleSearchToggle = () => {
    dispatch(toggleGptSearch());
  };
  const handleSelect = (e) => {
    dispatch(addLanguageKey(e.target.value))
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch(() => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-screen flex flex-row justify-between">
      <img className="md:w-48 w-[100px] mx-3  md:mx-14 object-cover" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex md:mx-4 md:py-5 py-3">
          {gptSearch && (
            <select className="bg-gray-950 text-white rounded-md md:px-4 px-1 py-1 text-xs md:text-lg font-bold outline-none mx-2" onChange={handleSelect}>
              {SUPPORTED_LANGS.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="hidden md:block bg-violet-900 text-white rounded-md md:px-4 mx-6 font-bold md:text-lg text-xs px-2"
            onClick={handleSearchToggle}
          >
            {gptSearch ? "Home page" : "GPT Search"}
          </button>
          <button
            className="bg-slate-950 mx-1 text-white rounded-md font-bold md:text-lg text-xs px-2 md:hidden"
            onClick={handleSearchToggle}
          >
            {gptSearch ? "🏡" : "GPT 🔍"}
          </button>
          <img className="w-10 h-10 hidden md:inline-block rounded-md" src={user?.photoURL} alt="user-logo" />

          <button className="text-red-800 font-bold mx-2 bg-slate-300 md:bg-transparent md:text-lg text-sm px-2 rounded-lg md:px-0 md:block hidden" onClick={handleSignOut}>
            Sign Out
          </button>
          <button className="text-red-800 font-bold bg-slate-950 text-sm px-2 rounded-lg md:hidden py-1" onClick={handleSignOut}>
          <FontAwesomeIcon icon={faPowerOff} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
