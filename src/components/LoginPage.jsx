import { useState } from "react";
import Header from "./Header";

const LoginPage = () => {
  const [signIn, setSignIn] = useState(true);
  const handleButtonClick = (e) => {
    e.preventDefault()
    setSignIn(!signIn);
  };

  return (
    <div className="">
      <div className="relative">
        <Header />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/68483501-f27e-4794-a811-e86fa2e3a25f/US-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="p-4 border bg-black opacity-90 w-96 absolute top-[25%] right-[40%] border-black rounded-2xl">
        <h1 className="text-4xl p-1 mx-2  my-4 z-1 text-white font-bold ">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            className="block p-4 mx-2  my-4 border border-gray-100 rounded-lg w-80 bg-black text-white outline-none"
            placeholder="Full Name"
            type="text"
          />
        )}
        <input
          className="block p-4 mx-2  my-4 border border-gray-100 rounded-lg w-80 bg-black text-white outline-none"
          placeholder="Email or Phone Number"
          type="text"
        />
        <input
          className="block p-4 mx-2  my-4 border border-gray-100 rounded-lg w-80 bg-black text-white outline-none"
          type="password"
          placeholder="Password"
        />
        <button className="bg-red-500 text-white block py-2 px-4 mx-2  my-4 w-80 rounded-lg text-center hover:bg-red-700 bg-opacity-100 relative z-10">
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
