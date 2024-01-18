import axios from 'axios';

const KEY = 'AIzaSyDETRPDMXqDpyKcKQu98LwGO2OHtSOQNTY';

export default axios.create({
  baseURL: 'GET https://www.googleapis.com/youtube/v3/search',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
