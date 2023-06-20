import { configureStore } from "@reduxjs/toolkit";
import mainCourseSlice from "./slices/mainCourseSlice";
import verticalMenuSlice from "./slices/verticalMenuSlice";

export const store = configureStore({
    reducer: {
        mainCourseSlice,
        verticalMenuSlice,
    },
    devTools: true,
});
