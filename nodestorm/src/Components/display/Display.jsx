import { Box, Typography } from '@mui/material'
import React from 'react'
import './display.css'
import { Link } from 'react-router-dom'

const Display = () => {
  return (
    <Link>
    <Box className = "display">
        <Box className="displaybox" id="displayboxone">
            <img src="https://img.freepik.com/free-vector/perfume-bottle-night-water-surface-background_107791-2063.jpg" alt="" />
        </Box>
        <Box className="displaybox" id="displayboxtwo">
            <Box id="littleboxone" className="content">
                <Box id="littleboxo" className="contentinside">
                    <Typography sx={{color: "white", textAlign:"center"}}>
                        <strong>Brighten with Radiant Creamy Concealer</strong>
                    </Typography>
                </Box>
                <Box id="littleboxt" className="contentinside">
                <Typography sx={{color: "white", textAlign:"center", letterSpacing: "1px"}}>
                        Earn 3X the points on beauty. See restrictions.
                    </Typography>
                </Box>
                <Box id="littleboxth" className="contentinside">
                    <Link style={{color: 'white', textDecoration: " underline white "}}>
                    <Typography sx={{color: "white", textAlign:"center"}}>
                       Shop Now
                    </Typography>
                    </Link>
                </Box>
            </Box>
           
        </Box>
    </Box>
    </Link>
  )
}

export default Display
