// src/api/negocios.js
import axios from './axiosInstance';

export const getAllNegocios = async () => {
  const resp = await axios.get('/Negocios');
  return resp.data;
};

export const createNegocio = async (dto) => {
  const resp = await axios.post('/Negocios', dto);
  return resp.data;
};
