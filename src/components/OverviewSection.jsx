import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { BiSolidCheckCircle } from 'react-icons/bi'

const OverviewSection = () => { 
    return (
        <div className=' gap-24 m-10 ml-12 lg:ml-24 mb-8 bg-white'>
            <div className='w-[95%] flex flex-wrap gap-6 justify-between'>
                <div className='flex gap-8'>
                    <button>Overview</button>
                    <button>Reviews</button>
                </div>
                <button className='mr-16 bg-green-200 p-3 pr-5 pl-5 text-base font-semibold rounded-lg mb-1 hover:bg-green-300 ease-out duration-300'>Login To Enroll</button>

            </div>
            <hr className='w-[92%]' />


            <motion.div initial="hidden" whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
                className='flex flex-wrap lg:flex-col mt-20'>

                <div className='flex flex-wrap gap-28'>
                    <div>
                        <h1 className=' text-2xl font-medium mb-5'>Overview</h1>
                        <p className='font-normal text-gray-700 text-[15px] leading-6'>Burpsuite bootcamp brings you a detailed, structured way of learning and <br />
                            practicing this tool. This tool is highly used in the industry and mainly is used for <br />
                            conducting WAPT i.e Web Application Penetration Testing. You will learn about <br />
                            every aspect and sub-tools included in the burp suite included in this bootcamp <br />
                            are practice labs to get your hands on the burp suite and theory lectures with <br />
                            interactive video demonstrations.</p>
                    </div>
                    <div>
                        <h1 className='text-lg font-medium'>Top skill you will learn</h1>
                        <p className='flex gap-2 text-gray-500 mt-4 text-sm font-normal'><BiSolidCheckCircle className=' text-green-500 text-lg ' />Understanding of Burpsuite</p>
                        <p className='flex gap-2 text-gray-500 mt-4 text-sm font-normal'><BiSolidCheckCircle className=' text-green-500 text-lg' />Know the tools offered by the burp suite</p>
                        <p className='flex gap-2 text-gray-500 mt-4 text-sm font-normal'><BiSolidCheckCircle className=' text-green-500 text-lg' /> Use burp suite with ease in your testing</p>
                        <p className='flex gap-2 text-gray-500 mt-4 text-sm font-normal'><BiSolidCheckCircle className=' text-green-500 text-lg' />Know the difference between the pro & free edition</p>
                        <p className='flex gap-2 text-gray-500 mt-4 text-sm font-normal'><BiSolidCheckCircle className=' text-green-500 text-lg' />Perform full-fledged WAPT using only BurpSuite</p>
                        <p className='flex gap-2 text-gray-500 mt-4 text-sm font-normal'><BiSolidCheckCircle className=' text-green-500 text-lg' />Learn Real-world techniques</p>
                    </div>
                </div>

            </motion.div>
            <div className='mt-16'>
                <h1 className=' text-xl font-medium'>This course will includes:</h1>
            </div>
        </div>
  )
}

export default OverviewSection