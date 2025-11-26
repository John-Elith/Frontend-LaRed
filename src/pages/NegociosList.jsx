// src/pages/NegociosList.jsx
import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, Paper } from '@mui/material';
import { getAllNegocios } from '../api/negocios';

export default function NegociosList() {
  const [negocios, setNegocios] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getAllNegocios();
        setNegocios(res.data || res);
      } catch (err) {
        console.error(err);
        alert('Error cargando negocios');
      }
    })();
  }, []);

  return (
    <Container>
      <Typography variant="h5" mt={4}>Negocios</Typography>
      <Button variant="contained" href="/negocios/create" sx={{ mt: 2 }}>Nuevo Negocio</Button>
      <Paper sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Dirección</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {negocios.map(n => (
              <TableRow key={n.id}>
                <TableCell>{n.id}</TableCell>
                <TableCell>{n.nombre}</TableCell>
                <TableCell>{n.direccion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}
