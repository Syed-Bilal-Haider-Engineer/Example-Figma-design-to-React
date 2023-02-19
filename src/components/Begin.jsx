import React from 'react';
import beginimg from '../images/beginimg.png';
// import { styled } from '@mui/material/styles';
import { Box , styled} from '@mui/material';

const Begin = () => {
    const ResponsiveImg = styled("img")(({ theme }) => ({

        display: "flex",
        position: 'absolute',
        margin: 'auto',
        top: '92vh',

        [theme.breakpoints.down("sm")]: {
            top: '95vh',
            width: '300px',
            justifyContent: "center"
        },
        [theme.breakpoints.up("sm")]: {
            width: '460px',
        },

    }))
    return (
        <Box
            sx={{

                mx: {
                    xs: 3, sm: 5, md: 15,
                },
                display: "flex",
                justifyContent: { xs: "center", sm: "start" }
            }}
        >

            <ResponsiveImg src={beginimg} alt="BEGIN LOGO" />
           
        </Box>


    )
}

export default Begin