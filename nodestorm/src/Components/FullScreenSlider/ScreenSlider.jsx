import { Box } from '@mui/material';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const ScreenSlider = () => {

    const responsive = {
        autoPlay: true,
        interval: 2000,
        showIndicators:false,
        infiniteLoop: true,
        showThumbs: false,
        showStatus: false,
    };

    return (
        <><Box mt="60px" sx={{ height: "150px", width: "100%", margin:"70px 30px" }} >
            <Carousel {...responsive}>
                
                    <Box sx={{ display: "flex", flexDirection: "row", height: "150px", width: "100%" }}>
                        <Box sx={{ display: "flex", flexDirection: "row",height: "150px", width: "100%", marginRight:"50px" }}>
                            <img src="https://n.nordstrommedia.com/it/6b8bfe42-413a-4fc2-92e1-e4ca300d609c.jpeg?h=200&w=1608" alt="" />
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(30%,-70%)",
                                padding: "20px",
                                borderRadius: "8px"
                            }}>
                                <h2><span>Shop Anniversary Sale Early!</span></h2>
                                <span>Plus, get a $40 Bonus Note as a new Nordstrom credit <br />cardmember. Restrictions apply. <Link>Apply Now</Link>
                                </span>
                            </Box>
                        </Box>
                    </Box>
                

                
                    <Box sx={{ display: "flex", flexDirection: "row", height: "150px", width: "100%" }}>
                        <Box sx={{ display: "flex", flexDirection: "row",  height: "150px", width: "100%",  marginRight:"50px"  }}>
                            <img src="https://n.nordstrommedia.com/it/31df62cb-75bc-4ed8-8ae4-a2439266c504.jpeg?h=200&w=1608" alt="" />
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(5%,-70%)",
                                padding: "20px",
                                borderRadius: "8px"
                            }}>
                                <h2> <span>Have an App-etite for Fresh Fashion?</span></h2>
                                <span>Shop Anniversary Sale on our app for the best, most personalized experience.</span>
                            </Box>
                        </Box>
                    </Box>
                
            </Carousel>
            </Box>
        </>
    );
}

export default ScreenSlider;
