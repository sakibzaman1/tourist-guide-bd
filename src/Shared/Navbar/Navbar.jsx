import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logos/tourist_Guide-removebg-preview.png'
import defaultUser from '../../assets/logos/defaultUser.png'
import { FaHome } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaFileWaveform } from "react-icons/fa6";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { IoIosPeople } from "react-icons/io";
import { BiLogoBlogger } from "react-icons/bi";
import './navbar.css'
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {

  const {user, logOutUser} = useContext(AuthContext);

   // Sign Out Button

   const handleLogOut = () => {
    logOutUser()
        .then(() => {
        })
        .catch(error => console.log(error.message))
}


    const navOptions = (
        <>
        
        <NavLink to="/" className="hover:text-gray-900  font-semi-bold navLinks"><span className='pb-2 flex items-center gap-2'><FaHome></FaHome>Home</span></NavLink>
        <NavLink to="/others" className="hover:text-gray-900  font-semi-bold navLinks"><span className='pb-2 flex items-center gap-2'><IoIosPeople></IoIosPeople>Community</span></NavLink>
        <NavLink to="/others" className="hover:text-gray-900  font-semi-bold navLinks"><span className='pb-2 flex items-center gap-2'><BiLogoBlogger></BiLogoBlogger>Blogs</span></NavLink>
        <NavLink to="/others" className="hover:text-gray-900  font-semi-bold navLinks"><span className='pb-2 flex items-center gap-2'><HiMiniInformationCircle></HiMiniInformationCircle>About Us</span></NavLink>
        <NavLink to="/others" className="hover:text-gray-900  font-semi-bold navLinks"><span className='pb-2 flex items-center gap-2'><MdAddIcCall></MdAddIcCall>Contact Us</span></NavLink>
        <NavLink to="/login" className={user? `hidden` : `hover:text-gray-900  font-semi-bold navLinks`}><span className='pb-2 flex items-center gap-2'><RiLoginCircleFill></RiLoginCircleFill>Login</span></NavLink>
        <NavLink to="/register" className="hover:text-gray-900  font-semi-bold navLinks"><span className='pb-2 flex items-center gap-2'><FaFileWaveform></FaFileWaveform>Register</span></NavLink>
        
        </>
    )

    return (
<div className='max-w-7xl mx-auto bg-gradient-to-r from-slate-100 to-slate-200 mb-10'>
<div className="navbar">
  <div className="navbar-start mr-12">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <Link className='lg:flex items-center hidden text-2xl text-bold font-Ephesis'><img className='w-20' src={logo} alt="" /> Tourist Guide</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-10 text-sm">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end w-[25%]">
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user? user.photoURL : defaultUser} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-72">
        
        <li><Link>Dashboard</Link></li>
        <li>
          <Link className="justify-between">
            Offer Announcement
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link>Setting</Link></li>
        <div className="divider">{user? 'User' : ''}</div>
        <li>{user?.displayName}</li>
        <li>{user?.email}</li>
        <li><Link><button onClick={handleLogOut}>Logout</button></Link></li>
      </ul>
    </div>
  </div>
</div>
</div>
    );
};

export default Navbar;