import React from 'react'
import logo from "../assets/logo.svg"
import { BsDiscord, BsLinkedin, BsTwitter } from "react-icons/bs"
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi"

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-green-50 to-yellow-50'>
            <div className='flex flex-wrap  md:flex-row lg:flex-row lg:gap-28  ml-24 pt-8 mb-6'>
                <div className='mr-44'>
                    <img src={logo} alt="" />
                    <div className='flex gap-3 text-lg mt-4 mb-5'>
                        <BsDiscord />
                        <BiLogoFacebook />
                        <BiLogoInstagram />
                        <BsTwitter />
                        <BsLinkedin />
                    </div>
                </div>

                <div className='flex flex-col gap-2 text-sm mb-3 lg:mb-0 mr-10'>
                    <h1 className='text-base text-gray-500 font-semibold mb-2'>RESOURCES</h1>
                    <p className=' hover:text-green-500 cursor-pointer ease-in-out duration-100'>Leaderboard</p>
                    <p className=' hover:text-green-500 cursor-pointer ease-in-out duration-100'>About Us</p>
                    <p className=' hover:text-green-500 cursor-pointer ease-in-out duration-100'>Contact Us</p>
                    <p className=' hover:text-green-500 cursor-pointer ease-in-out duration-100'>Blogs</p>
                </div>

                <div className='flex flex-col gap-2 text-sm mb-3 lg:mb-0'>
                    <h1 className='text-base text-gray-500 font-semibold mb-2'>LEGALS</h1>
                    <p className=' hover:text-green-500 cursor-pointer ease-in-out duration-100'>Terms & Conditions</p>
                    <p className=' hover:text-green-500 cursor-pointer ease-in-out duration-100'>Privacy Policy</p>
                    <p className=' hover:text-green-500 cursor-pointer ease-in-out duration-100'>Refund Policy</p>
                </div>

                <div className='flex flex-col gap-2 text-sm mb-3 lg:mb-0'>
                    <h1 className='text-base text-gray-500 font-semibold mb-2'>FOR BUSINESSES</h1>
                    <p className=' hover:text-green-500 cursor-pointer ease-in-out duration-100'>Business Solutions</p>
                </div>
            </div>
            <hr />

            <div className='ml-24 pt-8 pb-6 text-xs text-gray-500 flex justify-between mr-20'>
                <p>©2022, All Rights Reserved -Cyberyami &nbsp; | &nbsp; Wissenhive E-Learning</p>
                <p>Cookies settings</p>
            </div>
        </div>
    )
}

export default Footer