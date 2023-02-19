import React from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import Slider from "react-slick";

import black from '../images/coat/black.png';
import brown from '../images/coat/brown.png';
const images = [brown, black]

const comonBtnStyling = {
    display: 'flex',
    position: 'absolute',
    zIndex: 5,
    cursor: 'pointer',

}

function SampleNextArrow({ onClick }) {

    return (
        <Box sx={{
            ...comonBtnStyling,
            zIndex: 5,
            right: { xs: -20, md: -30 },
            transition: ".5s ease",
            top: 50

        }} onClick={onClick}>
            <KeyboardArrowRightIcon sx={{ color: "text.threedbtncolor" }} />
        </Box>

    );
}

function SamplePrevArrow({ onClick }) {

    return (
        <Box sx={{
            ...comonBtnStyling,
            right: { xs: -20, md: -30 },
            transition: ".5s ease",
            top: 100,

        }} onClick={onClick}>
            <KeyboardArrowLeftIcon className='leftArrow' sx={{ color: "text.threedbtncolor" }} />
        </Box>

    );
}

const ThreeDclothing = () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        centerPadding: 0,
        // beforeChange: (current, next) => setSlideIndex(next),
        centerMode: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,


    };
    return (
        <Box
            sx={{
                px: {
                    xs: 3, sm: 4, md: 7, lg: 10,
                },
                py: {
                    xs: 10, sm: 10, md: 7, lg: 10,
                },
            }}
        >
            <Box
                sx={{
                    p: { xs: 2, sm: 3, md: 4, lg: 8 },
                    backgroundColor: "black",
                    zIndex: 2,
                    position: "relative"

                }}  >


                <Box sx={{
                    width: { xs: "100%", md: "60%" }

                }} >
                    <Box>
                        <Typography variant="h4" fontWeight={900} sx={{ color: "white" }} >3D clothing simulation on
                            user-designed metahuman</Typography>
                        <hr
                            style={{
                                background: 'linear-gradient(90deg, #1EE1B3 60%, #5e5555 60%)',
                                border: "none",
                                height: '2px',
                                width: "150px",
                                marginTop: "10px"
                            }}
                        />
                        <Typography variant="body2" sx={{ color: "white", my: 4 }} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie</Typography>

                        <Button variant="contained"
                            className='clothingbtn'
                            sx={{
                                backgroundColor: "white", color: "black",
                                transition: '0.5s',
                                "&:hover": {
                                    bgcolor: "black",
                                    color: "white",
                                    "& .btnarrowright": {
                                        marginLeft: "10px",

                                    },
                                },

                            }}
                            endIcon={<KeyboardArrowRightIcon className='btnarrowright' sx={{ color: "#1EE1B3B3", transition: '0.5s', }} />}
                        > DISCOVER MORE</Button>
                    </Box>

                </Box>
                <Box sx={{
                    position: "absolute",
                    top: -50,
                    right: 0,
                    bottom: 0,
                    margin: "auto",
                    width: { xs: "250px", sm: "300px", md: "330px" },
                    zIndex: "-1"
                }} >

                    <Slider {...settings}>
                        {
                            images.map((image, ind) => (
                                <img key={ind} src={image} alt=" three d clothing"  style={{ width: "100%" }} />

                            ))
                        }

                    </Slider>


                </Box>

            </Box>
        </Box >
    )
}

export default ThreeDclothing