import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Dropdown from '../Dropdown';
import SingleFileUpload from '../SingleFileUpload';
import axios from 'axios'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        // marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "70vw",
        height: '90vh',
        background: 'white',
        overflow: "hidden",
        padding: "0px"
    },
};
export default function CustomModalTicket({ ticket, createTicket }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        document.body.style.overflow = 'hidden'
        setIsOpen(true);
    }
    function closeModal() {
        createTicket(false)
        setIsOpen(false);
        document.body.style.overflow = 'auto'
    }
    useEffect(() => {

        if (ticket) {
            openModal()
        }
        else {
            closeModal()
        }
    }, [ticket]);
    const [formData, setFormData] = useState({
        request: '',
        type: '',
        descriptions: '',
        uploadFile: ''
    });
    const handleSubmit = async () => {
        const date = (new Date()).toLocaleDateString();
        const obj = {
            ...formData,
            id: "GEM-INC-0908",
            department: 'unassigned',
            time: date,
            assignedTo: "abcd",
            status: "Open",
            actions: "cancel a ticket",
        }
        const objData = {
            id: obj.id,
            request: obj.request,
            department: obj.department,
            type: obj.type,
            time: obj.time,
            assignedTo: obj.assignedTo,
            status: obj.status,
            actions: obj.actions,
        }
        const StringObj = JSON.stringify(objData);
        await axios.post('http://127.0.0.1:3001/',
            StringObj,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=UTF-8',
                }
            },
        )
        setFormData({
            request: '',
            type: '',
            descriptions: '',
            uploadFile: ''
        })
    }
    console.log(formData)
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='bg-[#205072] text-white p-3'>Create a New Ticket</div>
                <div className='p-2'>
                    <div className='flex  mt-4'>
                        <div className='w-full flex flex-col'>
                            <span>Subject</span>
                            <input className='w-[80%] p-2' value={formData.request} style={{ border: '1px solid #d3d3d3' }} onChange={(e) => {
                                setFormData(
                                    {
                                        ...formData, request: e.target.value
                                    }
                                )
                            }} placeholder="enter your subject" />
                        </div>
                        <div className='w-full flex items-end'>
                            <Dropdown className="w-[80%]" setFormData={setFormData} formData={formData} />
                        </div>
                    </div>
                    <div className='mt-2 p-2'>
                        <p>Descriptions</p>
                        <textarea placeholder='Write the details here...' value={formData.descriptions} className='p-2' onChange={(e) => {
                            setFormData(
                                {
                                    ...formData, descriptions: e.target.value
                                }
                            )
                        }} style={{ border: '1px solid #d3d3d3' }} rows="6" cols="44"></textarea>
                    </div>
                    <div>
                        <SingleFileUpload setFormData={setFormData} formData={formData} />
                    </div>
                    <button onClick={handleSubmit} className="cursor-pointer p-2 bg-[#205072] text-white">submit</button>
                </div>
            </Modal>
        </div>
    );
}
