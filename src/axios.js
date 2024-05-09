import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://foreignbasket-project-backend.vercel.app/',
});

export default instance;
