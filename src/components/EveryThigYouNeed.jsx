import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import BorderHorizontalIcon from '@mui/icons-material/BorderHorizontal';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import ManIcon from '@mui/icons-material/Man';

import img1 from '../images/img1.png'

export default function EveryThigYouNeed() {

    const ResponsiveImg = styled("img")(({ theme }) => ({
        [theme.breakpoints.down("sm")]: {
            width: "200px",
            height: "400px"
        },
        [theme.breakpoints.up("sm")]: {
            width: "200px",
            height: "300px"
        },
        [theme.breakpoints.up("md")]: {
            width: "270px",
            height: "400px"
        },

    }))
    return (
        <Box sx={{ mx: { xs: 3, sm: 5, md: 15 } }} my={10}>
            <Grid container spacing={5}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: {
                        xs: "column-reverse",
                        sm: "row"
                    }
                }}
                    >
                <Grid item xs={12} sm={6}
                    sx={{
                        display: "flex",
                        justifyContent: { xs: "center", sm: "start" },
                        alignItems: 'center',

                    }}
                >
                    <Box
                    >
                        <Box sx={{
                            mt: { xs: "80px", sm: "50px" },
                            position: "absolute",
                            zIndex: 1,
                            width: { xs: "180px", sm: "200px", md: "300px" },
                            height: { xs: "275px", sm: "200px", md: "275px" },
                            border: '3px solid #1EE1B3',
                            transform: 'rotate(-22.32deg)',
                        }}></Box>
                        <Box
                            sx={{
                                width: '100%',
                                height: "100%",
                                position: "relative",
                                zIndex: 2,

                            }}
                        >
                            <ResponsiveImg src={img1}
                            />

                        </Box>

                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>

                    <Typography

                        sx={{ fontSize: { xs: "1.5rem", sm: "1.2rem", md: "1.6rem", lg: "2rem" } }}
                        fontWeight="900" >
                        EVERYTHING YOU NEED!
                    </Typography>
                    <hr
                        style={{
                            background: 'linear-gradient(90deg, #1EE1B3 60%, #5e5555 60%)',
                            border: "none",
                            height: '2px',
                            width: "150px",
                        }}
                    />

                    <Box sx={{ py: 5 }}>
                        <Box
                            display="flex"
                            alignItems="center"

                            sx={{ py: { xs: 3, sm: 1, md: 2, lg: 3 } }}
                        >
                            <Avatar sx={{ width: 60, height: 60, backgroundColor: "background.everythingavatar" }}>
                                <BorderHorizontalIcon fontSize="large" sx={{ color: "black" }} />
                            </Avatar>
                            <Box sx={{ pl: { xs: 4, md: 6 } }} >
                                <Typography gutterBottom
                                    sx={{ fontSize: { sm: 12, md: "1rem" }, fontWeight: "500" }}
                                >
                                    Body measurement tracking
                                </Typography>
                                <Typography variant="caption" display="block"
                                    sx={{ fontSize: { sm: 10, md: 11 }, fontWeight: 'light' }}
                                >
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                                </Typography>
                            </Box>
                        </Box >
                        <Box
                            display="flex"
                            alignItems="center"

                            sx={{ py: { xs: 3, sm: 1, md: 2, lg: 3 } }}
                        >
                            <Avatar sx={{ width: 60, height: 60, backgroundColor: "background.everythingavatar" }}>
                                <DoorSlidingIcon fontSize="large" sx={{ color: "black" }} />

                            </Avatar>
                            <Box sx={{ pl: { xs: 4, md: 6 } }} >
                                <Typography gutterBottom
                                    sx={{ fontSize: { sm: 12, md: "1rem" }, fontWeight: "500" }}
                                >
                                    In home trial of clothes and closet
                                </Typography>
                                <Typography variant="caption" display="block"
                                    sx={{ fontSize: { sm: 10, md: 11 }, fontWeight: 'light' }}
                                >
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                                </Typography>
                            </Box>
                        </Box >
                        <Box
                            display="flex"
                            alignItems="center"

                            sx={{ py: { xs: 3, sm: 1, md: 2, lg: 3 } }}
                        >
                            <Avatar sx={{ width: 60, height: 60, backgroundColor: "background.everythingavatar" }}>
                                <ManIcon fontSize="large" sx={{ color: "black" }} />
                            </Avatar>
                            <Box sx={{ pl: { xs: 4, md: 6 } }} >
                                <Typography variant="subtitle1" gutterBottom
                                    sx={{ fontSize: { sm: 12, md: "1rem" }, fontWeight: "500" }}
                                >
                                    Recommendation of clothes using AI
                                </Typography>
                                <Typography variant="caption" display="block"
                                    sx={{ fontSize: { sm: 10, md: 11 }, fontWeight: 'light' }}
                                >
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                                </Typography>
                            </Box>
                        </Box >

                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
}
