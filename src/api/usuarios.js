// src/api/usuarios.js
import axios from './axiosInstance';

export const createUsuario = async (dto) => {
  const resp = await axios.post('/Auth/register', dto);
  return resp.data;
};