import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID dmpOASoc5c2pBLqZJCgkqs7HuaqR_buM4ZEkAUu73mM'
  }
});
