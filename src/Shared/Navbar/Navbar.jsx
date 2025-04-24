import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/logos/uni-portal-logo.jpg'; // use any student-themed logo
import defaultUser from '../../assets/logos/defaultUser.png';
import { FaHome, FaUserGraduate, FaChalkboardTeacher, FaClipboardList, FaFileAlt, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import './navbar.css';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser().catch(error => console.log(error.message));
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const navOptions = (
    <>
      <motion.div variants={navItemVariants} whileHover={{ scale: 1.1 }}>
        <NavLink to="/" className="hover:text-gray-900 font-semi-bold navLinks">
          <span className='pb-2 flex items-center gap-2'><FaHome /> Home</span>
        </NavLink>
      </motion.div>

      <motion.div variants={navItemVariants} whileHover={{ scale: 1.1 }}>
        <NavLink to="/community" className="hover:text-gray-900 font-semi-bold navLinks">
          <span className='pb-2 flex items-center gap-2'><FaUserGraduate /> Students</span>
        </NavLink>
      </motion.div>

      <motion.div variants={navItemVariants} whileHover={{ scale: 1.1 }}>
        <NavLink to="/blogs" className="hover:text-gray-900 font-semi-bold navLinks">
          <span className='pb-2 flex items-center gap-2'><FaChalkboardTeacher /> Courses</span>
        </NavLink>
      </motion.div>

      <motion.div variants={navItemVariants} whileHover={{ scale: 1.1 }}>
        <NavLink to="/about" className="hover:text-gray-900 font-semi-bold navLinks">
          <span className='pb-2 flex items-center gap-2'><FaClipboardList /> About Us</span>
        </NavLink>
      </motion.div>

      <motion.div variants={navItemVariants} whileHover={{ scale: 1.1 }}>
        <NavLink to="/contact" className="hover:text-gray-900 font-semi-bold navLinks">
          <span className='pb-2 flex items-center gap-2'><FaFileAlt /> Contact</span>
        </NavLink>
      </motion.div>

      {!user && (
        <motion.div variants={navItemVariants} whileHover={{ scale: 1.1 }}>
          <NavLink to="/login" className="hover:text-gray-900 font-semi-bold navLinks">
            <span className='pb-2 flex items-center gap-2'><RiLoginCircleFill /> Login</span>
          </NavLink>
        </motion.div>
      )}

      <motion.div variants={navItemVariants} whileHover={{ scale: 1.1 }}>
        <NavLink to="/register" className="hover:text-gray-900 font-semi-bold navLinks">
          <span className='pb-2 flex items-center gap-2'><FaInfoCircle /> Register</span>
        </NavLink>
      </motion.div>
    </>
  );

  return (
    <div className='max-w-8xl mx-auto bg-gradient-to-r from-white to-slate-100 mb-0'>
      <div className="navbar">
        <div className="navbar-start mr-12">
          <Link to="/">
            <motion.div className='flex items-center gap-2' whileHover={{ scale: 1.05 }}>
              <img className='w-10 lg:w-16' src={logo} alt="Student Logo" />
              <h1 className='text-base lg:text-2xl font-bold'>SMART CAMPUS</h1>
            </motion.div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <motion.ul className="menu menu-horizontal px-1 gap-8 text-sm" initial="hidden" animate="visible">
            {navOptions}
          </motion.ul>
        </div>

        <div className="navbar-end w-[25%]">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={user ? user.photoURL : defaultUser} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-sm w-72">
              {user ? (
                <>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link>Settings</Link></li>
                  <li><button onClick={handleLogOut}>Logout</button></li>
                </>
              ) : (
                <li><h1>Please Login First</h1></li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
