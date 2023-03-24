import React from 'react';
import { useGetAdminsQuery } from "state/api";


const Admin = () => {
    const { data, isLoading } = useGetAdminsQuery();
    console.log("data", data);
    return (
        <div>
        Admin
        </div>
    )
}

export default Admin
