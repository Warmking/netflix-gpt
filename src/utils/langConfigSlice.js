import { createSlice } from "@reduxjs/toolkit";

const langConfigSlice = createSlice({
    name:"langConfig",
    initialState:{
        langKey:"en"
    },
    reducers:{
        addLanguageKey : (state,action) => {
            state.langKey = action.payload
        }
    }
})

export const {addLanguageKey} = langConfigSlice.actions
export default langConfigSlice.reducer