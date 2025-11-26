// src/pages/PagosList.jsx
import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import { registrarPago } from '../api/pagos';


export default function PagosList() {
  const [creditoId, setCreditoId] = useState('');
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      await registrarPago({
        creditoId: Number(creditoId),
        montoPagado: Number(monto),
        fechaPago: fecha || new Date().toISOString()
      });
      alert('Pago registrado');
    } catch (err) {
      console.error(err);
      alert('Error registrando pago');
    }
  };

  return (
    <Container>
      <Typography variant="h5" mt={4}>Registrar Pago</Typography>
      <Paper sx={{ p: 2, mt: 2, maxWidth: 600 }}>
        <form onSubmit={submit}>
          <TextField label="CreditoId" fullWidth value={creditoId} onChange={e => setCreditoId(e.target.value)} sx={{ mb: 2 }} />
          <TextField label="Monto" fullWidth value={monto} onChange={e => setMonto(e.target.value)} sx={{ mb: 2 }} />
          <TextField label="Fecha" type="date" fullWidth value={fecha} onChange={e => setFecha(e.target.value)} sx={{ mb: 2 }} InputLabelProps={{ shrink: true }} // permite que el label flote bien
/>
          <Button variant="contained" type="submit">Registrar</Button>
        </form>
      </Paper>
    </Container>
  );
}


