import { Box, Typography } from '@mui/material'
import React from 'react'

const products = [
  {
    img: "https://n.nordstrommedia.com/id/sr3/fb3a3a81-e959-49f9-9a9c-aa3cd6899649.jpeg?q=45&dpr=2&h=365.31&w=230",
    title: "New!",
    brand: "Zella",
    price: "INR 4,394.37",
    rating: "★★★★★ (5)"
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/490ef1a4-eb14-446f-b344-38f10aaca301.jpeg?q=45&dpr=2&h=365.31&w=230",
    brand: "Caslon®",
    price: "INR 3,968.37",
    oldPrice: "INR 4,394.37",
    rating: "★★★★☆ (310)"
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/87c5eeac-0a0d-4997-875c-3cc2b8034a8c.jpeg?q=45&dpr=2&h=365.31&w=230",
    brand: "Splendid",
    price: "INR 14,169.61",
    rating: "★★★☆☆ (29)"
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/e99b922e-46bf-4e06-a893-1a64a2e3edbc.jpeg?q=45&dpr=2&h=365.31&w=230",
    brand: "Splendid",
    price: "INR 14,169.61",
    rating: "★★★☆☆ (29)"
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/aac168e3-acb5-4ee7-a931-27b853573fcd.jpeg?q=45&dpr=2&h=365.31&w=230",
    brand: "Splendid",
    price: "INR 14,169.61",
    rating: "★★★☆☆ (29)"
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/1a0fcf2a-1541-40d8-b64c-51f77f48c5ef.jpeg?q=45&dpr=2&h=365.31&w=230",
    brand: "Splendid",
    price: "INR 14,169.61",
    rating: "★★★☆☆ (29)"
  }
];

const CardFour = () => {
  return (
    <><h6>Trending Near You</h6>
    <br />
    <p style={{fontSize:"10px"}}>The most-viewed items by shoppers in your area</p>
    <br />
      
        <Box sx={{ border: "1px solid black", width: "90%", margin: "0px auto", padding: "20px", display: "flex",flexDirection:"row", justifyContent: "space-between", gap: "20px" }}>
        
        {products.map((product, index) => (
          <Box key={index} sx={{ width: "calc(33.33% - 20px)", display: "flex", flexDirection: "column", alignItems: "center", border: "none" }}>
            <Box sx={{ width: "100%", height: "250px", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid black", borderRadius: "5px", overflow: "hidden" }}>
              <img src={product.img} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </Box>
            {product.title && <Typography mt="10px" sx={{ color: "#361678", fontWeight: "bold" }}>{product.title}</Typography>}
            <Typography>{product.brand}</Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>{product.price}</Typography>
            {product.oldPrice && <Typography variant="h6" component="h6" sx={{ textDecoration: "line-through" }}>{product.oldPrice}</Typography>}
            <Typography>{product.rating}</Typography>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default CardFour
