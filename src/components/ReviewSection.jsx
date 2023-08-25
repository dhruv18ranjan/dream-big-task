import { motion } from 'framer-motion'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const ReviewSection = () => {
    return (
        <div className='flex gap-5 flex-col mb-12'>
            <div className='flex justify-between ml-12 lg:ml-24 mr-24'>
                <div>
                    <span className=' text-xl font-medium '>Reviews </span>
                </div>
                <div className='flex'>
                    <span className='flex gap-2 text-base text-gray-500 ml-2'>5.0<span className='m-1 flex gap-1 text-xl text-yellow-400'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span></span>
                    <span className='text-xs mt-1.5 text-gray-500 ml-2'>(1 Rating)</span>
                </div>
            </div>

            <div className=''>
                <div className=' bg-yellow-50 ml-4 lg:ml-24 w-[350px] p-6 cursor-pointer hover:scale-105 ease-in-out duration-200 '>
                    <div className='flex gap-6 mb-4'>

                        <div>
                            <img className='w-[50px]' src="https://www.cyberyami.com/_next/image?url=%2Fimages%2Favatar.png&w=1920&q=75" alt="" />
                        </div>
                        <div>

                            <span>Vishal Naik</span>
                            <span className='m-1 flex gap-1 text-xl text-yellow-500 w-fit'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                        </div>
                    </div>
                    <p className=' text-sm text-gray-500'>Awesome bootcamp like very much</p>
                </div>
            </div>


            <div className='ml-24'>
                <p className=' text-blue-300'>Prev</p>
            </div>


        </div>
    )
}

export default ReviewSection