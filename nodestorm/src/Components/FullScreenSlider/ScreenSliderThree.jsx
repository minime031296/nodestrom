import { Box } from '@mui/material';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
const ScreenSliderThree = () => {
    const responsive = {
        autoPlay: true,
        interval: 2000,
        showIndicators:false,
        infiniteLoop: true,
        showThumbs: false,
        showStatus: false,
    };
  return (
    <><Box  mt="60px" sx={{height: "250px", width: "100%", margin: "70px 30px"}}>
    <Carousel {...responsive}>
        
            <Box sx={{ display: "flex", flexDirection: "row", height: "250px", width: "100%" }}>
                <Box sx={{ flex: "0 0 100%", marginRight: "20px" }} >
                <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        position: "absolute",
                        top: "40%",
                        right: "70%",
                        transform: "translate(30%,-70%)",
                        padding: "20px",
                        borderRadius: "8px"
                    }}>
                        <h2><span>Looks Curated Just For You</span></h2>
                        <span>Plus, get a $40 Bonus Note as a new Nordstrom credit <br />cardmember. Restrictions apply. 
                        <br />
                        <span style={{color:"black", textDecoration:"underline", textUnderlineOffset:"3px"}}><Link style={{color: "black"}}>Request a Look</Link></span>
                      
                        </span>
                    </Box>
                    <img src="https://n.nordstrommedia.com/it/af0d18e3-96a3-44c2-a9f6-928a8719930b.jpeg?h=400&w=1608" alt="" style={{height:"100%", width:"100%", objectFit:"cover"}}/>
                    
                </Box>
            </Box>
                    
            <Box sx={{ display: "flex", flexDirection: "row", height: "250px", width: "100%",  marginRight: "40px"  }}>
                <Box sx={{ flex: "0 0 100%", marginRight: "40px" }}>
                <Box  sx={{
                        display: "flex",
                        flexDirection: "column",
                        position: "absolute",
                        top: "40%",
                        right: "70%",
                        transform: "translate(30%,-70%)",
                        padding: "20px",
                        borderRadius: "8px"
                    }}>
                        <h2><span>Free Style Help
                        </span></h2>
                        <span>Plus, get a $40 Bonus Note as a new Nordstrom credit <br />cardmember. Restrictions apply. 
                        <br />
                        <span style={{color:"black", textDecoration:"underline", textUnderlineOffset:"3px"}}><Link style={{color: "black"}}>Request a Look</Link></span>
                      
                        </span>
                    </Box >
                    <img src="https://n.nordstrommedia.com/it/8d371357-26d5-4bac-9afc-1b4eddb6a887.jpeg?h=400&w=1608" alt="" style={{height:"100%", width:"100%", objectFit:"cover"}}/>
                    
                </Box>
            </Box>

        
            
        
    </Carousel>
    </Box>
</>
  )
}

export default ScreenSliderThree
