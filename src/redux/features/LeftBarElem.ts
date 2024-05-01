import { createSlice } from "@reduxjs/toolkit";

const initialState = "Mi Piso";

export const currentLeftBarElementSlice = createSlice({
  name: "currentLeftBarElement",
  initialState,
  reducers: {
    setCurrentLeftBarElement: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setCurrentLeftBarElement } = currentLeftBarElementSlice.actions;
export default currentLeftBarElementSlice.reducer;
