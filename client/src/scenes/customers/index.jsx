import React from 'react';
import { Box, useTheme } from '@mui/material';
import { useGetCostomersQuery } from 'state/api';
import Header from 'components/Header';
import { DataGrid } from '@mui/x-data-grid';

const Customers = () => {
    const theme = useTheme();
    const { data, isLoading } = useGetCostomersQuery();
    console.log("data", data);
    return (
        <div>
        Customers
        </div>
    )
}

export default Customers
