import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FiThumbsUp } from 'react-icons/fi'
import { RiGroupLine } from 'react-icons/ri'
import Accordion from './Accordian'
import {motion} from "framer-motion";

const MainSection = () => {
  return (

<div className=' flex flex-wrap lg:flex-row gap-5 m-10 lg:ml-24'>
          <motion.div initial="hidden" whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
           <div className=' flex flex-col gap-3 lg:flex-col'>
            <h2 className=' text-xl font-semibold text-gray-700'>Skillup</h2>
            <span className=' text-sm'>skillup / <span className='font-semibold'>Burpsuite Bootcamp</span> </span>
            <h1 className=' text-3xl font-semibold'>Burpsuite Bootcamp</h1>
            <p className=' text-base text-gray-500 leading-6'>
              BurpSuite is an all-in-one tool used for WAPT. There are various functions that the burp suite can perform <br />
              that help one in the process of pen-testing a website. We can intercept traffic, such as requests and <br />
              responses sent to web servers, and also perform various analyses on those requests. BurpSuite is used by <br />
              professionals in the field of testing security for websites. BurpSuite comes in 2 versions: professional, a paid <br />
              product, and the free, Community edition.
            </p>
            <span className='flex gap-2 text-lg'><span className='m-1 flex gap-1 text-xl text-yellow-400'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>5.0</span>
            <button className="w-max mt-4 mb-10 p-3 pr-6 pl-6 bg-green-200 font-semibold text-base rounded-lg hover:bg-green-300 ease-out duration-300">Login to Enroll</button>
            <span className='flex gap-3 text-base mb-20'> <FiThumbsUp className='text-lg mt-1' /> beginner &nbsp; &nbsp; |&nbsp;&nbsp; <RiGroupLine className='text-lg mt-1' /> 40 Enrolled Students</span>
          </div>
          </motion.div>
           <motion.div initial="hidden" whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1.5 }}
                    variants={{
                        hidden: { opacity: 0, x:0 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
            <Accordion />
          </motion.div>
    </div>
  )
}

export default MainSection