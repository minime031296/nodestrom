import { Box } from '@mui/material';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const ScreenSliderTwo = () => {
    const responsive = {
        autoPlay: true,
        interval: 2000,
        showIndicators:false,
        infiniteLoop: true,
        showThumbs: false,
        showStatus: false,
    };
  return (
    <Box mt="60px" sx={{ height: "150px", width: "100%", margin:"70px 30px" }} >
            <Carousel {...responsive}>
                
                    <Box sx={{ display: "flex", flexDirection: "row", height: "150px", width: "100%" }}>
                        <Box sx={{ display: "flex", flexDirection: "row",height: "150px", width: "100%", marginRight:"50px" }}>
                            <img src="https://cdn.smartnordstrom.com/s3/csp/5915/1697539087285/UNI_JackVictor_Disc_804x200_disc.jpg" alt="" />
                            
                        </Box>
                    </Box>
            </Carousel>
      
    </Box>
  )
}

export default ScreenSliderTwo
