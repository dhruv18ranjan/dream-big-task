import React from 'react'

const About = () => {
    return (
        <div className='flex gap-6 flex-col bg-green-100 p-10 pl-12 lg:ml-24  mb-20'>
            
            <div>
                <h1 className='font-medium text-2xl'>About the author</h1>
            </div>
            <div className='flex flex-wrap'>
                <div className='w-[230px] ml-10'>
                    <img className='w-[130px]' src="https://www.cyberyami.com/_next/image?url=%2Fimages%2Flogo-black.png&w=1920&q=75" alt="" />
                </div>
                <div>
                    <h1 className='mb-4 text-lg font-medium'>Team Cyberyami</h1>
                    <p className='text-sm leading-6'>CyberYami brings you a plethora of custom-designed bootcamps and courses. The learning material focuses on hands-on practice that is much <br />
                        needed in cyber security. We have included labs and challenges to make you understand how things work and are done in the industry. You can <br />
                        showcase your skills on your resume with our certification proving that you can apply the knowledge gained in a real-world scenario.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About