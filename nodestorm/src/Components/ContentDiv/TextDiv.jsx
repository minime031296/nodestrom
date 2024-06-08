import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TextDiv = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  const linkStyle = {
    fontSize: "16px",
    color: "black",
    textDecoration: ".5px underline",
    textUnderlineOffset: "3px"
  };

  const hoverLinkStyle = {
    textDecoration: "2px underline",
    textUnderlineOffset: "3px"
  };

  return (
    <Box mt="25px" sx={{border:"1px solid black", height:"150px", width:"100%", textAlign:"center", border:"none"}}>
      <span style={{letterSpacing:"1px"}}><h2>GET INSPIRED</h2></span>
      <span style={{fontSize:"16px"}}>Discover the latest stories from The Thread, plus more we're loving in fashion, beauty and lifestyle.</span>
      <br />
      <br />
      <Link
        style={isHovered ? { ...linkStyle, ...hoverLinkStyle } : linkStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Explore The Thread
      </Link>
    </Box>
  )
}

export default TextDiv
