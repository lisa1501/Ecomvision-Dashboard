import React from "react";
import { useTheme } from "@mui/material";
import { useGetGeographyQuery } from "state/api";


const Geography = () => {
    const theme = useTheme();
    const { data } = useGetGeographyQuery();
    console.log("data", data);

    return (
        <div>Geography</div>
    );
};

export default Geography;
