import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langSupport";
import { GEMINI_API_KEY, OPTIONS } from "../utils/constants";
import { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { addMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch()
  const langKey = useSelector((state) => state.langConfig.langKey);
  const searchText = useRef();

  const tmdbMovieSearch = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=true&language=en-US&page=1",OPTIONS)
    const json = await data.json()
    return json.results
  }

  const handleGptSearch = async () => {
    const promt =
      "act as movie recommendation system and give the five movies name from the following query :" +
      searchText.current.value +
      " and give the results in comma separated as example ahead example - raja, avatar, rajendra gajendra, f2, khaleja";
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

    const gptSearch = async () => {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(promt);
      const response = await result.response;
      const text = response.text();
      const gptMovies = text.split(', ')
      
      const promiseResults = gptMovies.map(movie => tmdbMovieSearch(movie) )

      const tmdbResults = await Promise.all(promiseResults)
      console.log(tmdbResults);
      console.log(gptMovies);
      dispatch(
        addMovies({movieNames:gptMovies,movieResults:tmdbResults}))
    };

    gptSearch();
  };
  return (
    <div className="pt-[10%]  flex justify-center">

      <form
        className="bg-black grid grid-cols-12 w-1/2 rounded-lg "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          className="py-2 px-4 m-4 col-span-9 rounded-md outline-none"
          type="text"
          placeholder={lang[langKey].gptPlaceHolder}
        />
        <button
          className="px-2 py-2 m-4 bg-red-800 text-white col-span-3 rounded-lg font-bold"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
