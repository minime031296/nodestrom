import { Box, Typography, Button, InputBase, Dialog } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";

const Dialogue = ({ open, setOpen }) => {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} sx={{ borderRadius: "0px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "10px 60px",
          maxWidth: '100%',
          boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;", // Key change for width control
          position: 'relative'
        }}
      >
        <Box sx={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer' }}>
          <AiOutlineClose onClick={handleClose} size={24} />
        </Box>

        <Box sx={{ mr: "10px" }}>
          <h2>We ship internationally</h2>
          <br />
          <Typography>
            Nordstrom ships to over 200 countries/regions worldwide through our
            delivery partner Borderfree.
          </Typography>
          <br />
          <label><strong>Ship To</strong></label>
          <br />
          <InputBase placeholder='India' 
           variant="filled" 
           sx={{
             border: '1px solid #ced4da',
             borderRadius: 1,
             width: '100%'
           }}/>
          <br />
          <label><strong>Shop in</strong></label>
          <br />
          <InputBase 
            variant="filled" 
            placeholder='Indian Rupee(INR)' 
            sx={{
              border: '1px solid #ced4da',
              borderRadius: 1,
              width: '100%'
            }}
          />
          <br />
          Or <Link>ship to a U.S. address</Link>
          <br />
          <br />
          <br />
          <Box>
            <Button variant="contained" sx={{backgroundColor:"black", color:"white", "&:hover": {backgroundColor:"black"}}}>Save</Button>
            <Button onClick={handleClose} sx={{color:"black"}}>Cancel</Button>
          </Box>
        </Box>
        <hr style={{ display: "flex", flexDirection: "column" }} />
        <Box ml="20px">
          <h4>A few things to know:</h4>
          <ul>
            <li>Prices and payment are shown in your local currency.</li>
            <li>
              International shipping costs are based on your items, shipping
              method and destination.
            </li>
            <li>
              All taxes and duties are prepaid and shown at Checkout—there are
              no surprise charges at delivery!
            </li>
          </ul>
          <Typography>
            Questions about international shipping?
            <Link>Get more details or contact us.</Link>
          </Typography>
        </Box>
      </Box>
    </Dialog>
  );
};

export default Dialogue;
