import { Box, Button, Typography, styled } from '@mui/material';
import React  from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './multislider.css'

const MultiSliderTwo = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 3,
        },
      };
    
      
  return (
    <Box>
      <h3 style={{textAlign:"start"}}>Great Deals on What You Love</h3>
      <p style={{textAlign:"start"}}> Items similar to what you've browsed are on sale</p>
      <Carousel
            responsive={responsive}
            itemClass="carousel-item"
            centerMode={true}
          >
            <Box mt="3px" sx={{ display: "flex", flexDirection: "column", marginLeft:"20px",boxShadow: "inset rgba(100, 100, 111, 0.2) 0px 7px 29px 0px, rgba(248, 248, 248, 1) 0px 0px 0px 3px"
 }}>
              <Box className="imagebox" sx={{ display: "flex", flexDirection: "column" }}>
                <img src="https://n.nordstrommedia.com/id/sr3/f5aca30a-d121-4436-8e1c-b9dffa07e2f6.jpeg?h=365&w=240&dpr=2" alt="" />
              </Box>
              <Typography mt="10px" sx={{ color: "#361678", fontWeight: "bold" }}>New!</Typography>
              <Typography sx={{ fontSize: "20px" }}>Zella</Typography>
              <Typography variant="h6" component="h6">INR 4,394.37</Typography>
              <Typography>★★★★★ (5)</Typography>
            </Box>

            <Box mt="3px" sx={{ display: "flex", flexDirection: "column", boxShadow: "inset rgba(100, 100, 111, 0.2) 0px 7px 29px 0px, rgba(248, 248, 248, 1) 0px 0px 0px 3px"
  }}>
              <Box className="imagebox" sx={{ display: "flex", flexDirection: "column" }}>
                <img src="https://n.nordstrommedia.com/id/sr3/c0eee7b4-f35a-4ad3-8276-6ab92d7d9b21.jpeg?h=365&w=240&dpr=2" alt="" />
              </Box>
              <Typography mt="10px">Caslon®</Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "15px", color:"red" }}>INR 3,968.37</Typography>
              <Typography variant="h6" component="h6" sx={{ textDecoration: "line-through" }}>INR 4,394.37</Typography>
              <Typography>★★★★☆ (310)</Typography>
            </Box>

            <Box mt="3px" sx={{ display: "flex", flexDirection: "column",boxShadow: "inset rgba(100, 100, 111, 0.2) 0px 7px 29px 0px, rgba(248, 248, 248, 1) 0px 0px 0px 3px"
  }}>
              <Box className="imagebox" sx={{ display: "flex", flexDirection: "column" }}>
                <img src="https://n.nordstrommedia.com/id/sr3/46c43cf5-6596-4680-b346-f0b8b9f9e5a3.jpeg?h=365&w=240&dpr=2" alt="" style={{ objectFit: "cover" }} />
              </Box>
              <Typography mt="10px">Splendid</Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "15px" }}>INR 14,169.61</Typography>
              <Typography>★★★☆☆ (29)</Typography>
            </Box>

            <Box mt="3px" sx={{ display: "flex", flexDirection: "column",boxShadow: "inset rgba(100, 100, 111, 0.2) 0px 7px 29px 0px, rgba(248, 248, 248, 1) 0px 0px 0px 3px"
  }}>
              <Box className="imagebox" sx={{ display: "flex", flexDirection: "column",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor:"#f8f8f8"  }}>
                <img src="https://n.nordstrommedia.com/id/sr3/ce0678c0-59ea-4e14-9c4d-a44dbf6d16c2.jpeg?h=365&w=240&dpr=2" alt="" style={{ objectFit: "cover",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor:"#f8f8f8" }} />
              </Box>
              <Typography mt="10px">Splendid</Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "15px" }}>INR 14,169.61</Typography>
              <Typography>★★★☆☆ (29)</Typography>
            </Box>

            <Box mt="3px" sx={{ display: "flex", flexDirection: "column" ,boxShadow: "inset rgba(100, 100, 111, 0.2) 0px 7px 29px 0px, rgba(248, 248, 248, 1) 0px 0px 0px 3px"
 }}>
              <Box className="imagebox" sx={{ display: "flex", flexDirection: "column" }}>
                <img src="https://n.nordstrommedia.com/id/sr3/44b36aa6-526b-44ba-8a79-31bb0a399d2b.jpeg?h=365&w=240&dpr=2" alt=""  />
              </Box>
              <Typography mt="30px">Splendid</Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "15px" }}>INR 14,169.61</Typography>
              <Typography>★★★☆☆ (29)</Typography>
            </Box>

           

            <Box mt="3px" sx={{ display: "flex", flexDirection: "column",boxShadow: "inset rgba(100, 100, 111, 0.2) 0px 7px 29px 0px, rgba(248, 248, 248, 1) 0px 0px 0px 3px"
 }}>
              <Box className="imagebox" sx={{ display: "flex", flexDirection: "column" }}>
                <img src="https://n.nordstrommedia.com/id/sr3/e0a78d3c-4314-4174-81fa-4dc0b5f58dff.jpeg?h=365&w=240&dpr=2" alt=""  />
              </Box>
              <Typography mt="30px">Splendid</Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "15px" }}>INR 14,169.61</Typography>
              <Typography>★★★☆☆ (29)</Typography>
            </Box>

            
          </Carousel>
      
    </Box>
  )
}

export default MultiSliderTwo
