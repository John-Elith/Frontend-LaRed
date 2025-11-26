// ✅ CORRECTO para MUI v6+ - src/pages/Dashboard.jsx
import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
// NOTA: Grid ya viene actualizado a v2 en MUI v6+, no necesitas cambiar la importación

export default function Dashboard() {
  return (
    <Container>
      <Typography variant="h4" mt={4} mb={2}>Panel</Typography>
      
      {/* CAMBIO 1: Grid container permanece igual */}
      <Grid container spacing={2}>
        {/* CAMBIO 2: Eliminar "item" prop - ya no es necesario */}
        {/* CAMBIO 3: Reemplazar xs={12} md={4} con size={{ xs: 12, md: 4 }} */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 2 }}>Resumen clientes</Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 2 }}>Resumen créditos</Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 2 }}>Alertas mora</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
