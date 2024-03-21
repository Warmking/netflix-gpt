import { BG_IMG } from "../utils/constants";
import GptMovieSuggetions from "./GptMovieSuggetions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div className="bg-gradient-to-r from-black aspect-video opacity-98">
      <div className="-z-10 fixed">
        <img className="object-cover" alt="background image" src={BG_IMG} />
      </div>

      <div>
        <GptSearchBar />
        {/* gptMovieSuggetions // */}
        <GptMovieSuggetions />
      </div>
    </div>
  );
};

export default GptSearchPage;
