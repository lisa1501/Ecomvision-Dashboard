import React from "react";
import { useGetSalesQuery } from "state/api";

const BreakdownChart = () => {
    const { data, isLoading } = useGetSalesQuery();
    if (!data || isLoading) return "Loading...";
    console.log(data)
    
    return (
        <div>Breakdown chart</div>
    );
};

export default BreakdownChart;