import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import dressimg from '../images/dressimg.png'

const ResponsiveImg = styled("img")(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        width: "250px"
    },
    [theme.breakpoints.up("sm")]: {
        width: "250px"
    },
    [theme.breakpoints.up("md")]: {
        width: "300px"
    },

}))

const ResponsiveLine = styled("hr")(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        width: "90%",
        height: "2px",
        background: "white",
        align:"center"

    },
    [theme.breakpoints.up("sm")]: {
        width: "70%",
        height: "2px",
        background: "white",
        align:"center"



    },
    [theme.breakpoints.up("md")]: {
        width: "75%",
        height: "2px",
        background: "white",

    },

}))
const ResponsiveImageLine = styled("hr")(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        width: "90%",
        height: "2px",
        background: "white",
        margin: "0 20px"

    },
    [theme.breakpoints.up("sm")]: {
        display: "none"

    }

}))




const FooterDressComponent = () => {
    return (
        <Box sx={{
            background: "black",
            // px: { xs: 0, sm: 5, md: 15 },
            py: 5,
        }} >

            <Box sx={{
                mx: { xs: 0, sm: 5, md: 15 },
                pt: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 3, sm: 10 }
            }} >

                <Box sx={{
                    width: { xs: "100%", sm: "30%", md: "40%" },
                    textAlign: "center"
                }}>
                    <ResponsiveImg src={dressimg} />
                    <ResponsiveImageLine />


                </Box>
                <Typography sx={{ color: "white", display: { xs: "flex", sm: "none" } }}>ZOZOSUIT</Typography>
                <Box sx={{
                    width: { xs: "100%", sm: "70%", md: "60%" },

                    textAlign: "center",
                    px: { xs: 2, md: 2 }

                }}>
                    <Typography align="center" sx={{
                        color: "white",
                        //  typography: { xs: 'caption', lg: "body2" },
                        fontSize: { xs: "12px", sm: "10px", md: "12px", lg: "14px" }
                    }} >
                        In collaboration with ZOZOSUIT, our mirror will also provide a highly accurate
                        replica of the user’s body via scanning and image processing.
                        Through this, we will also be able to provide motion tracking for the
                        user-customized metahuman in real time, making the experience incredibly
                        realistic provided the mirror will be touch screen and interactive.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                display: "flex", alignItems: "center", pl: { sm: 3, md: 0 },
                pt: { xs: 4 ,sm:0},
                marginTop: "-15px"
            }}>
                <ResponsiveLine />
                <Typography sx={{ color: "white", pl: { md: 6, sm: 5, xs: 5 }, display: { xs: "none", sm: "flex" } }}>ZOZOSUIT</Typography>
            </Box>

        </Box >
    )
}

export default FooterDressComponent