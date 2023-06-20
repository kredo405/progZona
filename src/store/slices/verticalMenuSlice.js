import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false,
};

const verticalMenuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setShow(state, action) {
            state.show = action.payload;
        },
    },
});

export const { setShow } = verticalMenuSlice.actions;
export default verticalMenuSlice.reducer;
