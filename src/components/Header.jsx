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
    <div className="absolute bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-48 mx-14 " src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex mx-4 py-5">
          {gptSearch && (
            <select className="bg-gray-700 text-white rounded-md px-4 font-bold outline-none" onChange={handleSelect}>
              {SUPPORTED_LANGS.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-violet-900 text-white rounded-md px-4 mx-6 font-bold"
            onClick={handleSearchToggle}
          >
            {gptSearch ? "Home page" : "GPT Search"}
          </button>
          <img className="w-10 h-10" src={user?.photoURL} alt="user-logo" />

          <button className="text-white font-bold mx-2" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
