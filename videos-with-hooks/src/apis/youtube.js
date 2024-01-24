import axios from 'axios';

const KEY = 'AIzaSyCBkHru2g-5XeYyVdmKW_zmhEZ9SRRypC4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
