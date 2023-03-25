import FlexBetween from 'components/FlexBetween';
import React from 'react';
import { useGetDashboardQuery } from "state/api";
import { Box, Button,useTheme, } from "@mui/material"
import { DownloadOutlined, Email, PointOfSale, PersonAdd, Traffic } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";

import StatBox from "components/StatBox";
import OverviewChart from "components/OverviewChart";
import Header from "components/Header";

function Dashboard() {
    const theme = useTheme();
    const { data, isLoading } = useGetDashboardQuery();
    console.log("data", data);

    const columns = [
        {
            field: "_id",
            headerName: "ID",
            flex: 1,
        },
        {
            field: "userId",
            headerName: "User ID",
            flex: 1,
        },
        {
            field: "createdAt",
            headerName: "CreatedAt",
            flex: 1,
        },
        {
            field: "products",
            headerName: "# of Products",
            flex: 0.5,
            sortable: false,
            renderCell: (params) => params.value.length,
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
        },
    ];
    
        
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
            <Box
                mt="20px"
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="160px"
                gap="20px"
            >
                <StatBox
                    title="Total Customers"
                    value={data && data.totalCustomers}
                    increase="+14%"
                    description="Since last month"
                    icon={
                        <Email
                        sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
                        />
                    }
                />

                <StatBox
                    title="Sales Today"
                    value={data && data.todayStats.totalSales}
                    increase="+21%"
                    description="Since last month"
                    icon={
                        <PointOfSale
                        sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
                        />
                    }
                />

                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={theme.palette.background.alt}
                    p="1rem"
                    borderRadius="0.55rem"
                    >
                        <OverviewChart view="sales" isDashboard={true} />
                </Box>

                <StatBox
                    title="Monthly Sales"
                    value={data && data.thisMonthStats.totalSales}
                    increase="+5%"
                    description="Since last month"
                    icon={
                        <PersonAdd
                            sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
                        />
                    }
                />

                <StatBox
                    title="Yearly Sales"
                    value={data && data.yearlySalesTotal}
                    increase="+43%"
                    description="Since last month"
                    icon={
                        <Traffic
                            sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
                        />
                    }
                />

                <Box
                    gridColumn="span 8"
                    gridRow="span 3"
                >
                    <DataGrid
                        loading={isLoading || !data}
                        getRowId={(row) => row._id}
                        rows={(data && data.transactions) || []}
                        columns={columns}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Dashboard;
