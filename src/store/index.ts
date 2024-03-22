import { configureStore } from "@reduxjs/toolkit";
import mainCourseSlice from "./slices/mainCourseSlice";
import verticalMenuSlice from "./slices/verticalMenuSlice";

export const store = configureStore({
    reducer: {
        mainCourse: mainCourseSlice,
        verticalMenu: verticalMenuSlice,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
