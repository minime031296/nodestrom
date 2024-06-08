import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Card = () => {
  return (
    <>
    <Box sx={{display:"flex", height: "300px", width: "95.5%", margin:"35px",justifyContent:"space-between", flexDirection:"row"}}>
      <Box sx={{display:"flex", height: "100%", width: "24%"}}>
        <Box sx={{display:"flex", flexDirection:"column",height: "40%", width: "100%", marginTop:"60px", textAlign:"center"}}>
            <Box mr="10px" sx={{fontWeight:"bold"}}>
            <h2><span style={{marginRight:"45px"}}>Need Right</span><br /><span style={{marginRight:"115px"}}>Now</span></h2>
            </Box>
            <Box>
            Your curated roundup of this<br /> <span style={{marginRight:"55px"}}>season's essentials.</span>
            </Box>
        </Box>
      </Box>
      <Box sx={{display:"flex",  height: "100%", width: "24%", objectFit:"cover"}}>
        <img src="https://i.etsystatic.com/24480679/r/il/aa02da/5065886359/il_570xN.5065886359_rxfr.jpg" alt="" style={{objectFit:"cover", height:"100%", width:"100%"}}/>
        <br />
        
      </Box>
      <Box sx={{display:"flex",  height: "100%", width: "24%"}}>
        <img src="https://www.thesun.co.uk/wp-content/uploads/2023/02/PRETTYGARDEN-Womens-Summer-Maxi-Dress-Casual-Boho-Sleeveless-Spaghetti-Strap-Smocked-Tiered-Long-Beach-Sun-Dresses-.jpg" alt="" style={{objectFit:"cover", height:"100%", width:"100%"}}/>
        <br />
       
      </Box>
      <Box sx={{display:"flex",  height: "100%", width: "24%"}}>
        <img src="https://cdn.shopify.com/s/files/1/0997/6106/files/EDB704A2-C4B3-4ABC-A8AF-848D437AEDCF_1800x1800_8a7d17ef-7d22-4d7b-aeac-1ae831e5488e_480x620.jpg" alt="" style={{objectFit:"cover", height:"100%", width:"100%"}}/>
        <br />
       
      </Box>
      

    </Box>
    <Box sx={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
    <Link to="/vacation-shoes" style={{marginLeft:"340px", marginTop:"-25px", color:"black", textDecoration:"underline", textUnderlineOffset:"3px"}}>Vacation Shoes</Link>
    <Link to="/vacation-dresses" style={{marginTop:"-25px", color:"black", textDecoration:"underline", textUnderlineOffset:"3px"}}>Vacation Dresses</Link>
    <Link to="/designer-flats" style={{ marginTop:"-25px", color:"black", textDecoration:"underline", textUnderlineOffset:"3px"}}>Designer Flats</Link>
  </Box>
  </>
  )
}

export default Card
