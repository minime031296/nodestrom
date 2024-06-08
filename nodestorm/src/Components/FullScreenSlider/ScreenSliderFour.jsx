import { Box } from '@mui/material';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const ScreenSliderFour = () => {
    const responsive = {
        autoPlay: false,
        interval: 2000,
        showIndicators:false,
        infiniteLoop: true,
        showThumbs: false,
        showStatus: false,
    };
  return (
    <Box  mt="60px" sx={{height: "450px", width: "100%", margin: "70px 30px"}}>
    <Carousel {...responsive}>
        
    <Box mt="25px" sx={{ border: "none", height: "450px", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
      <Box sx={{ border: "none", height: "100%", width: "30%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ border: "none", height: "350px", width: "100%" }}>
          <img src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzEwMDQyNTQzLjU0Nzc2MTU5MjEuanBlZw==.jpg?w=640&h=640&fit=cover" alt="" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
        </Box>
    </Box>

      <Box sx={{ border: "none", height: "100%", width: "30%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ border: "none", height: "350px", width: "100%" }}>
          <img src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzA4MDIwODQ5LjkwNjc3ODg5MDE4LmpwZWc=.jpg?w=640&h=640&fit=cover" alt="" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
        </Box>
        </Box>

      <Box sx={{ border: "none", height: "100%", width: "30%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ border: "none", height: "350px", width: "100%" }}>
          <img src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjkxMjg1MTk4LjU3ODcwOTgyMzM2NS5qcGVn.jpg?w=640&h=640&fit=cover" alt="" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
        </Box>
        </Box>

        <Box sx={{ border: "none", height: "100%", width: "30%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ border: "none", height: "350px", width: "100%" }}>
          <img src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjk2MzQwNjU0LjE1MDE0MzE3NTg0Ni5qcGVn.jpg?w=640&h=640&fit=cover" alt="" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
        </Box>
        </Box>
    </Box>

    <Box mt="25px" sx={{ border: "none", height: "450px", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
      <Box sx={{ border: "none", height: "100%", width: "30%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ border: "none", height: "350px", width: "100%" }}>
          <img src="https://cdn.dashhudson.com/media/full/1709957365.099925855267.jpeg" alt="" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
        </Box>
    </Box>

      <Box sx={{ border: "none", height: "100%", width: "30%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ border: "none", height: "350px", width: "100%" }}>
          <img src="https://cdn.dashhudson.com/media/full/1710170005.918883879463.jpeg" alt="" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
        </Box>
        </Box>

      <Box sx={{ border: "none", height: "100%", width: "30%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ border: "none", height: "350px", width: "100%" }}>
          <img src="https://cdn.dashhudson.com/media/full/1710160262.010714557760.jpeg" alt="" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
        </Box>
        </Box>

        <Box sx={{ border: "none", height: "100%", width: "30%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ border: "none", height: "350px", width: "100%" }}>
          <img src="https://cdn.dashhudson.com/media/full/1712601111.1493394769.jpeg" alt="" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
        </Box>
        </Box>
            </Box>
                    
           

        
            
        
    </Carousel>
    </Box>
  )
}

export default ScreenSliderFour
