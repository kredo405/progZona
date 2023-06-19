import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modules: [{ title: "", topics: [] }],
    info: {
        title: "",
        desc: "",
        mainImg: "",
        paragraph1: "",
        paragraph2: "",
        infoImg: "",
        lastText: "",
        lastImg: "",
    },
};

const mainCourseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        setModules(state, action) {
            state.modules = action.payload;
        },
        setInfo(state, action) {
            state.info = action.payload;
        },
    },
});

export const { setModules, setInfo } = mainCourseSlice.actions;
export default mainCourseSlice.reducer;
