import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';
export default function CustomModal2({ message, setOpenModal, openModal, position,selectedId,setSelectedId }) {
    const handleClose = () => {
        setOpenModal(false)
        setSelectedId('');
    };
    const contentStyle = {
        position: 'absolute',
        top: position.y,
        left: position.x + 30,
        width: 200,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        p: 4,
        backgroundColor: 'white',
        zIndex: -1,
    }
    const deleteData = async () => {
        await axios.delete('http://127.0.0.1:3001/tickets?id=' + selectedId);
        setSelectedId('')
    }
    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className={`[&_.css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop]:!bg-transparent`}
            >
                <Box sx={contentStyle}>
                    <header className='flex'>
                        <p><CancelIcon onClick={() => { setOpenModal(false); deleteData() }} /></p>
                        <p>{message}</p></header>
                </Box>
            </Modal>
        </div>
    );
}