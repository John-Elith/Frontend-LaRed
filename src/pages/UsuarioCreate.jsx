// src/pages/UsuarioCreate.jsx
import React, { useEffect, useState } from 'react';
import { Container, TextField, Button, Paper, Typography, MenuItem } from '@mui/material';
import { createUsuario } from '../api/usuarios';
import { getAllNegocios } from '../api/negocios';
import { useNavigate } from 'react-router-dom';

export default function UsuarioCreate() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('User');
  const [negocioId, setNegocioId] = useState('');
  const [negocios, setNegocios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const r = await getAllNegocios();
      setNegocios(r.data || r);
    })();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await createUsuario({ userName, password, rol, negocioId: negocioId ? Number(negocioId) : null });
      alert('Usuario creado');
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Error creando usuario');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ mt: 4, p: 3 }}>
        <Typography variant="h6" mb={2}>Crear Usuario</Typography>
        <form onSubmit={submit}>
          <TextField label="Usuario" fullWidth value={userName} onChange={e => setUserName(e.target.value)} sx={{ mb: 2 }} />
          <TextField label="Contraseña" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} sx={{ mb: 2 }} />
          <TextField select label="Rol" fullWidth value={rol} onChange={e => setRol(e.target.value)} sx={{ mb: 2 }}>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="User">User</MenuItem>
          </TextField>

          <TextField select label="Asignar a Negocio (opcional)" fullWidth value={negocioId} onChange={e => setNegocioId(e.target.value)} sx={{ mb: 2 }}>
            <MenuItem value="">-- Ninguno --</MenuItem>
            {negocios.map(n => <MenuItem key={n.id} value={n.id}>{n.nombre}</MenuItem>)}
          </TextField>

          <Button variant="contained" type="submit">Crear</Button>
        </form>
      </Paper>
    </Container>
  );
}
