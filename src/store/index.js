import { configureStore } from "@reduxjs/toolkit";
import mainCourseSlice from "./slices/mainCourseSlice";

export const store = configureStore({
    reducer: {
        mainCourseSlice,
    },
    devTools: true,
});
