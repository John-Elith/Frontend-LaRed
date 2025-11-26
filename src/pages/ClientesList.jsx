// src/pages/ClientesList.jsx
import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, Paper, Box, Alert } from '@mui/material';
import { getAllClientes } from '../api/clientes';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ClientesList() {
  const [clientes, setClientes] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        setLoading(true);
        const data = await getAllClientes();
        setClientes(data.Data || []);
        setError('');
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || 'Error cargando clientes');
      } finally {
        setLoading(false);
      }
    };

    fetchClientes();
  }, [location.pathname]);

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Typography variant="h5">Clientes</Typography>
        <Button variant="contained" onClick={() => navigate('/clientes/create')}>
          Nuevo Cliente
        </Button>
      </Box>
      
      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
      
      {loading ? (
        <Typography sx={{ mt: 2 }}>Cargando...</Typography>
      ) : (
        <Paper sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Cédula</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Teléfono</TableCell>
                <TableCell>Dirección</TableCell>
                <TableCell>Descripción</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clientes.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No hay clientes registrados
                  </TableCell>
                </TableRow>
              ) : (
                clientes.map(c => (
                  <TableRow key={c.Id}>
                    <TableCell>{c.Cedula}</TableCell>
                    <TableCell>{c.Nombre}</TableCell>
                    <TableCell>{c.Telefono}</TableCell>
                    <TableCell>{c.Direccion}</TableCell>
                    <TableCell>{c.Descripcion}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </Paper>
      )}
    </Container>
  );
}
