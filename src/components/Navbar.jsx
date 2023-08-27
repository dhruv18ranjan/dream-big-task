import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi"; // Add this import for the hamburger icon

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const [academiaDrop, setAcademiaDrop] = useState(false);
    const [resourcesDrop, setResourcesDrop] = useState(false);



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
                        <div>
                            <span className='hover:text-green-600 ease-out duration-300 cursor-pointer' >Academia</span>
                         
                        </div>
                        <span className='hover:text-green-600 ease-out duration-300 cursor-pointer'>CTF Warriors</span>
                        <span className='hover:text-green-600 ease-out duration-300 cursor-pointer'>Business Solutions</span>
                        <div>
                            <span className='hover:text-green-600 ease-out duration-300 cursor-pointer'  >Resources</span>
                         
                        </div>
                    </div>
                    <div className='flex justify-center align-middle gap-8 p-4'>
                        <AiOutlineShoppingCart className='text-xl mt-3' />
                        <button className='hover:text-green-600 ease-out duration-300 cursor-pointer'>Sign Up</button>
                        <button className='bg-green-300 w-24 rounded-lg min-h-max hover:bg-green-400 ease-in-out cursor-pointer duration-300'>Login</button>
                    </div>
                </div>

                {/* Desktop navigation */}
                <div className='hidden lg:flex justify-center align-middle gap-10 m-2'>
                    <div>

                    <span className='hover:text-green-600 ease-out duration-300 cursor-pointer' onMouseEnter={()=>setAcademiaDrop(true)} onMouseLeave={()=>setAcademiaDrop(false)}>Academia</span>
                    {  academiaDrop &&
                    <div style={{backgroundColor:"transparent"}} className=' bg-white absolute top-[45px] bg-transparent ease-in-out duration-300' onMouseEnter={()=>setAcademiaDrop(true)} onMouseLeave={()=>setAcademiaDrop(false)} >
                                 <div className=' w-[250px] h-max relative rounded-lg top-[30px] border-2 p-4 pt-8 pb-6  flex flex-col bg-white text-base'>
                                 <p className='pl-4 hover:cursor-pointer hover:bg-green-100 p-4 rounded-md'>Skillup Programs</p>
                                 <p className='pl-4 hover:cursor-pointer hover:bg-green-100 p-4 rounded-md'>Job Track Courses</p>
                             </div>
                             </div>
                            }
                            </div>
                    <span className='hover:text-green-600 ease-out duration-300 cursor-pointer'>CTF Warriors</span>
                    <span className='hover:text-green-600 ease-out duration-300 cursor-pointer'>Business Solutions</span>
                    <div>
                    <span className='hover:text-green-600 ease-out duration-300 cursor-pointer' onMouseEnter={()=>setResourcesDrop(true)} onMouseLeave={()=>setResourcesDrop(false)} >Resources</span>
                    {
                                resourcesDrop && 
                                <div style={{backgroundColor:"transparent"}} className=' bg-white absolute top-[45px] bg-transparent' onMouseEnter={()=>setResourcesDrop(true)} onMouseLeave={()=>setResourcesDrop(false)}>
                                <div className=' w-[250px] h-max relative rounded-lg top-[30px] border-2 p-4 pt-8 pb-6  flex flex-col bg-white text-base' >
                                    <p className='pl-4 hover:cursor-pointer hover:bg-green-100 p-4 rounded-md'>About Us</p>
                                    <p className='pl-4 hover:cursor-pointer hover:bg-green-100 p-4 rounded-md'>Contact Us</p>
                                    <p className='pl-4 hover:cursor-pointer hover:bg-green-100 p-4 rounded-md'>Blogs</p>
                                    <p className='pl-4 hover:cursor-pointer hover:bg-green-100 p-4 rounded-md'>Cyberyami Forum </p>
                                    <button className=' bg-blue-500 p-2 text-white mt-2'> Join Discord</button>
                                </div>
                                </div>
                            }
                    </div>
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
