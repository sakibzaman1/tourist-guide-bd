import React from 'react';
import logo from '../../assets/logos/tourist_Guide-removebg-preview.png'

const Footer = () => {
    return (
        <div className='mt-10'>
            <footer className="footer p-10 bg-base-200 text-base-content">
  <aside className=''>
  <img className='w-10 lg:w-20' src={logo} alt="" />
    <p>Tourist Guide Ltd.<br/>Providing reliable Guidance since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;