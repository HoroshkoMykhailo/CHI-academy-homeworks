import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

const Sidebar = ({width}) => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{ width: width, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: width, boxSizing: 'border-box' } }}
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
    </Drawer>
  );
};

export default Sidebar;
