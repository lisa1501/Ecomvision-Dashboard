import React from 'react';
import { useTheme } from "@mui/material";
import { useGetUserPerformanceQuery } from "state/api";
import { useSelector } from "react-redux";


const Performance = () => {
    const userId = useSelector((state) => state.global.userId);
    // console.log(userId);
    const { data, isLoading } = useGetUserPerformanceQuery(userId);
    console.log("data", data);

    return (
        <div>
        Performance
        </div>
    )
}

export default Performance
