import React from 'react';
import { Box, Typography, } from '@mui/material';
import nvida from '../images/nvida.png'


const Usingnvidia = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${nvida})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: { xs: "120px", sm: "150px", md: "280px", lg: "300px" },
                display: "flex",
                alignItems: "center",
                paddingLeft: { xs: "10px", sm: "100px", md: "180px" },

            }}>

            <Box sx={{ color: "white" }}>
                <Typography
                    fontWeight={900}

                    sx={{
                        fontSize: { xs: "16px", md: "25px" },
                        width: { xs: "250px", md: "350px" }
                    }}>Using <span style={{ color: "#91E227" }}>nvidia</span> cloud to run and
                    produce realistic results.</Typography>
            </Box>

        </Box >
    )
}

export default Usingnvidia