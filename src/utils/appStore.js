import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import langConfigReducer from "./langConfigSlice";

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
        gpt:gptReducer,
        langConfig:langConfigReducer
    }
})

export default appStore