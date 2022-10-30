import axios from "axios";

export const Instance = axios.create({
  baseURL:
    "https://silo9506-proxy.herokuapp.com/https://youtube.googleapis.com/youtube/v3",
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});

export const getVideosAndChannels = async (params) => {
  const videos = await Instance({
    url: "videos",
    params: {
      ...params,
      part: "snippet,statistics,contentDetails",
      maxResults: 16,
      method: "Get",
      regionCode: "Kr",
    },
  });

  const channelIds = [];
  await videos.data.items.map((video) => {
    const channelId = [video.snippet.channelId];
    return channelIds.push(channelId);
  });

  const channel = await Instance({
    url: "channels",
    params: {
      id: channelIds.join(),
      part: "snippet,statistics",
      maxResults: 16,
      method: "Get",
    },
  });

  const result = { videos: videos.data.items, channels: channel.data.items };

  return result;
};

export const getDetailVideosAndChannel = async (params) => {
  const video = await Instance({
    url: "videos",
    params: {
      ...params,
      part: "snippet,statistics,contentDetails",
      method: "Get",
    },
  });
  const channel = await Instance({
    url: "channels",
    params: {
      id: video.data.items[0].snippet.channelId,
      part: "snippet,statistics,contentDetails",
      method: "Get",
    },
  });

  const response = {
    video: video.data.items[0],
    channel: channel.data.items[0],
  };

  return response;
};

export const getSearchVideosAndChannel = async (params) => {
  const videos = await Instance({
    url: "search",
    params: {
      ...params,
      part: "snippet",
      maxResults: 16,
      method: "Get",
      type: "video",
      regionCode: "Kr",
    },
  });

  const videosids = [];
  const channelIds = [];
  await videos.data.items.map((video) => {
    const channelId = [video.snippet.channelId];
    const videosid = [video.id.videoId];
    return channelIds.push(channelId), videosids.push(videosid);
  });

  const channel = await Instance({
    url: "channels",
    params: {
      id: channelIds.join(),
      part: "snippet,statistics",
      maxResults: 16,
      method: "Get",
    },
  });

  const videosData = await Instance({
    url: "videos",
    params: {
      id: videosids.join(),
      part: "snippet,statistics,contentDetails",
      maxResults: 16,
      method: "Get",
      regionCode: "Kr",
    },
  });

  const result = {
    videos: videosData.data.items,
    channels: channel.data.items,
  };

  return result;
};
