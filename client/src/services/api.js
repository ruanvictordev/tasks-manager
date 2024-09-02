import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tasks-manager-api-kbet.onrender.com/api',
    withCredentials: true
});

axios.defaults.withCredentials = true;

export default api