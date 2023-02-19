import React, { useState } from 'react';
import { Box, Button, Typography, styled, Grid } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { grey } from '@mui/material/colors';


import img1 from '../images/fall/img1.png'
import img2 from '../images/fall/img2.png'
import img3 from '../images/fall/img3.png'

import { BsArrowLeft, BsArrowRight, BsBoxArrowInUp } from 'react-icons/bs';

import Slider from "react-slick";

const images = [img1, img2, img3];

const comonBtnStyling = {
    display: 'flex',
    position: 'absolute',
    zIndex: 1,
    cursor: 'pointer',
    top: '24px',

}
function SampleNextArrow({ onClick }) {

    return (
        <Box sx={{
            ...comonBtnStyling, right: 0, bgcolor: grey[500],
            transition: ".5s ease",
            "&:hover": {
                bgcolor: grey[700],
                "& .rightArrow": {
                    color: "#1EE1B3",
                },
            },
        }} onClick={onClick}>
            <KeyboardArrowRightIcon className='rightArrow' sx={{ color: "white" }} />
        </Box>

    );
}

function SamplePrevArrow({ onClick }) {

    return (
        <Box sx={{
            ...comonBtnStyling, right: 23, bgcolor: grey[600],
            transition: ".5s ease",
            "&:hover": {
                bgcolor: grey[700],
                "& .leftArrow": {
                    color: "#1EE1B3",
                },
            },
        }} onClick={onClick}>
            <KeyboardArrowLeftIcon className='leftArrow' sx={{ color: "white" }} />
        </Box>

    );
}

export default function Introducing() {
    // const [slideIndex, setSlideIndex] = useState(0);
    const settings = {
        // infinite: true,
        slidesToShow: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        slidesToScroll: 1,
        centerPadding: 0,
        // beforeChange: (current, next) => setSlideIndex(next),
        // centerMode: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const OverlayBox = styled(Box)({
        textAlign: "center",
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.7)',
        overflow: 'hidden',
        width: "100 %",
        height: 0,
        transition: ".5s ease",
    });

    const ContainerBox = styled(Box)({
        width: '250px',
        height: "100%",
        position: "relative",

    });

    return (
        <Box sx={{ backgroundColor: "background.introducingbg", }}>

            <Box sx={{

                mx: {
                    xs: 3, sm: 5, md: 15,
                }
            }} mb={10}>
                <Grid container
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: {
                            xs: "column-reverse",
                            sm: "row"
                        }
                    }}>
                    <Grid item xs={12} sm={7} sx={{ py: 5 }}>
                        <Typography variant="h6" >
                            Introducing
                        </Typography>
                        <hr
                            style={{
                                background: 'linear-gradient(90deg, #1EE1B3 60%, #5e5555 60%)',
                                border: "none",
                                height: '2px',
                                width: "80px",
                            }}
                        />
                        <p style={{ fontSize: "12px", padding: "20px 0" }}   >
                            The newly designed BEGIN will completely alter
                            the reality of fashion, individually and commercially
                            as we know it. A major attribute of this mirror is to
                            provide the user with the resources of complex fashion
                            and style that many find difficult to obtain. Its main
                            focus will be the user’s stylistic preferences and will
                            then provide the user with an outfit which meets
                            their own style while simultaneously using expert
                            knowledge to ensure an outfit of pride.
                            <br />
                            <br />

                            Because self-presentation is such a prominent
                            element of judgement, all kinds of people are vehemently dressing in all kinds of ways to fit certain
                            descriptions, norms, and anything that will allow their
                            confidence to break through the cracks of self-doubt.
                        </p>

                        <br />
                        <Button variant=" contained"
                            sx={{
                                transition: ".5s ease",
                                fontSize: "10px",
                                border: "1px solid black",
                                px: { xs: 2, sm: 3 },
                                backgroundColor: "background.learnmorebtn",
                                color: "text.learnmorebtn",
                                '&:hover': {
                                    background: '#1EE1B3',
                                    border: "1px solid #1EE1B3",
                                    color: "text.learnmorebtn",
                                },

                            }}  >learn more</Button>

                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ py: 5, display: "flex", justifyContent: { xs: "center", sm: "end" } }}>
                        <ContainerBox className="introducingContainer "
                            sx={{
                                "&:hover": {
                                    "& .introducingOverlay": {
                                        height: "26%",
                                    },
                                    "& .hoverimg": {
                                        transform: 'scale(1.1)',
                                    },
                                },
                            }}
                        >
                            <Slider {...settings}>
                                {
                                    images.map((image, index) => (
                                        <Box key={index} style={{ overflow: 'hidden' }} >
                                            <Box sx={{
                                                backgroundColor: "#1EE1B3",
                                                height: "24px",
                                                width: "80px",
                                                marginLeft: index == 0 ? "30px" : index == 1 ? "80px" : "140px"
                                            }}>
                                            </Box>
                                            <Box style={{ overflow: "hidden" }}>
                                                <img className="hoverimg" src={image} alt="" style={{ width: "100%", height: "100%", transition: ".5s ease", }} />
                                            </Box>
                                        </Box>
                                    ))
                                }
                            </Slider>
                            {/* <div style={{backgroundColor:"red"}}>sdag</div> */}
                            <OverlayBox className="introducingOverlay"  >
                                <Typography pt={1} color="#1EE1B3" variant="subtitle2">Loram Ipsum</Typography>
                                <Typography px={3} sx={{ fontSize: "11px" }} display="block" color="white" >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate </Typography>
                            </OverlayBox>
                        </ContainerBox>

                    </Grid>
                </Grid>
            </Box >
        </Box >

    );
}
