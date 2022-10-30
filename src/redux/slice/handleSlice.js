import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSidebar: false,
  moredetails: false,
};

const handleSlice = createSlice({
  name: "handle",
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.showSidebar = !state.showSidebar;
    },
    toggledetails: (state, action) => {
      state.moredetails = !state.moredetails;
    },
  },
});

export const handlesliceAtion = handleSlice.actions;
export default handleSlice.reducer;
