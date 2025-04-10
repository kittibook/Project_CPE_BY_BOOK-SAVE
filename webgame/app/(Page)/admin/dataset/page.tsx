'use client';
import { Button, IconButton, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Paper, Menu, MenuItem, TableFooter, TablePagination, useTheme, Box } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import LayoutAdmin from "@/app/Components/Layout/admin/admin";
import { useState } from 'react';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
export default function AdminDataSet() {
    const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => setAnchorEl(null)

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    ;

    return (
        <LayoutAdmin>
            <div className="min-h-screen flex flex-col bg-gray-50">
                <div className="flex justify-between items-center m-16 ">
                    <h1 className="text-lg font-medium text-[#1F384C]">จัดการชุดข้อมูล</h1>
                </div>
                <div className="flex justify-center items-center w-full ">

                    <div className="p-4 w-[90%] bg-bgnavbar-2 rounded-2xl">
                        {/* Top bar */}
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex gap-2">
                                <button className="bg-bgnavbar-2 border border-bgnavbar-1 text-main p-2 rounded"><FilterAltIcon /> Filter</button>
                                <div className="relative">
                                    <SearchIcon className="absolute left-2 top-2.5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search Data by Name "
                                        className="pl-8 pr-4 py-2 rounded-md border border-gray-300 w-80 bg-purple-50 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <button className="bg-data-set/70 hover:bg-data-set p-2 rounded text-white">เพิ่มข้อมูล</button>
                        </div>

                        {/* Table */}
                        <TableContainer component={Paper} className="rounded-lg shadow-sm text-main">
                            <Table>
                                <TableHead>
                                    <TableRow className="bg-data-set/20  ">
                                        <TableCell>ชื่อข้อมูล</TableCell>
                                        <TableCell>ระยะเวลาการเก็บข้อมูล</TableCell>
                                        <TableCell>รายละเอียด</TableCell>
                                        <TableCell>ผู้สร้าง</TableCell>
                                        <TableCell>สร้างเมื่อ</TableCell>
                                        <TableCell align="right">เพิ่มเติม</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(rowsPerPage > 0
                                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : rows
                                    ).map((row) => (
                                        <TableRow key={row}>
                                            <TableCell>DATA NAME {row}</TableCell>
                                            <TableCell>{row} มกราคม 2568 - {row + 1} มีนาคม 2568</TableCell>
                                            <TableCell>เก็บข้อมูล .....</TableCell>
                                            <TableCell>USERNAME {row}</TableCell>
                                            <TableCell>1/{row}/2568 - 12:12:12</TableCell>
                                            <TableCell align="right">
                                                <div className="flex items-center justify-end space-x-4">
                                                    <span className="text-main cursor-pointer">View More</span>
                                                    <IconButton onClick={handleMenuClick}>
                                                        <MoreVertIcon />
                                                    </IconButton>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                            colSpan={3}
                                            count={rows.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            slotProps={{
                                                select: {
                                                    inputProps: {
                                                        'aria-label': 'rows per page',
                                                    },
                                                    native: true,
                                                },
                                            }}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                            ActionsComponent={TablePaginationActions}
                                        />
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </TableContainer>

                        {/* Footer */}
                        <div className="flex justify-between items-center text-sm text-gray-500 mt-4 px-2">
                            <span>Rows per page: 10 ▼</span>
                            <span>1-10 of 276</span>
                            <div className="flex items-center space-x-2">
                                <span className="cursor-pointer">&lt;</span>
                                <span className="cursor-pointer">&gt;</span>
                            </div>
                        </div>

                        {/* Menu Example */}
                        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                            <MenuItem onClick={handleClose}>Edit</MenuItem>
                            <MenuItem onClick={handleClose}>Delete</MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}
