import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateFarmer() {
    const [FarmerID, setID] = useState('');
    const [FirstName, setFname] = useState('');
    const [LastName, setLname] = useState('');
    const [Address, setAddress] = useState('');
    const [ContactNumber, setContact] = useState('');

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/create', {FarmerID,FirstName ,LastName,Address,ContactNumber})
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
                    <h2>Add Farmer Details</h2>
                    <div className='mb-2'>
                        <label htmlFor="farmerID">Farmer ID</label>
                        <input type='text' className='form-control'
                            onChange={e => setID(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="fname">First Name</label>
                        <input type='text' className='form-control'
                            onChange={e => setFname(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="lname">Last Name</label>
                        <input type='text' className='form-control'
                            onChange={e => setLname(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="address">Address</label>
                        <input type='text' className='form-control'
                            onChange={e => setAddress(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="contact">Contact Number</label>
                        <input type='text' className='form-control'
                            onChange={e => setContact(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-success'>Add +</button>
                </form>
            </div>
        </div>
    );
}

export default CreateFarmer;
