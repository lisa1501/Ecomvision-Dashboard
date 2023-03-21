import React, {useState} from 'react';
import { useGetTransactionsQuery } from 'state/api';
import { Box, useTheme } from '@mui/material';
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";

const Transactions = () => {
    const theme = useTheme();
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState('');


    const { data, isLoading } = useGetTransactionsQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search
    })
    console.log("data", data)
    
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
            <Header title="TRANSACTIONS" subtitle="Entire list of transactions" />
                <Box height="80vh">
                    <DataGrid
                        loading={isLoading || !data}
                        getRowId={(row) => row._id}
                        rows={(data && data.transactions) || []}
                        columns={columns}
                        rowCount={(data && data.total) || 0}
                        rowsPerPageOptions={[20, 50, 100]}
                        pagination
                        page={page}
                        pageSize={pageSize}
                        paginationMode="server"
                        sortingMode="server"
                        onPageChange={(newPage) => setPage(newPage)}
                        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                        onSortModelChange={(newSortModel) => setSort(...newSortModel)}
                    />
                </Box>
        </Box>
    )
}

export default Transactions
