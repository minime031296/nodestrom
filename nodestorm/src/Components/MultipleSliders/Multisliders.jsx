import { Box, Button, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './multislider.css'

const Multisliders = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3,
    },
  };

  const WomenBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
   
  });

  const MenBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    
  });

  

  const [showWomenSlider, setShowWomenSlider] = useState(true);
  const [showMenSlider, setShowMenSlider] = useState(false);

  const handleWomenSliderClick = () => {
    setShowWomenSlider(true);
    setShowMenSlider(false);
  };

  const handleMenSliderClick = () => {
    setShowMenSlider(true);
    setShowWomenSlider(false);
  };

  return (
    <Box>
      <Box mt="40px">
        <Typography variant="h4" component="h4" sx={{ fontWeight: "bold" }}>Top Picks for You</Typography>
      </Box>
      <Box mt="10px">
        <Button sx={{ color: "black", fontWeight: "bold", "&:hover":{textDecoration:"3px underline black"} }} onClick={handleWomenSliderClick}>Women's Vacation & Resort Clothing, Shoes & Accessories</Button>
        <Button sx={{ color: "black", fontWeight: "bold", "&:hover":{textDecoration:"3px underline black"}  }} onClick={handleMenSliderClick}>Men's Vacation & Resort Clothing, Shoes & Accessories</Button>
        <Button sx={{ color: "black", fontWeight: "bold", "&:hover":{textDecoration:"3px underline black"} }}>Women's Wedding Guest Office</Button>
        <Button sx={{ color: "black", fontWeight: "bold", "&:hover":{textDecoration:"3px underline black"} }}>Men's Wedding G</Button>
      </Box>
      <hr />
      {showWomenSlider && (
        <WomenBox ml="80px">
          <Carousel
            responsive={responsive}
            itemClass="carousel-item"
            centerMode={true}
          >
            <Box mt="20px" sx={{ display: "flex", flexDirection: "column" }}>
              <Box className="imagebox" sx={{ display: "flex", flexDirection: "column" }}>
                <img src="https://n.nordstrommedia.com/id/sr3/027fcfde-71cd-44e7-8f00-97cf7b782491.jpeg?h=365&w=240&dpr=2" alt="" />
              </Box>
              <Typography mt="10px" sx={{ color: "#361678", fontWeight: "bold" }}>New!</Typography>
              <Typography sx={{ fontSize: "20px" }}>Zella</Typography>
              <Typography variant="h6" component="h6">INR 4,394.37</Typography>
              <Typography>★★★★★ (5)</Typography>
            </Box>

            <Box mt="20px" sx={{ display: "flex", flexDirection: "column" }}>
              <Box className="imagebox" sx={{ display: "flex", flexDirection: "column" }}>
                <img src="https://n.nordstrommedia.com/id/sr3/d004f86a-542e-4443-8289-8da2068ced3d.jpeg?h=365&w=240&dpr=2" alt="" />
              </Box>
              <Typography mt="10px">Caslon®</Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "15px", color:"red" }}>INR 3,968.37</Typography>
              <Typography variant="h6" component="h6" sx={{ textDecoration: "line-through" }}>INR 4,394.37</Typography>
              <Typography>★★★★☆ (310)</Typography>
            </Box>

            <Box mt="20px" sx={{ display: "flex", flexDirection: "column" }}>
              <Box className="imagebox" sx={{ display: "flex", flexDirection: "column" }}>
                <img src="https://n.nordstrommedia.com/id/sr3/31fe0b60-a5f1-4fea-842b-a8d8d1009d74.jpeg?h=365&w=240&dpr=2" alt="" style={{ objectFit: "cover" }} />
              </Box>
              <Typography mt="10px">Splendid</Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "15px" }}>INR 14,169.61</Typography>
              <Typography>★★★☆☆ (29)</Typography>
            </Box>

            <Box mt="20px" sx={{ display: "flex", flexDirection: "column" }}>
              <Box className="imagebox" sx={{ display: "flex", flexDirection: "column" }}>
                <img src="https://n.nordstrommedia.com/id/sr3/9bd3c113-03e7-4136-9c2b-f46869250358.jpeg?h=365&w=240&dpr=2" alt="" style={{ objectFit: "cover" }} />
              </Box>
              <Typography mt="10px">Splendid</Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "15px" }}>INR 14,169.61</Typography>
              <Typography>★★★☆☆ (29)</Typography>
            </Box>

            <Box mt="20px" sx={{ display: "flex", flexDirection: "column" }}>
              <Box className="imagebox" sx={{ display: "flex", flexDirection: "column" }}>
                <img src="https://media.cnn.com/api/v1/images/stellar/prod/screenshot-2024-05-23-at-7-49-18-am.png?c=16x9&q=h_720,w_1280,c_fill" alt="" style={{ marginTop: "170px" }} />
              </Box>
              <Typography mt="30px">Splendid</Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "15px" }}>INR 14,169.61</Typography>
              <Typography>★★★☆☆ (29)</Typography>
            </Box>

            <Box mt="20px" sx={{ display: "flex", flexDirection: "column" }}>
              <Box className="imagebox" sx={{ display: "flex", flexDirection: "column" }}>
                <img src="https://n.nordstrommedia.com/id/sr3/362d3218-8fae-45de-b453-0970ded88346.jpeg?h=365&w=240&dpr=2" alt="" />
              </Box>
              <Typography>Splendid</Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "15px" }}>INR 14,169.61</Typography>
              <Typography>★★★☆☆ (29)</Typography>
            </Box>
          </Carousel>
        </WomenBox>
      )}

      {showMenSlider && (
        <MenBox ml="80px">
          <Carousel
            responsive={responsive}
            itemClass="carousel-item"
            centerMode={true}
          >
            <Box mt="20px" sx={{ display: "flex", flexDirection: "column" }}>
              <Box className="imagebox" sx={{ display: "flex", flexDirection: "column" }}>
                <img src="https://n.nordstrommedia.com/id/sr3/aef0f4da-e339-4599-9f30-23848607b33e.jpeg?h=365&w=240&dpr=2" alt="" />
              </Box>
              <Typography mt="10px" sx={{ color: "#361678", fontWeight: "bold" }}>New!</Typography>
              <Typography sx={{ fontSize: "20px" }}>Zella</Typography>
              <Typography variant="h6" component="h6">INR 4,394.37</Typography>
              <Typography>★★★★★ (5)</Typography>
            </Box>

            <Box mt="20px" sx={{ display: "flex", flexDirection: "column" }}>
              <Box className="imagebox" sx={{ display: "flex", flexDirection: "column" }}>
                <img src="https://n.nordstrommedia.com/id/sr3/b92e7e48-25b7-43a9-818f-9f2e10ec3411.jpeg?h=365&w=240&dpr=2" alt="" />
              </Box>
              <Typography mt="10px">Caslon®</Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "15px" }}>INR 3,968.37</Typography>
              <Typography variant="h6" component="h6" sx={{ textDecoration: "line-through" }}>INR 4,394.37</Typography>
              <Typography>★★★★☆ (310)</Typography>
            </Box>

            <Box mt="20px" sx={{ display: "flex", flexDirection: "column" }}>
              <Box className="imagebox" sx={{ display: "flex", flexDirection: "column" }}>
                <img src="https://i.pinimg.com/736x/e4/98/bb/e498bb3d09052ac7acd45f6eddec721e.jpg" alt="" style={{ objectFit: "cover" }} />
              </Box>
              <Typography mt="10px">Splendid</Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "15px" }}>INR 14,169.61</Typography>
              <Typography>★★★☆☆ (29)</Typography>
            </Box>

            <Box mt="20px" sx={{ display: "flex", flexDirection: "column" }}>
              <Box className="imagebox" sx={{ display: "flex", flexDirection: "column" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWgmhQNdXsrvoAF_K20Fbz0SVOq7XX7VKyRA&s" alt="" style={{ objectFit: "cover", marginTop: "170px"  }} />
              </Box>
              <Typography mt="10px">Splendid</Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "15px" }}>INR 14,169.61</Typography>
              <Typography>★★★☆☆ (29)</Typography>
            </Box>

            <Box mt="20px" sx={{ display: "flex", flexDirection: "column" }}>
              <Box className="imagebox" sx={{ display: "flex", flexDirection: "column" }}>
                <img src="https://dappered.com/wp-content/uploads/2019/05/Nordstrom-1901-sloan-sneaker-575.jpg" alt="" style={{ marginTop: "170px" }} />
              </Box>
              <Typography mt="30px">Splendid</Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "15px" }}>INR 14,169.61</Typography>
              <Typography>★★★☆☆ (29)</Typography>
            </Box>

            <Box mt="20px" sx={{ display: "flex", flexDirection: "column" }}>
              <Box className="imagebox" sx={{ display: "flex", flexDirection: "column" }}>
                <img src="" alt="" />
              </Box>
              <Typography>Splendid</Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "15px" }}>INR 14,169.61</Typography>
              <Typography>★★★☆☆ (29)</Typography>
            </Box>
          </Carousel>
        </MenBox>
      )}
    </Box>
  );
}

export default Multisliders;
