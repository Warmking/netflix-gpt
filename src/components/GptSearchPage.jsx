import { BG_IMG } from "../utils/constants";
import GptMovieSuggetions from "./GptMovieSuggetions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div className="bg-gradient-to-r  from-black md:aspect-video h-svh md:h-full opacity-98">
      <div className="-z-10 fixed">
        <img className="h-screen object-cover md:h-auto" alt="background image" src={BG_IMG} />
      </div>

      <div className="">
        <GptSearchBar />
        {/* gptMovieSuggetions // */}
        <GptMovieSuggetions />
      </div>
    </div>
  );
};

export default GptSearchPage;
