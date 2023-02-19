import React from 'react'
import { Box, Typography } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
    return (
        <Box
            pb={3}

            sx={{ backgroundColor: "black" }}>
            <Box
                pb={7}

                sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", }}>
                <ArrowDropUpIcon
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        })
                    }}
                    sx={{
                        cursor: "pointer", color: "white", fontSize: "80px",
                        position: 'relative',
                        top: '27px',
                        zIndex: 1,
                        transition: '0.5s',

                        '&:hover': {
                            color: "#1ee1b3",
                        }
                    }} />
                <Typography

                    gutterBottom
                    variant="h3"
                    fontWeight={900}
                    sx={{ color: "white", zIndex: 2, }}>
                    BEGIN
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Avatar
                        sx={{
                            backgroundColor: "#403b3b",
                            transition: '0.5s',
                            '&:hover': {
                                background: '#1EE1B3',
                                border: "1px solid #1EE1B3",
                            }
                        }}
                    >
                        <FacebookIcon sx={{ color: "white" }} />
                    </Avatar>
                    <Avatar
                        sx={{
                            backgroundColor: "#403b3b",

                            transition: '0.5s',
                            '&:hover': {
                                background: '#1EE1B3',
                                border: "1px solid #1EE1B3",
                            }
                        }}
                    >
                        <TwitterIcon sx={{ color: "white" }} />
                    </Avatar>
                    <Avatar
                        sx={{
                            backgroundColor: "#403b3b",

                            transition: '0.5s',
                            '&:hover': {
                                background: '#1EE1B3',
                                border: "1px solid #1EE1B3",
                            }
                        }}
                    >
                        <InstagramIcon sx={{ color: "white" }} />
                    </Avatar>
                </Stack>
            </Box>
            <Box sx={{
                mx: { xs: 3, sm: 5, md: 15 },
                display: "flex",
                justifyContent: { xs: "center", sm: "space-between" },

            }}>
                <Box>
                    <Typography sx={{ fontSize: "12px", color: "white" }} >
                        ©
                        <span style={{ paddingLeft: "20px" }}>All Rights Reserved</span>

                    </Typography>
                </Box>
                <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                    <Typography sx={{ fontSize: "12px", color: "white" }}>
                        <span >Terms and Conditions</span>
                        <span style={{ padding: "0 20px" }} >.</span>
                        <span >Privacy Policy</span>
                    </Typography>
                </Box>

            </Box>
        </Box >
    )
}

export default Footer