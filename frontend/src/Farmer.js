import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Farmer() {
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/')
      .then(res => setFarmers(res.data))
      .catch(err => console.error('Error:', err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/farmers/${id}`);
      // Remove deleted item from state
      setFarmers(farmers.filter(farmers => farmers.FarmerID !== id));
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded'>
        <Link to="/create" className='btn btn-success'> Add+ </Link>
        <table className='table'>
          <thead>
            <tr>
              <th>FarmerID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Address</th>
              <th>ContactNumber</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {farmers.length === 0 ? (
              <tr>
                <td colSpan="6" className='text-center'>No farmers available</td>
              </tr>
            ) : (
              farmers.map((farmer, i) => (
                <tr key={i}>
                  <td>{farmer.FarmerID}</td>
                  <td>{farmer.FirstName}</td>
                  <td>{farmer.LastName}</td>
                  <td>{farmer.Address}</td>
                  <td>{farmer.ContactNumber}</td>
                  <td>
                    <Link to={`/update/${farmer.FarmerID}`} className='btn btn-primary'>Update</Link>
                    <button 
                      className='btn btn-danger ms-2' 
                      onClick={() => handleDelete(farmers.FarmerID)} >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Farmer;
