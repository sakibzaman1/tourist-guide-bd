// import React from 'react';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { GiCancel } from "react-icons/gi";
import { MdPublishedWithChanges } from "react-icons/md";
import swal from 'sweetalert';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data: users= []} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=> {
            const res = await axiosSecure.get(`/users`);
            return res.data;
        }
    });

    const handleMakeAdmin = id => {
        axiosSecure.patch(`/users/admin/${id}`)
        .then(res=> {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch();
                swal({
                    position: 'top-center',
                    icon: 'success',
                    title: 'You are an Admin Now',
                    showConfirmButton: false,
                    showCancelButton: false,
                    timer: 2000
                });
            }
        })
    }

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
               axiosSecure.delete(`/users/${id}`)
               .then(res=> {
                if(res.data.deletedCount > 0){
                    refetch();
                    swal('User Removed')
                }
               })
             
            } else{
              swal("Not Removed");
    
            }
          });
    }


    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Name</th>
        <th>Role</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
        {
            users?.map((user, index)=> (
                <tr key={user?._id}>
        <th>{index+1}</th>
        <td>{user?.email}</td>
        <td>{user?.name}</td>
        <td>{ user?.role === 'admin'? <span className='text-green-800 font-bold'>Admin</span> :  <button onClick={()=> handleMakeAdmin(user?._id)}><MdPublishedWithChanges size={20} color='green'></MdPublishedWithChanges></button>}</td>
        <td><button onClick={()=> handleDelete(user?._id)}><GiCancel size={20} color='red'></GiCancel></button></td>
      </tr>
            ))
        }
    </tbody>
  </table>
</div>
        </div>
    )
};

export default ManageUsers;