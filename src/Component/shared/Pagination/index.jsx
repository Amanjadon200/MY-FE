import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

export default function Pagination({page,setPage,rowsPerPage,setRowsPerPage,count}) {
 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPageOptions={[5,8,10,25]} 
    />
  );
}