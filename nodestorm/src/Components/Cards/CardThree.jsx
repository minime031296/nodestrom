import { Box } from '@mui/material';
import React from 'react';

const imageUrls = [
  "https://n.nordstrommedia.com/it/faef8aa8-a56c-4f76-a6ea-83aa4f9ed8de.jpeg?h=365&w=268",
  "https://n.nordstrommedia.com/it/ec97af11-73d9-427b-ab70-d45672a4200f.jpeg?h=365&w=268",
  "https://n.nordstrommedia.com/it/4d92ea5c-3ce4-489f-b7a8-428df27a978a.jpeg?h=365&w=268",
  "https://n.nordstrommedia.com/it/6a9d4aba-1f3d-40b5-9a76-79178cd878f4.jpeg?h=365&w=268",
  "https://n.nordstrommedia.com/it/20e09c89-3eaa-4b22-9694-594fd3364eb0.jpeg?h=365&w=268",
  "https://n.nordstrommedia.com/it/460b88e4-6338-4d63-acbf-851a5c751ebd.jpeg?h=365&w=268"
];

const CardThree = () => {
  return (
    <>
    <Box mt="25px" sx={{ border: "none", height: "250px", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
      {imageUrls.map((url, index) => (
        <Box key={index} sx={{ border: "none", display: "flex", flexDirection: "row", height: "100%", width: "calc(16.66% - 20px)", marginBottom: "25px" }}>
          <Box sx={{ border: "none", height: "100%", cursor:"pointer",width: "100%", borderRadius: "5px", overflow: "hidden" }}>
            <img src={url} alt="" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
          </Box>
        </Box>
      ))}
    </Box>

      <Box sx={{display:"flex", flexDirection:"row", border:"1px solid black", height:"50px", width:"100%", justifyContent:"space-around",border:"none"  }}>
        <Box mt="10px" sx={{display:"flex", flexDirection:"row", border:"1px solid black", height:"20px", width:"5%", fontFamily:"'Brandon Text', Arial, sans-serif", fontSize:"16px", border:"none"}}>Women</Box>
        <Box mt="10px" sx={{display:"flex", flexDirection:"row", border:"1px solid black", height:"20px", width:"5%",fontFamily:"'Brandon Text', Arial, sans-serif", fontSize:"16px",border:"none"}}>Men</Box>
        <Box mt="10px" sx={{display:"flex", flexDirection:"row", border:"1px solid black", height:"20px", width:"5%",fontFamily:"'Brandon Text', Arial, sans-serif", fontSize:"16px",border:"none"}}>Kids</Box>
        <Box mt="10px" sx={{display:"flex", flexDirection:"row", border:"1px solid black", height:"20px", width:"5%",fontFamily:"'Brandon Text', Arial, sans-serif", fontSize:"16px",border:"none"}}>Designer</Box>
        <Box mt="10px" sx={{display:"flex", flexDirection:"row", border:"1px solid black", height:"20px", width:"5%",fontFamily:"'Brandon Text', Arial, sans-serif", fontSize:"16px",border:"none"}}>Home</Box>
        <Box mt="10px" sx={{display:"flex", flexDirection:"row", border:"1px solid black", height:"20px", width:"10%",fontFamily:"'Brandon Text', Arial, sans-serif", fontSize:"12px",border:"none"}}>Beauty & Fragrance</Box>
      </Box>

      <Box mt="20px"sx={{textAlign:"center"}}>
        <h3 mt="10px"style={{fontFamily:"'Brandon Text', Arial, sans-serif", textAlign:"center"}}>CURRENTLY LOVING</h3>
        <span style={{textAlign:"center", marginBottom:"7px",fontSize:"12px"}}>Explore favorite looks from Instagram. Tag @Nordstrom to show us your finds.</span>
      </Box>
    </>
  )
}

export default CardThree

