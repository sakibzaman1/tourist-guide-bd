// import React from 'react';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { GiCancel } from "react-icons/gi";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import swal from 'sweetalert';
import { useState } from 'react';
import { FaUserPlus } from "react-icons/fa6";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [adminClicked, setAdminClicked] = useState(null)

    const { refetch, data: users= []} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=> {
            const res = await axiosSecure.get(`/users`);
            return res.data;
        }
    });
    // console.log(localStorage.getItem('access-token'));

    const handleMakeGuide = id => {
      console.log(id);
      axiosSecure.patch(`/users/guide/${id}`)
      .then(res=> {
          console.log(res.data);
          if(res.data.modifiedCount > 0){
              refetch();
              // setAdminClicked(id)
              swal({
                  position: 'top-center',
                  icon: 'success',
                  title: 'That user is an Guide Now',
                  showConfirmButton: false,
                  showCancelButton: false,
                  timer: 2000
              });
          }
      })
    }

    const handleMakeAdmin = id => {
        axiosSecure.patch(`/users/admin/${id}`)
        .then(res=> {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch();
                setAdminClicked(id)
                swal({
                    position: 'top-center',
                    icon: 'success',
                    title: 'That user is an Admin Now',
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

console.log(adminClicked)
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
        <th>Role ( admin )</th>
        <th>Role ( guide )</th>
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
        <td>{ user?.role === 'admin'? <span className='flex items-center gap-2'><MdAdminPanelSettings color='green'></MdAdminPanelSettings><p className='text-green-800 font-bold'>Admin</p></span> :  <button className='flex items-center gap-2 bg-slate-200 p-2 rounded-full' onClick={()=> handleMakeAdmin(user?._id)} disabled={user?.role === 'guide' || user?.role === 'admin'}><GrUserAdmin color='green'></GrUserAdmin> <small>Make Admin</small> </button>}</td>

        <td>{user?.role === 'guide'?  <span className='flex items-center gap-2'><MdOutlineEmojiPeople color='blue'></MdOutlineEmojiPeople><p className='text-blue-800 font-bold'>Tour Guide</p></span> : <button className='bg-slate-200 p-2 rounded-full flex items-center gap-2' onClick={()=> handleMakeGuide(user?._id)} disabled={user?.role === 'guide' || user?.role === 'admin'}><FaUserPlus color='blue'></FaUserPlus><small>Make Guide</small></button>}</td>

        <td><button disabled={user?.role === 'admin'} onClick={()=> handleDelete(user?._id)}><GiCancel size={20} color='red'></GiCancel></button></td>
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