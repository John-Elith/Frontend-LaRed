// src/api/pagos.js
import axios from './axiosInstance';


/**
 * Registrar un nuevo pago en el backend
 * @param {Object} pago - Datos del pago
 * @param {number} pago.creditoId - ID del crédito
 * @param {number} pago.montoPagado - Monto del pago
 * @param {string} pago.fechaPago - Fecha del pago (ISO o YYYY-MM-DD)
 */
export const registrarPago = async (pago) => {
  try {
    const res = await axios.post('/Pagos', pago);
    return res.data;
  } catch (error) {
    console.error('Error registrando pago:', error.response?.data || error.message);
    throw error;
  }
};

/**
 * Obtener los créditos asignados al usuario autenticado
 */
export const getMisCreditos = async () => {
  try {
    const res = await axios.get('/Pagos/mis-creditos');
    return res.data;
  } catch (error) {
    console.error('Error obteniendo créditos:', error.response?.data || error.message);
    throw error;
  }
};
