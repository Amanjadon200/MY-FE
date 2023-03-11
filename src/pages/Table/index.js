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
import axios from 'axios';
import CustomModalTicket from '../../Component/shared/CustomModalTicket';
// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }
// { id: 'GEM-INC-4607', request: "Request For Laptop Bag", department: "Admin", type: "Incident", time: "06 May 2022 06:05 PM IST", assignedTo: "Ajay Kumar", status: "Active", actions: ":" },
// { id: 'GEM-INC-4608', request: "heroku cli", department: "IT", type: "Incident", time: "06 May 2022 06:05 PM IST", assignedTo: "Ajay Kumar", status: "OnHold", actions: ":" },
// { id: 'GEM-INC-4690', request: "bottle", department: "HR", type: "Incident", time: "06 May 2022 06:05 PM IST", assignedTo: "Ajay Kumar", status: "OnHold", actions: ":" },
// { id: 'GEM-INC-4234', request: "request for laptop", department: "HR", type: "Incident", time: "06 May 2022 06:05 PM IST", assignedTo: "Ajay Kumar", status: "Closed", actions: ":" },
// { id: 'GEM-INC-2607', request: "for increases stipend", department: "IT", type: "Incident", time: "06 May 2022 06:05 PM IST", assignedTo: "Ajay Kumar", status: "Closed", actions: ":" },
// { id: 'GEM-INC-2407', request: "for name and fame", department: "Admin", type: "Incident", time: "06 May 2022 06:05 PM IST", assignedTo: "Ajay Kumar", status: "Closed", actions: ":" },
// { id: 'GEM-INC-0907', request: "study", department: "Admin", type: "Incident", time: "06 May 2022 06:05 PM IST", assignedTo: "Ajay Kumar", status: "OnHold", actions: ":" }

export default function BasicTable() {
    const [rows, setRows] = useState();
    const getTicketData = async () => {
        const res = await axios.get('http://127.0.0.1:3001');
        console.log(res)
        setRows(res.data)
        setFilteredData(res.data)
    }
    React.useEffect(() => {
        getTicketData()
    }, [])
    const [filteredData, setFilteredData] = useState(rows)
    const filterData = (department, status) => {
        if (department === '' && status === '') {
            setFilteredData(rows);
            return;
        }
        else if (department !== '' && status !== '') {
            console.log(department, status)
            setFilteredData(rows.filter((data) => {
                return (data.department === department && data.status === status)
            }))
        }
        else if (department === '' && status !== '') {
            setFilteredData(rows.filter((data) => {
                return data.status === status
            }))
        }
        else {
            console.log('object')
            setFilteredData(rows.filter((data) => {
                return data.department === department
            }))
        }
    }
    console.log(filteredData)
    const [ticket,createTicket]=useState(false);
    return (<>
        <CustomModal  filteredData={filterData}/>
      {createTicket &&  <CustomModalTicket ticket={ticket} createTicket={createTicket}/>}
        <button className='w-[100px] bg-[#205072] text-white mb-3 p-2' onClick={()=>{createTicket(!ticket)}}>
            Create a new ticket
        </button>
        <TableContainer component={Paper} sx={{ maxWidth: '70vw' }} className="m-auto">
            <Table aria-label="simple table">
                <TableHead className='bg-[#205072]'>
                    <TableRow >
                        <TableCell className='text-white text-center w-[12.5%]'>Id</TableCell>
                        <TableCell className='text-white text-center w-[12.5%]' align="right">Subject</TableCell>
                        <TableCell className='text-white text-center w-[12.5%]' align="right">Department</TableCell>
                        <TableCell className='text-white text-center w-[8.5%]' align="right">Type</TableCell>
                        <TableCell className='text-white text-center w-[16.5%]' align="right">Created on</TableCell>
                        <TableCell className='text-white text-center w-[16.5%]' align="right">Assigned to</TableCell>
                        <TableCell className='text-white text-center w-[8.5%]' align="right">Status</TableCell>
                        <TableCell className='text-white text-center w-[12.5%]' align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredData && filteredData.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="right text-center">{row.id}</TableCell>
                            <TableCell align="right text-center">{row.request}</TableCell>
                            <TableCell align="right text-center">{row.department}</TableCell>
                            <TableCell align="right text-center">{row.type}</TableCell>
                            <TableCell align="right text-center">{row.time}</TableCell>
                            <TableCell align="right text-center">{row.assignedTo}</TableCell>
                            <TableCell align="right text-center">{row.status}</TableCell>
                            <TableCell className='text-center' component="th" scope="row">
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