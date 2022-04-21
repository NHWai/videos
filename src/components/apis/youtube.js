import axios from "axios";

const KEY = "AIzaSyCPY53-TVyFCZGEbazg-4M6JlY6HzcDRrA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
