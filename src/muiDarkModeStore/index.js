import { createContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { brown } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
export const ColorModeContext = createContext({
    toggleMode: () => { },
    mode: "light"
});

const themeObj = {
    light: {
        background: {
            navbar: "white",
            navsignupbtn: "#1EE1B3",
            learnmorebtn: "black",
            everythingavatar: "#1EE1B3",
            enhancebgcolor: brown[900],
            howusefull: brown[700],
            introducingbg: grey[200]

        },
        text: {
            navmanue: "black",
            hover: "#1EE1B3",
            navsignupbtn: "black",
            learnmorebtn: "white",
            threedbtncolor:"black",
        }
    },

    dark: {
        background: {
            learnmorebtn: "white",
            everythingavatar: "white",
            navsignupbtn: "#1EE1B3",
            enhancebgcolor: grey[900],


        },
        text: {
            learnmorebtn: "black",
            hover: "#1EE1B3",
            threedbtncolor:"white",
        }
    },

}
export const ColorContectProvider = ({ children }) => {
    const [mode, setMode] = useState("light")
    const colorMode = useMemo(() => ({
        toggleMode: () => setMode(prevMode => prevMode === "light" ? "dark" : "light"),
        mode
    }), [mode])



    const theme = useMemo(() => createTheme({
        palette: {
            mode: mode,
            ...themeObj[mode]
        }
    }), [mode])

    return (

        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>

                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}