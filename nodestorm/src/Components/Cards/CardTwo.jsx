import { Box } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CardTwo = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const linkStyle = {
    fontSize: "16px",
    color: "black",
    textDecoration: ".5px underline",
    textUnderlineOffset: "3px"
  };

  const linkHoverStyle = {
    textDecoration: ".5px underline double",
    textUnderlineOffset: "3px"
  };

  return (
    <Box mt="25px" sx={{ border: "none", height: "450px", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
      <Box sx={{ border: "none", height: "100%", width: "30%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ border: "none", height: "350px", width: "100%" }}>
          <img src="https://n.nordstrommedia.com/it/ce8dfec3-5f19-4a7e-86c5-6ebaf6ed206e.jpeg?h=516&w=536" alt="" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
        </Box>
        <Box sx={{ border: "none", height: "120px", width: "100%", padding: "10px" }}>
          <span>
            <h3 style={{ fontFamily: "'DM Serif Text', serif" }}>Celebrating Pride Month</h3>
          </span>
          <span style={{ letterSpacing: "1px" }}>Join us as we stand with, celebrate and support <br /> the LGBTQIA+ community.</span>
          <br />
          <br />
          <span>
            <Link
              to="/pride-month"
              style={hoveredLink === 'learnMore' ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
              onMouseEnter={() => handleMouseEnter('learnMore')}
              onMouseLeave={handleMouseLeave}
            >
              Learn More
            </Link>
          </span>
          <span style={{ marginLeft: "25px" }}>
            <Link
              to="/shop-pride"
              style={hoveredLink === 'shopPride' ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
              onMouseEnter={() => handleMouseEnter('shopPride')}
              onMouseLeave={handleMouseLeave}
            >
              Shop Pride
            </Link>
          </span>
        </Box>
      </Box>

      <Box sx={{ border: "none", height: "100%", width: "30%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ border: "none", height: "350px", width: "100%" }}>
          <img src="https://n.nordstrommedia.com/it/4244ffd9-d131-45f6-8bbc-b498acf1e81a.jpeg?h=516&w=536" alt="" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
        </Box>
        <Box sx={{ border: "none", height: "120px", width: "100%", padding: "10px" }}>
          <span>
            <h3 style={{ fontFamily: "'DM Serif Text', serif" }}>On Our Radar: 10 LGBTQIA+ Brands to <br /> Know</h3>
          </span>
          <span>In honor of Pride Month, we're spotlighting some of our <br /> favorite LGBTQIA+ brands and the visionaries behind <br /> them.</span>
          <br />
          <span>
            <Link
              to="/card-two"
              style={hoveredLink === 'readStory' ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
              onMouseEnter={() => handleMouseEnter('readStory')}
              onMouseLeave={handleMouseLeave}
            >
              Read the story
            </Link>
          </span>
        </Box>
      </Box>

      <Box sx={{ border: "none", height: "100%", width: "30%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ border: "none", height: "350px", width: "100%" }}>
          <img src="https://n.nordstrommedia.com/it/597aab47-fd40-4904-9f3d-0fcae34b0620.jpeg?h=516&w=536" alt="" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
        </Box>
        <Box sx={{ border: "none", height: "120px", width: "100%", padding: "10px" }}>
          <span>
            <h3 style={{ fontFamily: "'DM Serif Text', serif" }}>Now Featuring: Romantic Pearls by <br /> Dolce Vita</h3>
          </span>
          <span>Meet our favorite pearl-adorned shoes, including <br />exclusive styles only at Nordstrom.</span>
          <br />
          <span>
            <Link
              to="/shop-dolce-vita"
              style={hoveredLink === 'shopDolceVita' ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
              onMouseEnter={() => handleMouseEnter('shopDolceVita')}
              onMouseLeave={handleMouseLeave}
            >
              Shop Dolce Vita
            </Link>
          </span>
          <span style={{ marginLeft: "25px" }}>
            <Link
              to="/read-story"
              style={hoveredLink === 'readTheStory' ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
              onMouseEnter={() => handleMouseEnter('readTheStory')}
              onMouseLeave={handleMouseLeave}
            >
              Read The Story
            </Link>
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default CardTwo;
