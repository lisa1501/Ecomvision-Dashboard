import FlexBetween from 'components/FlexBetween';
import React from 'react';
import { useGetDashboardQuery } from "state/api";
import { Box, Button,useTheme, } from "@mui/material"
import Header from "components/Header";
import { DownloadOutlined } from "@mui/icons-material";


function Dashboard() {
    const theme = useTheme();
    const { data, isLoading } = useGetDashboardQuery();
    console.log("data", data);
        
    return (
        <Box m="1.5rem 2.5rem">
            <FlexBetween>
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
                <Box>
                    <Button
                        sx={{
                        backgroundColor: theme.palette.secondary.light,
                        color: theme.palette.background.alt,
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlined sx={{ mr: "10px" }} />
                            Download Reports
                    </Button>
                </Box>
            </FlexBetween>
        </Box>
    )
}

export default Dashboard;
