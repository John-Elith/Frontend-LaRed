// src/api/clientes.js
import axios from './axiosInstance';

export const getAllClientes = async () => {
  const resp = await axios.get('/Clientes');
  return resp.data; 
};

export const getClienteById = async (id) => {
  const resp = await axios.get(`/Clientes/${id}`);
  return resp.data;
};

export const createCliente = async (dto) => {
  const resp = await axios.post('/Clientes', dto);
  return resp.data;
};
