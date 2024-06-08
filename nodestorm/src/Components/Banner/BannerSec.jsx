import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './bannersec.css';

const BannerSec = () => {
  return (
    <Box mt="120px" sx={{ position: 'relative' }} className="ban">
      <img 
        src="https://n.nordstrommedia.com/it/cd3e3c53-3fd1-47b9-9f48-d5d24997e1bd.png?h=200&w=1608" 
        alt="" 
        style={{ 
          marginLeft: "40px", 
          marginRight: "150px", 
          height: "100%", 
          width: "95%", 
          outline: "3px solid green"
        }} 
      />
      <Box 
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          position: "absolute", 
          top: "50%", 
          left: "50%", 
          transform: "translate(30%,-70%)", 
          backgroundColor: "rgba(255, 255, 255, 0.8)", 
          padding: "20px", 
          borderRadius: "8px"
        }} 
        className="banCont"
      >
        <Typography component="h5" variant="h5" sx={{ marginBottom: "10px", fontWeight:"bold", letterSpacing:"-0.5px" }}>Earn 3X the points on beauty!</Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <Link to="#" style={{color: "black", textDecoration:"1px underline", textUnderlineOffset:"3px"}}>Shop Beauty</Link>
          <Link to="#" style={{color: "black", textDecoration:"1px underline",  textUnderlineOffset:"3px"}}>See Restrictions</Link>
        </Box>
      </Box>
    </Box>
  );
}

export default BannerSec;
