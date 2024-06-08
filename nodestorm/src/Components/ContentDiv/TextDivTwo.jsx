import { Box } from '@mui/material'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TextDivTwo = () => {
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
    <span style={{fontFamily:"'Brandon Text', Arial, sans-serif"}}><h2>Shop what you love—faster and easier.</h2></span>
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

export default TextDivTwo
