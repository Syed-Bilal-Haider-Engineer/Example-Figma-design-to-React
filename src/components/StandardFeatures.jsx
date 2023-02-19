
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, } from "@mui/material";
import { grey } from '@mui/material/colors';
import MemoryIcon from '@mui/icons-material/Memory';


export default function StandardFeatures() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{
            mx: { xs: 3, sm: 5, md: 20, },
        }}
            my={10}
            w={1}
        >
            <Box mb={3} sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <Typography variant="h6" gutterBottom fontWeight="900" >
                    Standar Features
                </Typography>
                <hr
                    style={{
                        background: '#1EE1B3',
                        borderColor: '#1EE1B3',
                        height: '3px',
                        width: "60px",
                        margin:"15px 0"
                    }}
                />
            </Box>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}

                sx={{ borderTop: 1, }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#1EE1B3B3", }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{
                        flexShrink: 0,
                        fontWeight: 900,
                        color: 'text.secondary',
                        transition: '0.5s',

                        '&:hover': {

                            color: grey[400],
                        },
                    }}>
                        HARDWARE
                    </Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box
                            sx={{
                                width: "40%",
                                display: "flex",
                                alignItems: "center"
                            }}>

                            <MemoryIcon fontSize="large" />
                            <Typography ml={2} fontWeight={900}>
                                Lorem
                            </Typography>
                            {/* dsga */}
                        </Box>
                        <Box
                            sx={{
                                width: "50%",
                            }}>

                            <Typography variant="body2" sx={{ textAlign: { xs: "left", sm: "end" } }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                            <hr
                                style={{
                                    background: 'rgb(171 165 165)',
                                    borderColor: 'rgb(171 165 165)',
                                    height: '3px',
                                    width: "100%",
                                    margin: "10px 0"
                                }}
                            />

                            <Typography variant="body2" sx={{ textAlign: { xs: "left", sm: "end" } }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                        </Box>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}

                sx={{ borderTop: 1, }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#1EE1B3B3", }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{
                        flexShrink: 0,
                        fontWeight: 900,
                        color: 'text.secondary',
                        transition: '0.5s',

                        '&:hover': {

                            color: grey[400],
                        },
                    }}>
                        HARDWARE
                    </Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box
                            sx={{
                                width: "40%",
                                display: "flex",
                                alignItems: "center"
                            }}>

                            <MemoryIcon fontSize="large" />
                            <Typography ml={2} fontWeight={900}>
                                Lorem
                            </Typography>
                            {/* dsga */}
                        </Box>
                        <Box
                            sx={{
                                width: "50%",
                            }}>

                            <Typography variant="body2" sx={{ textAlign: { xs: "left", sm: "end" } }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                            <hr
                                style={{
                                    background: 'rgb(171 165 165)',
                                    borderColor: 'rgb(171 165 165)',
                                    height: '3px',
                                    width: "100%",
                                    margin: "10px 0"
                                }}
                            />

                            <Typography variant="body2" sx={{ textAlign: { xs: "left", sm: "end" } }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                        </Box>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}

                sx={{ borderTop: 1, }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#1EE1B3B3", }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{
                        flexShrink: 0,
                        fontWeight: 900,
                        color: 'text.secondary',
                        transition: '0.5s',

                        '&:hover': {

                            color: grey[400],
                        },
                    }}>
                        HARDWARE
                    </Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box
                            sx={{
                                width: "40%",
                                display: "flex",
                                alignItems: "center"
                            }}>

                            <MemoryIcon fontSize="large" />
                            <Typography ml={2} fontWeight={900}>
                                Lorem
                            </Typography>
                            {/* dsga */}
                        </Box>
                        <Box
                            sx={{
                                width: "50%",
                            }}>

                            <Typography variant="body2" sx={{ textAlign: { xs: "left", sm: "end" } }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                            <hr
                                style={{
                                    background: 'rgb(171 165 165)',
                                    borderColor: 'rgb(171 165 165)',
                                    height: '3px',
                                    width: "100%",
                                    margin: "10px 0"
                                }}
                            />

                            <Typography variant="body2" sx={{ textAlign: { xs: "left", sm: "end" } }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                        </Box>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}

                sx={{ borderTop: 1, }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#1EE1B3B3", }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{
                        flexShrink: 0,
                        fontWeight: 900,
                        color: 'text.secondary',
                        transition: '0.5s',

                        '&:hover': {

                            color: grey[400],
                        },
                    }}>
                        HARDWARE
                    </Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box
                            sx={{
                                width: "40%",
                                display: "flex",
                                alignItems: "center"
                            }}>

                            <MemoryIcon fontSize="large" />
                            <Typography ml={2} fontWeight={900}>
                                Lorem
                            </Typography>
                            {/* dsga */}
                        </Box>
                        <Box
                            sx={{
                                width: "50%",
                            }}>

                            <Typography variant="body2" sx={{ textAlign: { xs: "left", sm: "end" } }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                            <hr
                                style={{
                                    background: 'rgb(171 165 165)',
                                    borderColor: 'rgb(171 165 165)',
                                    height: '3px',
                                    width: "100%",
                                    margin: "10px 0"
                                }}
                            />

                            <Typography variant="body2" sx={{ textAlign: { xs: "left", sm: "end" } }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                        </Box>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}

                sx={{ borderTop: 1, }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#1EE1B3B3", }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{
                        flexShrink: 0,
                        fontWeight: 900,
                        color: 'text.secondary',
                        transition: '0.5s',

                        '&:hover': {

                            color: grey[400],
                        },
                    }}>
                        HARDWARE
                    </Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box
                            sx={{
                                width: "40%",
                                display: "flex",
                                alignItems: "center"
                            }}>

                            <MemoryIcon fontSize="large" />
                            <Typography ml={2} fontWeight={900}>
                                Lorem
                            </Typography>
                            {/* dsga */}
                        </Box>
                        <Box
                            sx={{
                                width: "50%",
                            }}>

                            <Typography variant="body2" sx={{ textAlign: { xs: "left", sm: "end" } }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                            <hr
                                style={{
                                    background: 'rgb(171 165 165)',
                                    borderColor: 'rgb(171 165 165)',
                                    height: '3px',
                                    width: "100%",
                                    margin: "10px 0"
                                }}
                            />

                            <Typography variant="body2" sx={{ textAlign: { xs: "left", sm: "end" } }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                        </Box>
                    </Box>
                </AccordionDetails>
            </Accordion>

        </Box >
    );
}
