
import { useState } from 'react';

import { Box } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Slider from "react-slick";

import logo1 from '../images/logos/logo1.png';
import logo2 from '../images/logos/logo2.png';
import logo3 from '../images/logos/logo3.png';
import logo4 from '../images/logos/logo4.png';
import logo5 from '../images/logos/logo5.png';

import { grey } from '@mui/material/colors';

const logos = [logo1, logo2, logo3, logo4, logo5, logo3];

const CommenBtnStyled = {
    fontSize: '30px',
    padding: '5px',
    borderRadius: '50%',
    boxShadow: "0 0 5px 3px #ccc",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    width: '20px',
    height: '20px',
    position: 'absolute',
    zIndex: '1',
    cursor: 'pointer',
}


function SampleNextArrow({ onClick }) {

    return (
        <Box
            sx={{
                ...CommenBtnStyled,
               

                right: '0',
                top: {
                    xs: '40px',
                    md: "50px"
                },

            }}
            onClick={onClick} >
            <KeyboardArrowRightIcon />
        </Box >

    );
}

function SamplePrevArrow({ onClick }) {

    return (
        <Box
            sx={{
                ...CommenBtnStyled,
                left: "0",
                top: {
                    xs: '40px',
                    md: "50px"
                },
            }}
            className="arrow arrow-left" onClick={onClick}>
            <KeyboardArrowLeftIcon />
        </Box>

    );
}

function CrossStore() {
    const [slideIndex, setSlideIndex] = useState(0);

    const settings = {
        infinite: true,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        centerPadding: 0,
        beforeChange: (current, next) => setSlideIndex(next),
        centerMode: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },


        ]
    };


    return (
        <Box sx={{ mx: { xs: 3, sm: 5, md: 15 } }} my={10}>



            <Slider {...settings} style={{
                padding: "0 5%",
            }} >
                {
                    logos.map((logo, index) => (
                        <Box
                            sx={{
                                bgcolor:grey[200],
                                p: { xs: 1, md: 2 },
                                width: { xs: "50px" },
                                height: { xs: "100px", md: '120px' },
                                border: '1px solid ',
                                transform: index === slideIndex ? 'scale(0.8)' : "scale(0.7)",
                                transition: ' 0.5s',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            key={index} >
                            <img src={logo} alt="" style={{ width: "100%", height: "100%" }} />
                        </Box>
                    ))
                }
            </Slider>

        </Box >

    );
}

export default CrossStore;



