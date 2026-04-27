import axios from 'axios';

// REMPLACE PAR TON IP (Trouve-la avec 'ipconfig' sur Windows ou 'ifconfig' sur Mac/linux)
const BASE_URL = process.env.EXPO_PUBLIC_API_URL; 

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export default api;