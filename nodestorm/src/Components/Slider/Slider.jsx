import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './slider.css'; // Optional: if you need additional custom styles
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div className='sliderbox' style={{ width: '95%', height: '200px' }}>
      <AwesomeSlider bullets={false} style={{ width: '200%', margin: "50px 30px"}} >
        
        <Box className="boxone">
          <Link>
          <div id="imagebox" className="m" style={{backgroundImage: `url("https://n.nordstrommedia.com/it/422591fb-82c6-4fe5-9509-980cc3e32f18.jpeg?h=752&w=752")`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
          </Link>
          <Box id="textbox" className="m">
            <Box id="textboxcontent">
              Find the best gifts for every dad you love <br /> (including yourself), all in one place.<br/> <br />
              <Link style={{color: "black", textDecoration:"underline black"}}>Father's Day Gifts</Link>{''} <Link style={{color: "black", textDecoration:"underline black", marginLeft:"15px"}}>Explore Our Gift Guide</Link>
              <br /><Link style={{color: "black", textDecoration:"underline black"}}>Our Favourite Gifts</Link>{''} <Link style={{color: "black", textDecoration:"underline black", marginLeft:"15px"}}>Essentials</Link>
            </Box>
          </Box>
        </Box>
        
      
        <Box className="boxone" style={{marginLeft: "-30px"}}>
            <Link>
          <div id="imagebox" className="m" style={{backgroundImage: `url("https://assets.simon.com/rscimages/rscmain/W_514548.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
          </Link>
          <Box id="textboxtwo" className="m">
            <Box id="textboxcontenttwo">
              <h1>Pick Up Today in Store or<br /> Curbside</h1> 
              <Link style={{color: "black", textDecoration:"underline black"}}>Limited-Time Sale</Link>
            </Box>
          </Box>
        </Box>
        
      </AwesomeSlider>
    </div>
  );
}

export default Slider;
