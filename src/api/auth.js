// src/api/auth.js
import axios from './axiosInstance';

// login (retorna token y expiración)
export const login = async (username, password) => {
  const resp = await axios.post('/Auth/login', { username, password });
  return resp.data;
};

// register (admin crea usuarios)
export const registerUser = async (userDto) => {
  const resp = await axios.post('/Auth/register', userDto);
  return resp.data;
};
