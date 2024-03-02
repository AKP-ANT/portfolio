import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
        
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-base text-blue-dark shadow-lg shadow-blue-dark/20'>
        <div>
            <h1 className='text-3xl font-bold'>anthonykpinson</h1>
        </div>

        {/* menu */}
        <ul className='hidden md:flex'>
            <li>
                <Link to='home' smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to='about' smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to='portfolio' smooth={true} duration={500}>
                    Portfolio
                </Link>
            </li>
            <li>Contact</li>
        </ul>

        {/* mobile menu */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-base flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='portfolio' smooth={true} duration={500}>
                    Portfolio
                </Link>
            </li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#0077b5]'>
                    <a className='flex justify-between items-center w-full text-base' 
                    href='https://www.linkedin.com/in/anthony-pinson' target='_blank'>
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>

                <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#2b3137]'>
                    <a className='flex justify-between items-center w-full text-base' 
                    href='https://github.com/AKP-ANT' target='_blank'>
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>

                <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-base' 
                    onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar