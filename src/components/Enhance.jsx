import { useState } from 'react';
import { Typography, Box } from '@mui/material'
import Stack from '@mui/material/Stack'
import React from 'react';
// import { grey } from '@mui/material/colors';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Enhance = () => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };


    const boxStyle = {
        width: "50px",
        height: "50px",
        transition: '0.5s',
        border: isHover ? '1px solid #1EE1B3' : '1px solid white ',
        backgroundColor: ' #212121',
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    const playArrowIcon = {
        transition: '0.5s',
        color: isHover ? '#1EE1B3' : 'white',
        width: isHover ? '35px' : '20px',
        height: isHover ? '35px' : '20px',


    };


    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={4}
            sx={{
                width: "100%",
                minHeight: "250px",
                backgroundColor: "background.enhancebgcolor"
            }}
        >

            <Typography sx={{ maxWidth: "500px", textAlign: "center", lineHeight: "1.5rem", color: "white" }} variant='h6'>
                Enhance your shopping experience
                with elevated expertise and efficient time constraints.
            </Typography>
            <hr
                style={{
                    background: '#1EE1B3',
                    borderColor: '#1EE1B3',
                    height: '3px',
                    width: "60px",
                }}
            />

            <Box
                style={boxStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                <PlayArrowIcon style={playArrowIcon} />

            </Box>

        </Stack>
    )
}

export default Enhance