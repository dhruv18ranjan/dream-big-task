import React from 'react'
import { motion } from "framer-motion"


const CourseSection = () => {


    return (
        <div className='flex bg-gray-50 justify-center '>
            <div className='flex flex-wrap lg:flex-row gap-10 justify-center m-10'>

                <motion.div initial="hidden" whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                    }} className=' bg-white p-12 pb-20 pt-20 border-2 rounded-lg hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                    <div className='hover:scale-110 ease-in-out duration-300 cursor-pointer'>

                        <img className='ml-20 mb-12' src="https://www.cyberyami.com/images/courses/theory.svg" alt="" />
                        <p>Self paced - Pragmatic Topics</p>
                    </div>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1.3 }}
                    variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                    }} className=' bg-white p-12 pb-20 pt-20 border-2 rounded-lg hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                    <div className='hover:scale-110 ease-in-out duration-300 cursor-pointer'>

                        <img className='ml-16  mb-12' src="https://www.cyberyami.com/images/courses/practice-lab.svg" alt="" />
                        <p>Hands-on Practice Labs &nbsp; &nbsp; &nbsp;</p>
                    </div>
                </motion.div>

                <motion.div className=' bg-white p-12 pb-20 pt-20 border-2 rounded-lg' initial="hidden" whileInView="visible"
                    viewport={{ once: false, amount: 1 }}
                    transition={{ duration: 1.6 }}
                    variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                    }} >
                    <div className='hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                        <img className='ml-16 mb-12' src="https://www.cyberyami.com/images/courses/cert-completion.svg" alt="" />
                        <p>Certificate of Completion &nbsp; &nbsp;</p>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default CourseSection