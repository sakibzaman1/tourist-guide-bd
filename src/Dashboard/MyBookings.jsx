import React, { useState } from 'react';
import useBookings from '../CustomHooks/useBookings';
import { CiDollar } from "react-icons/ci";
import { GiCancel } from "react-icons/gi";
import { MdPublishedWithChanges } from "react-icons/md";
import { FaAngleDoubleDown } from "react-icons/fa";

const MyBookings = () => {

    const [bookings] = useBookings();


    return (
        <div className='w-full'>
            <div className="overflow-x-auto min-h-screen">
  <table className="table  table-lg">
    <thead>
      <tr>
        <th></th> 
        <th>Package</th> 
        <th>Guide</th> 
        <th>Date</th> 
        <th>Price</th> 
        <th>Status</th> 
        <th>Pay</th> 
        <th>Cancel</th>
        <th>Apply</th>
      </tr>
    </thead> 
    <tbody>
      {
        bookings?.map((booking, index)=> (
            <tr>
        <th>{index+1}</th> 
        <td>{booking?.tripTitle}</td> 
        <td>{booking?.guide}</td> 
        <td>{booking?.date}</td> 
        <td>{booking?.price}</td> 
        <td>
        <details className="dropdown">
  <summary className="m-1 btn"><FaAngleDoubleDown size={20} color='skyblue'></FaAngleDoubleDown></summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100  w-52">
    <li><a>In Review</a></li>
    <li><a>Rejected</a></li>
    <li><a>Accepted</a></li>
  </ul>
</details>
            </td> 
        <td><CiDollar size={20} color='black'></CiDollar></td>
        <td><GiCancel size={20} color='red'></GiCancel></td>
        <td><MdPublishedWithChanges size={20} color='green'></MdPublishedWithChanges></td>
      </tr>
        ))
      }
    </tbody> 
    
  </table>
</div>
        </div>
    );
};

export default MyBookings;