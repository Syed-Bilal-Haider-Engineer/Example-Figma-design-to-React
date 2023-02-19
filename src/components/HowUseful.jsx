import React from 'react';
// import Stack from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Typography, Box, Button } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import { display } from '@mui/system';


const StyledBox = styled(Box)({
    width: "250px",
    backgroundColor: "#0C0C11",
    color: "white",
    margin: "20px",
    padding: "22px",

})


const HowUseful = () => {
    return (
        <Box sx={{ py: 5,
        backgroundColor:"background.howusefull"
        }}>
            <Typography variant="h6" align="center" sx={{color:"white"}}>
                How it is useful for user and companies
            </Typography>
            <Box

                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection:{xs:"column", sm:"row"},
                    alignItems:"center",
                    py: 3
                }}>

                <StyledBox >
                    <Box sx={{ display: "flex", mb: 1 }}>
                        <Typography variant="subtitle2" gutterBottom
                            sx={{
                                fontWeight: 900,
                                transition: '0.5s',

                                '&:hover': {
                                    paddingRight: "1rem",
                                },
                            }}
                        >
                            Lorem Ipsum


                        </Typography>
                        <KeyboardArrowRightIcon sx={{ color: "#1EE1B3B3" }} />
                    </Box>

                    <Typography sx={{ fontSize: "11px" }} display="block" >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi  </Typography>
                </StyledBox>
                <StyledBox >
                    <Box sx={{ display: "flex", mb: 1 }}>


                        <Typography variant="subtitle2" gutterBottom
                            sx={{
                                fontWeight: 900,
                                transition: '0.5s',

                                '&:hover': {
                                    paddingRight: "1rem",
                                },
                            }}
                        >
                            Lorem Ipsum


                        </Typography>
                        <KeyboardArrowRightIcon sx={{ color: "#1EE1B3B3" }} />
                    </Box>

                    <Typography sx={{ fontSize: "11px" }} display="block" >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi  </Typography>
                </StyledBox>
                <StyledBox >
                    <Box sx={{ display: "flex", mb: 1 }}>


                        <Typography variant="subtitle2" gutterBottom
                            sx={{
                                fontWeight: 900,
                                transition: '0.5s',

                                '&:hover': {
                                    paddingRight: "1rem",
                                },
                            }}
                        >
                            Lorem Ipsum


                        </Typography>
                        <KeyboardArrowRightIcon sx={{ color: "#1EE1B3B3" }} />
                    </Box>

                    <Typography sx={{ fontSize: "11px" }} display="block" >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi  </Typography>
                </StyledBox>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>

                <Button variant=" contained"
                    sx={{
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
            </Box>
        </Box>
    )
}

export default HowUseful