// src/pages/Login.jsx
import React, { useState, useContext } from 'react';
import { Container, Box, TextField, Button, Typography, Paper, Alert } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); 
    
    try {
      await login(username, password);
      navigate('/');
    } catch (err) {
      console.error('Error en login:', err);
            
      if (err.response) {
        switch (err.response.status) {
          case 401:
            setError('Usuario o contraseña incorrectos');
            break;
          case 500:
            setError('Error del servidor. Intenta más tarde');
            break;
          default:
            setError(err.response.data?.message || 'Error al iniciar sesión');
        }
      } else if (err.request) {
        setError('No se pudo conectar con el servidor. Verifica que esté corriendo en https://localhost:7065');
      } else {
        setError('Error inesperado: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 8, p: 4 }}>
        <Typography variant="h5" mb={2}>Iniciar sesión</Typography>
        
        
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        
        <form onSubmit={onSubmit}>
          <TextField 
            label="Usuario" 
            fullWidth 
            required
            value={username} 
            onChange={e => setUsername(e.target.value)} 
            sx={{ mb: 2 }}
            // CAMBIO 5: Deshabilitar durante la carga
            disabled={loading}
          />
          <TextField 
            label="Contraseña" 
            fullWidth 
            type="password" 
            required
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            sx={{ mb: 2 }}
            disabled={loading}
          />
          <Button 
            variant="contained" 
            type="submit" 
            disabled={loading} 
            fullWidth
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
