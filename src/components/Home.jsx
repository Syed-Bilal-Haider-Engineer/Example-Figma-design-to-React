import React from 'react';
import { Box, Button, Typography, } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Instagram, Twitter, } from "@mui/icons-material/";
import bgimg from '../images/bg.png';
import { Stack } from '@mui/system';
import 'animate.css';


const Home = () => {

    const commenBtnStyling = {
        fontSize: "10px",
        border: "1px solid black",
    }
    return (
        <Box>
            <Box sx={{
                backgroundImage: `url(${bgimg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "100vh",
                width: "100%",
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-end" },
                alignItems: 'center',
                textAlign: "end",
            }}>


                <Box sx={{
                    position: "relative",
                    color: "#FFFFFF", textAlign: "end", width: "280px",
                    mr: { sm: 10, md: 15 },
                }}>
                    <Typography variant="h6"
                        sx={{ color: "#1EE1B3" }}
                        className=" animate__animated animate__fadeInUp"
                    >
                        TAGLINE
                    </Typography>
                    <Typography variant="h1" sx={{ fontWeight: 900}}
                        className=" animate__animated animate__fadeInUp"
                    >
                        BEGIN
                    </Typography>
                    <hr
                        className=" animate__animated animate__fadeInUp"
                        style={{
                            background: '#1EE1B3',
                            borderColor: '#1EE1B3',
                            height: '3px',
                            width: "50px",
                            position: "absolute",
                            right: 0
                        }}
                    />
                    <Typography sx={{ fontSize: "10px", mt: 3 }}
                        className=" animate__animated animate__fadeInUp"
                    >
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ibh euismod tincidunt ut laoreet dolore magna aliquam erat  er adipiscing elit, sed diam nonummy nibh euismod tincidunt
                    </Typography>

                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                        sx={{ pt: 3 }}
                        className=" animate__animated animate__fadeInUp"
                    >
                        <Button variant="outlined" sx={{ ...commenBtnStyling, px: { xs: 2, sm: 3 }, color: "white", '&:hover': {
                                
                                    border: "1px solid black",
                                }, }} >ENTER YOUR EMAIL</Button>
                        <Button variant=" contained"
                            sx={{
                                ...commenBtnStyling,
                                '&:hover': {
                                    background: '#1EE1B3',
                                    border: "1px solid #1EE1B3",
                                    color: "black",
                                }, px: { xs: 2, sm: 3 }, background: "black", color: "white",
                            }}  >get started</Button>
                    </Stack>
                </Box>

                {/* social icons box */}
                <Box sx={{
                    color: "white",
                    position: "absolute",
                    left: { sm: 50 },

                    top: "90vh",
                    display: "flex",
                    gap: 3,
                }}>
                    <Instagram sx={{
                        width: 50,
                        transition: ".5s ease",
                        fontSize: { xs: 30, sm: 20 },
                        '&:hover': {
                            fontSize: "30px",
                            cursor: "pointer"

                        },
                    }} />
                    <Twitter sx={{
                        width: 50,
                        transition: ".5s ease",
                        fontSize: { xs: 30, sm: 20 },
                        '&:hover': {
                            fontSize: "30px",
                            cursor: "pointer"

                        },
                    }} />
                    <FacebookOutlinedIcon sx={{
                        width: 50,
                        transition: ".5s ease",
                        fontSize: { xs: 30, sm: 20 },
                        '&:hover': {
                            fontSize: "30px",
                            cursor: "pointer"

                        },
                    }} />
                </Box>
            </Box>
        </Box >
    )
}

export default Home