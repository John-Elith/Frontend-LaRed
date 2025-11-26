// ✅ MEJOR PRÁCTICA - src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ClientesList from './pages/ClientesList';
import ClienteCreate from './pages/ClienteCreate';
import NegociosList from './pages/NegociosList';
import UsuarioCreate from './pages/UsuarioCreate';
import PagosList from './pages/PagosList';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';

export default function App() {
  return (
    <Routes>
      {/* Ruta pública */}
      <Route path="/login" element={<Login />} />

      {/* MEJORA: Layout como ruta padre con rutas hijas anidadas */}
      <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clientes" element={<ClientesList />} />
        <Route path="/clientes/create" element={<PrivateRoute roles={['Admin','User']}><ClienteCreate /></PrivateRoute>} />
        <Route path="/negocios" element={<PrivateRoute roles={['Admin']}><NegociosList /></PrivateRoute>} />
        <Route path="/usuarios/create" element={<PrivateRoute roles={['Admin']}><UsuarioCreate /></PrivateRoute>} />
        <Route path="/pagos" element={<PrivateRoute roles={['Admin','User']}><PagosList /></PrivateRoute>} />
        <Route path="*" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
