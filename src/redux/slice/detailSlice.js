import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDetailVideosAndChannel } from "../../data/api";
export const getDetailVideos = createAsyncThunk(
  "detail/getDetailVideos",
  getDetailVideosAndChannel
);

const initialState = {
  value: {
    video: {},
    channel: {},
  },
  loading: true,
};
const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetailVideos.pending, (state, actions) => {
      state.loading = true;
    });
    builder.addCase(getDetailVideos.fulfilled, (state, actions) => {
      state.value = actions.payload;
      state.loading = false;
    });
    builder.addCase(getDetailVideos.rejected, (state, actions) => {
      console.log(actions, "오류");
    });
  },
});

export default detailSlice.reducer;
