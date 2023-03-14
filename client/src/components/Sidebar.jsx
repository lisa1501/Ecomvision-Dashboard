import React from 'react';
import {
    Box,
    Drawer,
    IconButton,
    useTheme,
    Typography,
} from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FlexBetween from "./FlexBetween";


const Sidebar = ({
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile,
}) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const theme = useTheme();

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname]);

    return (
        <Box component="nav">
            {isSidebarOpen && (
                <Drawer
                    anchor="left"
                    onClose={() => setIsSidebarOpen(false)}
                    open={isSidebarOpen}
                    variant="persistent"
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                        color: theme.palette.secondary[200],
                        backgroundColor: theme.palette.background.alt,
                        boxSixing: "border-box",
                        borderWidth: isNonMobile ? 0 : "2px",
                        width: drawerWidth,
                        },
                    }}
                >

                    <Box width="100%">
                        <Box m="1.5rem 2rem 2rem 3rem">
                            <FlexBetween color={theme.palette.secondary.main}>
                                <Box display="flex" alignItems="center" gap="0.5rem">
                                <Typography variant="h4" fontWeight="bold">
                                    ECOMVISION
                                </Typography>
                                </Box>
                                {!isNonMobile && (
                                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                    <ChevronLeft />
                                </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                    </Box>

                </Drawer>
            )}
        </Box>
    )
}

export default Sidebar