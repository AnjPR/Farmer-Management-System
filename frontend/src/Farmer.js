import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Farmer() {
  const [farmer,setFarmer]=useState([])
  
  useEffect(() => {
    axios.get('http://localhost:8081/')
    .then(res => setFarmer(res.data))
    .catch(err => console.error('Error:',err));
  },[])
  


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded '>
       <Link to="/create" className='btn btn-success'> Add+ </Link>
        <table className='table'>
          <thead>
            <tr>
              <th>FarmerID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Address</th>
              <th>ContactNumber</th>
            </tr>
          </thead>
          <tbody> 
              {
                farmer.map((data,i) =>(
                  <tr key={i}>
                    <td>{data.farmerID}</td>
                    <td>{data.FirstName}</td>
                    <td>{data.LastName}</td>
                    <td>{data.Address}</td>
                    <td>{data.ContactNumber}</td>

                    <td>
                      <button className='btn btn-primary'> Update</button>
                      <button className='btn btn-danger ms-2'>Delete</button>
                    </td>
                  </tr>
                ))
              }
          </tbody>
        </table>
      </div>    
    </div>

  )
}

export default Farmer;