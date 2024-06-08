import { Box, Typography, Link } from '@mui/material';
import React from 'react';
import './banner.css';

const Banner = () => {
  return (
    <Box className="banners">
      <Box className="banner" id="bannercontone">
        <img src="https://n.nordstrommedia.com/it/3cbb561e-7c79-4a34-8053-526d8fc7da84.jpeg?h=100&w=1608" alt="" />
        <Link href="#" className="banner-link" id="link-one" style={{textUnderlineOffset:"3px"}}>See Shipping Dates</Link>
        <Link href="#" className="banner-link" id="link-two" style={{textUnderlineOffset:"3px"}}>Shop Father's Day Gifts</Link>
      </Box>
    </Box>
  );
}

export default Banner;
