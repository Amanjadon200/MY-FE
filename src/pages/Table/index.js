import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import CustomModal from '../../Component/shared/Modal';
// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }


export default function BasicTable() {
    const [rows, setRows] = useState([
        { id: 'GEM-INC-4607', request: "Request For Laptop Bag", department: "Admin", type: "Incident", time: "06 May 2022 06:05 PM IST", assignedTo: "Ajay Kumar", status: "Active", actions: ":" },
        { id: 'GEM-INC-4608', request: "heroku cli", department: "IT", type: "Incident", time: "06 May 2022 06:05 PM IST", assignedTo: "Ajay Kumar", status: "OnHold", actions: ":" },
        { id: 'GEM-INC-4690', request: "bottle", department: "HR", type: "Incident", time: "06 May 2022 06:05 PM IST", assignedTo: "Ajay Kumar", status: "OnHold", actions: ":" },
        { id: 'GEM-INC-4234', request: "request for laptop", department: "HR", type: "Incident", time: "06 May 2022 06:05 PM IST", assignedTo: "Ajay Kumar", status: "Closed", actions: ":" },
        { id: 'GEM-INC-2607', request: "for increases stipend", department: "IT", type: "Incident", time: "06 May 2022 06:05 PM IST", assignedTo: "Ajay Kumar", status: "Closed", actions: ":" },
        { id: 'GEM-INC-2407', request: "for name and fame", department: "Admin", type: "Incident", time: "06 May 2022 06:05 PM IST", assignedTo: "Ajay Kumar", status: "Closed", actions: ":" },
        { id: 'GEM-INC-0907', request: "study", department: "Admin", type: "Incident", time: "06 May 2022 06:05 PM IST", assignedTo: "Ajay Kumar", status: "OnHold", actions: ":" }
    ]);
    const [filteredData, setFilteredData] = useState(rows)
    const filterData = (department,status) => {
        if(department==='' && status===''){
            setFilteredData(rows);
            return;
        } 
        else if(department!=='' && status!==''){
            console.log(department,status)
            setFilteredData(rows.filter((data)=>{
                return (data.department===department && data.status===status)
            }))
        }
        else if(department==='' && status!==''){
            setFilteredData(rows.filter((data)=>{
                return data.status===status
            }))
        }
        else{
            console.log('object')
            setFilteredData(rows.filter((data)=>{
                return data.department===department
            }))
        }
    }
    console.log(filteredData)
    return (<>
        <CustomModal setRows={setRows} filteredData={filterData} />
        {/* <button className='w-[100px] bg-[#205072] text-white mb-3 p-2'>
            filter
        </button> */}
        <TableContainer component={Paper} sx={{ maxWidth: '60vw' }} className="m-auto">
            <Table aria-label="simple table">
                <TableHead className='bg-[#205072]'>
                    <TableRow >
                        <TableCell className='text-white'>Id</TableCell>
                        <TableCell className='text-white' align="right">Subject</TableCell>
                        <TableCell className='text-white' align="right">Department</TableCell>
                        <TableCell className='text-white' align="right">Type</TableCell>
                        <TableCell className='text-white' align="right">Created on</TableCell>
                        <TableCell className='text-white' align="right">Assigned to</TableCell>
                        <TableCell className='text-white' align="right">Status</TableCell>
                        <TableCell className='text-white' align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredData.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="right">{row.id}</TableCell>
                            <TableCell align="right">{row.request}</TableCell>
                            <TableCell align="right">{row.department}</TableCell>
                            <TableCell align="right">{row.type}</TableCell>
                            <TableCell align="right">{row.time}</TableCell>
                            <TableCell align="right">{row.assignedTo}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell component="th"  scope="row">
                                <p className='cursor-pointer'>{row.actions}</p>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
    );
}