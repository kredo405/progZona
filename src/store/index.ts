import { configureStore } from "@reduxjs/toolkit";
import mainCourseSlice from "./slices/mainCourseSlice";
import verticalMenuSlice from "./slices/verticalMenuSlice";
import lessonSlice from "./slices/lessonSlice";

export const store = configureStore({
    reducer: {
        mainCourse: mainCourseSlice,
        verticalMenu: verticalMenuSlice,
        lessonSlice: lessonSlice,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
