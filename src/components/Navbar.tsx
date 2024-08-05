import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);     
                                                   
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'Patients', path: '/patients' },
    { text: 'About', path: '/about' },
  ];

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            ahsani313
          </Typography>
          <div className="nav-links">
            {navLinks.map((link) => (
              <Button color="inherit" key={link.text} component={Link} to={link.path}>
                {link.text}
              </Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem  key={link.text} component={Link} to={link.path}>
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
             



