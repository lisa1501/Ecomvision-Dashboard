import React, { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { useGetSalesQuery } from "state/api";

const OverviewChart = ({ isDashboard = false, view }) => {
    
    const { data, isLoading } = useGetSalesQuery();
    console.log("data", data);


    return (
        <div>Overview Chart</div>
    
    );
};

export default OverviewChart;