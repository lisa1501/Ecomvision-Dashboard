import React from "react";
import { useGetSalesQuery } from "state/api";
import { Box, useTheme } from "@mui/material";

import { ResponsivePie } from "@nivo/pie";

const BreakdownChart = ({ isDashboard = false }) => {
    const theme = useTheme();

    const { data, isLoading } = useGetSalesQuery();
    if (!data || isLoading) return "Loading...";
    console.log(data)

    const colors = [
        theme.palette.secondary[500],
        theme.palette.secondary[300],
        theme.palette.secondary[300],
        theme.palette.secondary[500],
    ];

    const formattedData = Object.entries(data.salesByCategory).map(
        ([category, sales], i) => ({
            id: category,
            label: category,
            value: sales,
            color: colors[i],
        })
    );
    
    
    return (
        <Box
            height={isDashboard ? "400px" : "100%"}
            width={undefined}
        >
            <ResponsivePie 
                data={formattedData}            
            />   
        </Box>    
    );
};

export default BreakdownChart;