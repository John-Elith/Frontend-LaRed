// src/pages/ClienteCreate.jsx
import React, { useState } from 'react';
import { Container, TextField, Button, Paper, Typography, Alert } from '@mui/material';
import { createCliente } from '../api/clientes';
import { useNavigate } from 'react-router-dom';

export default function ClienteCreate() {
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [error, setError] = useState(''); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
        
    if (!cedula.trim() || !nombre.trim()) {
      setError('Cédula y nombre son obligatorios');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      await createCliente({ 
        cedula: cedula.trim(), 
        nombre: nombre.trim(), 
        telefono: telefono.trim(), 
        direccion: direccion.trim(), 
        descripcion: descripcion.trim() 
      });
      navigate('/clientes');
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Error creando cliente');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ mt: 4, p: 3 }}>
        <Typography variant="h6" mb={2}>Crear Cliente</Typography>
                
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        
        <form onSubmit={onSubmit}>
          <TextField 
            label="Cédula" 
            fullWidth 
            required
            value={cedula} 
            onChange={e => setCedula(e.target.value)} 
            sx={{ mb: 2 }} 
          />
          <TextField 
            label="Nombre" 
            fullWidth 
            required
            value={nombre} 
            onChange={e => setNombre(e.target.value)} 
            sx={{ mb: 2 }} 
          />
          <TextField 
            label="Teléfono" 
            fullWidth 
            type="tel"
            value={telefono} 
            onChange={e => setTelefono(e.target.value)} 
            sx={{ mb: 2 }} 
          />
          <TextField 
            label="Dirección" 
            fullWidth 
            value={direccion} 
            onChange={e => setDireccion(e.target.value)} 
            sx={{ mb: 2 }} 
          />
          <TextField 
            label="Descripción" 
            fullWidth 
            multiline 
            rows={3} 
            value={descripcion} 
            onChange={e => setDescripcion(e.target.value)} 
            sx={{ mb: 2 }} 
          />
          <Button variant="contained" type="submit" disabled={loading}>
            {loading ? 'Guardando...' : 'Guardar'}
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
