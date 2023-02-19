import React from 'react'
import { Box, styled } from '@mui/material';

import logo1 from '../images/complogo/logo1.png'
import logo2 from '../images/complogo/logo2.png'
import logo3 from '../images/complogo/logo3.png'
import logo4 from '../images/complogo/logo4.png'
import logo5 from '../images/complogo/logo5.png'
import beginimg from '../images/beginimg.png'




const CompaniesLogoList = () => {

    const compantLogoImages = [logo1, logo2, logo3, logo4, logo5]

    const ResponsiveImg = styled("img")(({ theme }) => ({

        [theme.breakpoints.down("sm")]: {
            width: "40px"
        },
        [theme.breakpoints.up("sm")]: {
            width: "70px"
        },
        [theme.breakpoints.up("md")]: {
            width: "100px"
        },

    }))

    return (
        <Box sx={{ backgroundColor: "background.introducingbg",}}>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 6,
                    width: '100%',
                    gap: {
                        xs: 2,
                        sm: 5,
                        md: 10
                    },

                }}
            >
                {compantLogoImages.map((img, ind) => (
                    <ResponsiveImg src={img} key={ind} />
                ))}
            </Box>
        </Box>
    )
}

export default CompaniesLogoList