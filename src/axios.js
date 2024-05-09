import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://foreignbasket-project-backend-c1u2irmol.vercel.app/',
});

export default instance;
