import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '40%',
        left: '90%',
        marginRight: '-30%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
export default function CustomModal({ filteredData,ticket }) {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    //   function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    //   }
    
    function closeModal() {
        setIsOpen(false);
    }
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    return (
        <div>
            <button onClick={openModal}
                className='w-[100px] bg-[#205072] text-white mb-3 p-2'>filter</button>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='flex'>
                    <div className='flex flex-col'>
                        <button >Department</button>
                        <button id="IT" className={`p-2 mb-2 ${selectedDepartment === 'IT' ? 'bg-[#edfef8]' : 'bg-[#f9f9f9]'}`} onClick={() => {
                            if (selectedDepartment === "IT") {
                                setSelectedDepartment('')
                                filteredData('', selectedStatus, openModal)
                            }
                            else {
                                setSelectedDepartment('IT')
                                filteredData('IT', selectedStatus, openModal)
                            }
                        }}>IT</button>
                        <button  className={`p-2 mb-2 ${selectedDepartment === 'HR' ? 'bg-[#edfef8]' : 'bg-[#f9f9f9]'}`} onClick={() => {
                            if (selectedDepartment === "HR") {
                                setSelectedDepartment('')
                                filteredData('', selectedStatus, openModal)
                            }
                            else {
                                setSelectedDepartment('HR')
                                filteredData('HR', selectedStatus, openModal)
                            }
                        }
                        }>HR</button>
                        <button  className={`p-2 mb-2 ${selectedDepartment === "Admin" ? 'bg-[#edfef8]' : 'bg-[#f9f9f9]'}`} onClick={() => {
                            if (selectedDepartment === "Admin") {
                                setSelectedDepartment('')
                                filteredData('', selectedStatus, openModal)
                            }
                            else {
                                setSelectedDepartment('Admin')
                                filteredData('Admin', selectedStatus, openModal)
                            }
                        }}
                        >Admin</button>
                    </div>
                    <div className='ml-10 flex flex-col'>
                        <button >Status</button>
                        <button className={`p-2 mb-2 ${selectedStatus === 'Active' ? 'bg-[#edfef8]' : 'bg-[#f9f9f9]'}`} onClick={() => {
                            if (selectedStatus === "Active") {
                                setSelectedStatus('')
                                filteredData (selectedDepartment, '',openModal)
                            }
                            else {
                                setSelectedStatus('Active')
                                filteredData( selectedDepartment,'Active', openModal)
                            }
                        }}>Active</button>
                        <button className={`p-2 mb-2 ${selectedStatus === 'OnHold' ? 'bg-[#edfef8]' : 'bg-[#f9f9f9]'}`} onClick={() => {
                            if (selectedStatus === "OnHold") {
                                setSelectedStatus('')
                                filteredData( selectedDepartment,'', openModal)
                            }
                            else {
                                setSelectedStatus('OnHold')
                                filteredData(selectedDepartment,'OnHold',  openModal)
                            }
                        }}>On hold</button>
                        <button className={`p-2 mb-2 ${selectedStatus === 'Closed' ? 'bg-[#edfef8]' : 'bg-[#f9f9f9]'}`} onClick={() => {
                            if (selectedStatus === "Closed") {
                                setSelectedStatus('')
                                filteredData( selectedDepartment,'', openModal)
                            }
                            else {
                                setSelectedStatus('Closed')
                                filteredData(selectedDepartment,'Closed', openModal)
                            }
                        }}>Closed</button>
                    </div>

                </div>
            </Modal>
        </div>
    );
}