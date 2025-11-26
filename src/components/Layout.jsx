// src/components/Layout.jsx
import React, { useContext } from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, CssBaseline, Drawer, List, ListItemButton, ListItemText, Divider, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const drawerWidth = 240;

export default function Layout() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Créditos La Red
          </Typography>
          {user && <Typography sx={{ mr: 2 }}>{user.username} ({user.role})</Typography>}
          <Button color="inherit" onClick={handleLogout}>Salir</Button>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
      }}>
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>            
            <ListItemButton component={Link} to="/">
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton component={Link} to="/clientes">
              <ListItemText primary="Clientes" />
            </ListItemButton>
            <ListItemButton component={Link} to="/pagos">
              <ListItemText primary="Pagos" />
            </ListItemButton>
            {user?.role === 'Admin' && (
              <>
                <Divider />
                <ListItemButton component={Link} to="/negocios">
                  <ListItemText primary="Negocios" />
                </ListItemButton>
                <ListItemButton component={Link} to="/usuarios/create">
                  <ListItemText primary="Crear Usuario" />
                </ListItemButton>
              </>
            )}
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
