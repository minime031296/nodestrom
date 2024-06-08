import React, { useState } from 'react';
import { Box, TextField, InputAdornment, Badge, Button, Menu, MenuItem, Typography } from '@mui/material';
import './headertwo.css';
import logoimage from "../../image/nordlogo.png";
import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TfiSearch } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { TbCircleLetterN } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import { PiCreditCardLight } from "react-icons/pi";
import { PiTShirt } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import { LuScaling } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { PiChatsThin } from "react-icons/pi";


const HeaderTwo = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box className="HeaderTwoContentBox">
        <Box className="box-content" id="logo-box">
          <img src={logoimage} alt="Logo" className="logo-image" />
        </Box>
        <Box className="box-content" id="inputext">
          <TextField 
            placeholder='Search for products or brands'
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TfiSearch />
                </InputAdornment>
              ),
              style: { height: '100%' },
            }}
          />
        </Box>
        <Box className="box-content" id="sign-in">
          <Button 
            aria-controls="simple-menu" 
            aria-haspopup="true" 
            onMouseOver={handleClick}
          >
            Sign In ▼
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 40,
                  height: 37,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button className='signinbtn' sx={{background: "black", color: "white"}}>Sign In|Create Account</Button>
              </Link>
            </MenuItem>
            <Typography variant="h6" className='menu-header' component="h6">Your Account</Typography>
            <MenuItem onClick={handleClose} className='items' > <BsBoxSeam />{' '}Purchase</MenuItem>
            <MenuItem onClick={handleClose} className='items'><CiHeart />{" "}Wish List</MenuItem>
            <MenuItem onClick={handleClose} className='items'><TbCircleLetterN /> {" "}The Nordy Club Rewards</MenuItem>
            <MenuItem onClick={handleClose} className='items'><MdOutlineLocalShipping />Shipping Addresses</MenuItem>
            <MenuItem onClick={handleClose} className='items'><PiCreditCardLight />Payment Methods</MenuItem>
            <MenuItem onClick={handleClose} className='items'><PiTShirt />Your Stylist</MenuItem>
            <MenuItem onClick={handleClose} className='items'><LuScaling />Pay & Manage Nordstrom Card</MenuItem>
            <Typography variant="h6" className='menu-header' component="h6">Account Settings</Typography>
            <MenuItem onClick={handleClose} className='items'><CiLock />Password & Personal Info</MenuItem>
            <MenuItem onClick={handleClose} className='items'><MdOutlineEmail />Email & Mail Preferences</MenuItem>
            <MenuItem onClick={handleClose} className='items'><TbCircleLetterN />Stores & Events</MenuItem>
            <Typography variant="h6" className='menu-header' component="h6">We're here to help, 24/7</Typography>
            <MenuItem onClick={handleClose} className='items'><PiChatsThin />Contact Us</MenuItem>
          </Menu>
        </Box>
        <Box className="box-content" id="stores"><TbCircleLetterN />Stores</Box>
        <Box className="box-content" id="purchases">
          <BsBoxSeam />{'  '}{' '}Purchases
        </Box>
        <Box className="box-content" id="bag">
          <Badge variant="dot" badgeContent={0} color="secondary">
            <HiOutlineShoppingBag style={{ width: "50px", height: "25px" }} />
          </Badge>
        </Box>
        <Box>
       
        </Box>
      </Box>
    </div>
  );
}

export default HeaderTwo;
