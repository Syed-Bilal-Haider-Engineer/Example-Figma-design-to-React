

import React, { useState, useContext } from "react";
import { AppBar, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography, FormControlLabel, Switch, Button } from "@mui/material";


import { Menu as MenuIcon } from "@mui/icons-material/";
import { ColorModeContext } from '../muiDarkModeStore';
import { blue } from '@mui/material/colors';


const Navbar = () => {
    // console.log("mode", mode)
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    });

    const MenuBox = styled(Box)({
        display: "flex",
    });

    const SigninLogoutBox = styled(Box)({
        display: "flex",
        alignItems: "center",
        gap: 30,
    });

    const MenuItems = [
        { Name: "About", Link: "/" },
        { Name: "Features", Link: "#" },
        { Name: "Why Begin", Link: "#" },
        { Name: "Specs", Link: "#" },
        { Name: "Cross-Store Shopping", Link: "#" },
        { Name: "Contact", Link: "#" },
    ];
    const [open, SetOpen] = useState(false);
    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
            margin: 1,
            padding: 0,
            transform: 'translateX(px)',
            '&.Mui-checked': {

                color: '#fff',
                transform: 'translateX(22px)',
                '& .MuiSwitch-thumb:before': {
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                        '#fff',
                    )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
                },
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
            width: 32,
            height: 32,
            '&:before': {
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
            },
        },
        '& .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            borderRadius: 20 / 2,
        },
    }));
    const { mode, toggleMode } = useContext(ColorModeContext)

    return (
        <AppBar sx={{ position: "fixed", zIndex: 5, bgcolor: "background.navbar" }}>
            <StyledToolbar sx={{ mx: { xs: 2, sm: 2, md: 6, lg:10 } }} >
                <MenuBox sx={{
                    display: { xs: "none", sm: "none", md: "flex" },
                    gap: {  md:4, lg: 7 }
                }}>
                    {MenuItems.map((item, ind) => (
                        <Typography
                            key={ind}
                            sx={{
                                color: "text.navmanue",
                                transition: ".5s ease",
                                cursor: "pointer",
                                fontSize: "12px",
                                '&:hover': {
                                    color: "text.hover"
                                },
                            }}
                        >
                            {item.Name}
                        </Typography>
                    ))}
                </MenuBox>

                <Typography
                    sx={{
                        color: "text.navmanue",
                        cursor: "pointer",
                        display: { xs: "block", sm: "block", md: "none" },
                        '&:hover': {
                            color: "text.hover"
                        },
                    }}
                    onClick={() => SetOpen(!open)}
                >Menu</Typography>

                <SigninLogoutBox>

                    <MaterialUISwitch
                        checked={mode === "dark" ? true : false}
                        onClick={toggleMode}
                        sx={{
                            position: {
                                xs: "absolute",
                                sm: "relative"
                            },
                            ml: {
                                xs: 13,
                                sm: 0
                            },
                            mt: {
                                xs: 20,
                                sm: 0
                            },
                            transform: {
                                xs: "rotate(90deg)",
                                sm: "none"
                            }

                        }} />
                    <Typography sx={{
                        color: "text.navmanue",
                        transition: ".5s ease",
                        cursor: "pointer",
                        fontSize: "12px",
                        '&:hover': {
                            color: "text.hover"

                        },
                    }} >Login</Typography>
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            transition: "1s ease",
                            backgroundColor: "background.navsignupbtn",
                            color: "text.navsignupbtn",
                            '&:hover': {

                                background: blue[400],
                                color: "white"
                            },
                        }}
                    >
                        sign up
                    </Button>


                </SigninLogoutBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={() => SetOpen(!open)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <Box>
                    {MenuItems.map((item, ind) => (
                        <MenuItem
                            key={ind}
                            sx={{
                                cursor: "pointer",
                                fontSize: "13px",
                                '&:hover': {
                                    color: "lightGreen"
                                },

                            }}
                        >
                            {item.Name}
                        </MenuItem>
                    ))}
                </Box>
            </Menu>
        </AppBar >
        // </ThemeProvider>
    );
};

export default Navbar;