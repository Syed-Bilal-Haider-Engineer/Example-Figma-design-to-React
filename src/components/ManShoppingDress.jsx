import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import manimg from '../images/manimg.png'

const ManShoppingDress = () => {
    return (
        <Box
            // my={10}
            sx={{
                mx: { xs: 3, sm: 5, md: 15 },
                backgroundImage: `url(${manimg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: { xs: "100%", sm: "90%", md: "80%" },
                height: { xs: "400px", sm: "500px", md: "600px" },
                display: "flex",
                alignItems: "center"

            }}>
            <Box
                pb={10}
                sx={{ ml: "55%", }}
            >
                <Typography
                    sx={{
                        typography: {  xs: 'caption', lg: "subtitle1" },
                        fontSize:{xs:"5px", sm:"12px"}
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpuLorem ipsum dolor sit amet, consectetuer adipiscing elit,
                </Typography>

                <Button variant=" contained"

                    sx={{
                        transition: ".5s ease",

                        mt: 5,
                        position: 'relative',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: { xs: "8px", sm: "10px" },
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
            </Box>
        </Box >
    )
}

export default ManShoppingDress