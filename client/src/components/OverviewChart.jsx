import React from "react";
import { useGetSalesQuery } from "state/api";

const OverviewChart = () => {
    
    const { data, isLoading } = useGetSalesQuery();
    console.log("data", data);


    return (
        <div>Overview Chart</div>
    
    );
};

export default OverviewChart;