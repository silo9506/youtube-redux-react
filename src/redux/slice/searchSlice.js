import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSearchVideosAndChannel } from "../../data/api";

export const getSearchVideos = createAsyncThunk(
  "detail/getSearchVideos",
  getSearchVideosAndChannel
);

const initialState = {
  loading: true,
  result: {},
  params: "",
  data: { videos: [], channels: [] },
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    change: (state, actions) => {
      state.params = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSearchVideos.pending, (state, actions) => {
      state.loading = true;
    });
    builder.addCase(getSearchVideos.fulfilled, (state, actions) => {
      state.data = actions.payload;
      state.loading = false;
    });
    builder.addCase(getSearchVideos.rejected, (state, actions) => {
      console.log(actions, "오류");
    });
  },
});

export const searchAction = searchSlice.actions;
export default searchSlice.reducer;
