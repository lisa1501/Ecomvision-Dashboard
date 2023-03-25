import React from 'react';
import { useGetDashboardQuery } from "state/api";

function Dashboard() {
    const { data, isLoading } = useGetDashboardQuery();
    console.log("data", data);
    return (
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard;
