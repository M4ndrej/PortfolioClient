import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://portfolioserver-production-aee2.up.railway.app/api/', 
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
  });

export default axiosClient;
