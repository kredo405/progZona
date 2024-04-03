import { createSlice } from "@reduxjs/toolkit";

interface LessonState {
    finishDialog: boolean;
}

const initialState : LessonState = {
    finishDialog: false,
};

const lessonSlice = createSlice({
    name: "lesson",
    initialState,
    reducers: {
        setfinishDialog(state, action) {
            state.finishDialog = action.payload;
        },
       
    },
});

export const { setfinishDialog } = lessonSlice.actions;
export default lessonSlice.reducer;
