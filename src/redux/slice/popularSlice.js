const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { getVideosAndChannels } = require("../../data/api");

export const getPopularVideos = createAsyncThunk(
  "popularMovie/getPopular",
  getVideosAndChannels
);

const initialState = {
  popularVideos: {
    videos: [],
    channels: [],
    loading: [true],
  },
};

const popularSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopularVideos.pending, (state, actions) => {
      state.loading = true;
    });
    builder.addCase(getPopularVideos.fulfilled, (state, actions) => {
      state.popularVideos = actions.payload;
      state.loading = false;
    });
    builder.addCase(getPopularVideos.rejected, (state, actions) => {
      console.log(actions, "오류");
    });
  },
});

export default popularSlice.reducer;
