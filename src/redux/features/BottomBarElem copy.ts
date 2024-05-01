import { createSlice } from "@reduxjs/toolkit";

const initialState = "Mi Piso";

export const currentBottomBarElementSlice = createSlice({
  name: "currentBottomBarElement",
  initialState,
  reducers: {
    setCurrentBottomBarElement: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setCurrentBottomBarElement } = currentBottomBarElementSlice.actions;
export default currentBottomBarElementSlice.reducer;
