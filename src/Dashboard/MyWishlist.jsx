import React from 'react';
import useWishList from '../CustomHooks/useWishList';
import { GiCancel } from "react-icons/gi";
import { Link } from 'react-router-dom';



const MyWishlist = () => {

    const [wishListedPackage] = useWishList();
 


    return (
        <div className='w-full'>
            <div className="overflow-x-auto">
  <table className="table table-lg">
    <thead>
      <tr>
        <th></th> 
        <th>Trip Name</th> 
        <th>Email</th>  
        <th>Delete</th>
        <th>Visit</th>
      </tr>
    </thead> 
    <tbody>
      {
        wishListedPackage?.map((wishList, index)=> (
            <tr>
        <th>{index+1}</th> 
        <td>{wishList?.tripTitle}</td> 
        <td>{wishList?.email}</td> 
        <td><GiCancel size={20} color='red'></GiCancel></td>
        <td><Link to={`/packageDetails/${wishList?.wishListedId}`}><button className='bg-blue-400 px-2 rounded-xl text-white'>Details</button></Link></td>
      </tr>
        ))
      }
    </tbody> 
    
  </table>
</div>
        </div>
    );

};

export default MyWishlist;