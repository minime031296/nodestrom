import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Box className="navbox">
        <Box className="navsubbox">
          <Link to="/new"><Typography className="a">New</Typography></Link>
        </Box>
        <Box className="navsubbox">
          <Link to="/sales"><Typography className="a"  id="a" >Sales</Typography></Link>
        </Box>
        <Box className="navsubbox">
          <Link to="/women"><Typography className="a">Women</Typography></Link>
        </Box>
        <Box className="navsubbox">
          <Link to="/men"><Typography className="a">Men</Typography></Link>
        </Box>
        <Box className="navsubbox">
          <Link to="/kids"><Typography className="a">Kids</Typography></Link>
        </Box>
        <Box className="navsubbox">
          <Link to="/designer"><Typography className="a">Designer</Typography></Link>
        </Box>
        <Box className="navsubbox">
          <Link to="/shoes"><Typography className="a">Shoes</Typography></Link>
        </Box>  
        <Box className="navsubbox">
          <Link to="/accessories"><Typography className="a">Accessories</Typography></Link>
        </Box>
        <Box className="navsubbox">
          <Link to="/home"><Typography className="a">Home</Typography></Link>
        </Box>
        <Box className="navsubbox">
          <Link to="/beauty"><Typography className="a">Beauty</Typography></Link>
        </Box>
        <Box className="navsubbox">
          <Link to="/gifts"><Typography className="a">Gifts</Typography></Link>
        </Box>
        <Box className="navsubbox">
          <Link to="/explore"><Typography className="a">Explore</Typography></Link>
        </Box>   
      </Box>
    </nav>
  );
};

export default Navbar;
