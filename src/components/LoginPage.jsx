import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BG_IMG, PHOTO_URL } from "../utils/constants";

const LoginPage = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef();
  const handleButtonClick = () => {
    setSignIn(!signIn);
  };
  const handleSignIn = () => {
    const message = validate(email.current.value, password.current.value);
    setErrorMsg(message);
    if (message) return;
    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: displayName.current.value,
            photoURL: PHOTO_URL,
          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMsg(error);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + errorMessage);
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          // Signed in
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    }
  };

  return (
    <div className="bg-gradient-to-r from-black w-screen h-svh md:h-full  aspect-video text-sm md:text-lg">
      <div className="relative">
        <Header />
        <img className="opacity-100 absolute -z-10 object-cover h-screen md:h-auto" src={BG_IMG} alt="background-img" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="p-4 border bg-black bg-opacity-90 md:w-96  absolute md:top-[25%] md:right-[35%] top-[15%] right-[11%] border-black rounded-2xl"
      >
        <h1 className="md:text-4xl p-1 text-xl mx-2 md:my-4 z-1 text-white font-bold ">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            ref={displayName}
            className="block md:p-4 mx-2 px-2 py-1 md:my-4 my-2 border border-gray-700 rounded-lg md:w-80 bg-black text-white outline-none"
            placeholder="Full Name"
            type="text"
          />
        )}
        <input
          ref={email}
          className="block md:p-4 mx-2 px-2 py-1 md:my-4 my-2 border border-gray-700 rounded-lg md:w-80 bg-black text-white outline-none"
          placeholder="Email or Phone Number"
          type="text"
        />
        <input
          ref={password}
          className="block md:p-4 mx-2 px-2 py-1 md:my-4 my-2 border border-gray-700 rounded-lg md:w-80 bg-black text-white outline-none"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-600 font-bold mx-2">{errorMsg}</p>
        <button
          className="bg-red-500 text-white block md:p-4 mx-2 md:my-6 my-3 py-1 px-2 md:w-80 rounded-lg text-center hover:bg-red-700"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <p className="text-white text-center pb-6">Forgot password?</p>
        <p className="text-white">
          <check></check> Remember Me
        </p>
        {signIn ? (
          <>
            {" "}
            <p className="text-white inline">New to Netflix? </p>
            <button
              className="text-white font-bold hover:underline"
              onClick={handleButtonClick}
            >
              Sign up now.
            </button>
          </>
        ) : (
          <>
            {" "}
            <p className="text-white inline">Alrady have one? </p>
            <button
              className="text-white font-bold hover:underline"
              onClick={handleButtonClick}
            >
              Sign In now.
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
