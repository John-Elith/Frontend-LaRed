// src/context/AuthProvider.jsx
import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { login as apiLogin } from '../api/auth';
import { jwtDecode } from 'jwt-decode';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Carga el token del localStorage cuando inicia la app
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      try {
        const payload = jwtDecode(storedToken);
        setToken(storedToken);
        setUser({
          username: payload.sub || payload.Username || '',
          role: payload.role || payload.Role || payload.rol || 'User',
          userId: payload.UserId ? Number(payload.UserId) : null,
          negocioId: payload.NegocioId ? Number(payload.NegocioId) : null,
        });
      } catch (e) {
        console.warn('Token inválido o expirado:', e);
        localStorage.removeItem('token');
      }
    }
  }, []);

  // Login y almacenamiento del token
  const login = async (username, password) => {
    const response = await apiLogin(username, password);
    const tokenString = response.token || response.Token;
    localStorage.setItem('token', tokenString);
    setToken(tokenString);
    const payload = jwtDecode(tokenString);
    setUser({
      username: payload.sub || payload.Username || '',
      role: payload.role || payload.Role || payload.rol || 'User',
      userId: payload.UserId ? Number(payload.UserId) : null,
      negocioId: payload.NegocioId ? Number(payload.NegocioId) : null,
    });
    return response;
  };

  // Cierra sesión
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setToken(null);
  };

  // Proporciona los valores al resto de la app
  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
