// src/api/axiosInstance.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://localhost:7065/api';

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});


instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


instance.interceptors.response.use(

  (response) => response,
  
  
  (error) => {
    if (error.response?.status === 401 && !error.config.url.includes('/Auth/login')) {
      
      console.warn('Sesión expirada. Redirigiendo al login...');
      localStorage.removeItem('token');
      
      
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    
    
    return Promise.reject(error);
  }
);

export default instance;
