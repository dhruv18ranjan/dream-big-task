import React, { useState } from 'react';
import logo from "../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi"; // Add this import for the hamburger icon

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='p-4 w-[97%] mr-4 z-10 rounded-lg fixed bg-white border-2'>

          

            <div className='flex flex-wrap m-2 justify-between'>

                  {/* Hamburger menu button */}
            <button
                    className='lg:hidden text-2xl mt-2'
                    onClick={toggleMobileMenu}
                >
                    <FiMenu />
                </button>

                <div>
                    <img className='cursor-pointer' src={logo} alt="" />
                </div>

                

                {/* Mobile menu */}
                <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 right-0 bg-white border-2 rounded-lg mt-2`}>
                    <div className='flex flex-col p-4'>
                        <span className='hover:text-green-600 ease-out duration-300 cursor-pointer'>Academia</span>
                        <span className='hover:text-green-600 ease-out duration-300 cursor-pointer'>CTF Warriors</span>
                        <span className='hover:text-green-600 ease-out duration-300 cursor-pointer'>Business Solutions</span>
                        <span className='hover:text-green-600 ease-out duration-300 cursor-pointer'>Resources</span>
                    </div>
                    <div className='flex justify-center align-middle gap-8 p-4'>
                        <AiOutlineShoppingCart className='text-xl mt-3' />
                        <button className='hover:text-green-600 ease-out duration-300 cursor-pointer'>Sign Up</button>
                        <button className='bg-green-300 w-24 rounded-lg min-h-max hover:bg-green-400 ease-in-out cursor-pointer duration-300'>Login</button>
                    </div>
                </div>

                {/* Desktop navigation */}
                <div className='hidden lg:flex justify-center align-middle gap-10 m-2'>
                    <span className='hover:text-green-600 ease-out duration-300 cursor-pointer'>Academia</span>
                    <span className='hover:text-green-600 ease-out duration-300 cursor-pointer'>CTF Warriors</span>
                    <span className='hover:text-green-600 ease-out duration-300 cursor-pointer'>Business Solutions</span>
                    <span className='hover:text-green-600 ease-out duration-300 cursor-pointer'>Resources</span>
                </div>

                <div className='flex justify-center align-middle gap-8'>
                    <AiOutlineShoppingCart className='text-xl mt-3' />
                    <button className='hidden lg:block hover:text-green-600 ease-out duration-300 cursor-pointer'>Sign Up</button>
                    <button className='hidden lg:block bg-green-300 w-24 rounded-lg min-h-max hover:bg-green-400 ease-in-out cursor-pointer duration-300'>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
