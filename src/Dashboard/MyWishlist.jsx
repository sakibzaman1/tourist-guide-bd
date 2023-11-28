import React from 'react';
import useWishList from '../CustomHooks/useWishList';
import { GiCancel } from "react-icons/gi";
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAxiosSecure from '../CustomHooks/useAxiosSecure';



const MyWishlist = () => {

    const [wishListedPackage, refetch] = useWishList();
    const axiosSecure = useAxiosSecure();
 
    const handleDelete = id => {
        console.log(id);
        swal({
            title: "Please Confirm!",
            text: "Are you sure to delete?",
            icon: "warning",
            dangerMode: true,
          })
          .then(isConfirmed => {
            if (isConfirmed) {
               axiosSecure.delete(`/wishList/${id}`)
               .then(res=> {
                if(res.data.deletedCount > 0){
                    refetch();
                    swal('deleted')
                }
               })
             
            } else{
              swal("Not deleted");
    
            }
          });
    }

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
            <tr key={wishList?._id}>
        <th>{index+1}</th> 
        <td>{wishList?.tripTitle}</td> 
        <td>{wishList?.email}</td> 
        <td><button onClick={()=> handleDelete(wishList?._id)}><GiCancel size={20} color='red'></GiCancel></button></td>
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