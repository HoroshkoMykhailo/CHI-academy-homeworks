import React from 'react';
import { useContext } from 'react';
import { Drawer, List, ListItemText, ListItemIcon, ListItemButton, Switch, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import { sidebarWidth } from '../../constants/sidebarWidth';
import { ThemeSwitch } from '../components';
import { ThemeContext } from '../../providers/themeProvider';

const Sidebar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{ width: sidebarWidth, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: sidebarWidth, boxSizing: 'border-box' } }}
    >

      <List>
        <ListItemButton component={Link} to="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton component={Link} to="/heroes">
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Heroes" />
        </ListItemButton>
        <ListItemButton component={Link} to="/about">
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <ListItemText primary="About" />
        </ListItemButton>
      </List>

      <Box sx={{ mt: 'auto', p: 2 }}>
        <ThemeSwitch checked={isDarkMode} onChange={toggleTheme} />
      </Box>
    </Drawer>
  );
};

export { Sidebar };
