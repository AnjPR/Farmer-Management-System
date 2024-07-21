import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateFarmer() {
    const [FarmerID, setID] = useState('');
    const [FirstName, setFname] = useState('');
    const [LastName, setLname] = useState('');
    const [Address, setAddress] = useState('');
    const [ContactNumber, setContact] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8081/farmers/${id}`)
                .then(res => {
                    const data = res.data;
                    setID(data.FarmerID || data.id);
                    setFname(data.FirstName);
                    setLname(data.LastName);
                    setAddress(data.Address);
                    setContact(data.ContactNumber);
                })
                .catch(err => console.error('Error:', err));
        }
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        axios.put(`http://localhost:8081/update/${FarmerID}`, { FirstName, LastName, Address, ContactNumber })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update Farmer Details</h2>
                    <div className='mb-2'>
                        <label htmlFor="farmerID">Farmer ID</label>
                        <input
                            type='text'
                            className='form-control'
                            value={FarmerID}
                            readOnly
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="fname">First Name</label>
                        <input
                            type='text'
                            className='form-control'
                            value={FirstName}
                            onChange={e => setFname(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="lname">Last Name</label>
                        <input
                            type='text'
                            className='form-control'
                            value={LastName}
                            onChange={e => setLname(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="address">Address</label>
                        <input
                            type='text'
                            className='form-control'
                            value={Address}
                            onChange={e => setAddress(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="contact">Contact Number</label>
                        <input
                            type='text'
                            className='form-control'
                            value={ContactNumber}
                            onChange={e => setContact(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateFarmer;
