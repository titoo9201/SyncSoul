
import axios from 'axios';
const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true, // send cookies when backend sets them
});

export default instance;
