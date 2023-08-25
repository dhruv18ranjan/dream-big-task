import React, { useState } from 'react';
import { BiSolidCheckCircle } from 'react-icons/bi';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

function AccordionItem({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="accordion-item lg:w-[370px] w-[320px] border-b-2 pb-3 pt-3 hover:bg-gray-200 cursor-pointer ease-in-out duration-200 flex justify-between" onClick={() => setIsOpen(!isOpen)}>
                <button
                    className="accordion-button ml-4 "

                >
                    <div className='flex justify-between'>

                        <span>{title} </span>
                    </div>
                </button>
                {!isOpen && <span className='mr-4'><BsChevronDown /></span>}
                {isOpen && <span className='mr-4'><BsChevronUp /></span>}
            </div>
            <div>
                {isOpen && <div className="accordion-content border-b-2 pt-3 pb-3"><span className='ml-4 text-sm text-gray-500 flex gap-2'> <BiSolidCheckCircle /> {content}</span></div>}

            </div>

        </>
    );
}

function Accordion() {



    return (
        <div className="accordion border-2   h-[455px] bg-white">
            <div>
                <h1 className='text-lg font-semibold pl-6 mt-4 pb-3 border-b-2'>Course Content</h1>
            </div>
            <div className='overflow-y-scroll h-[400px]'>

                <AccordionItem
                    title="1. &nbsp; Introduction"
                    content="Introduction to Burpsuite"
                />
                <AccordionItem
                    title="2. &nbsp; What is Burpsuite"
                    content="Defining Burpsuite"
                />
                <AccordionItem
                    title="3. &nbsp; Setting up Burpsuite"
                    content="Manual Setup"
                />
                <AccordionItem
                    title="4. &nbsp; Features of Burpsuite"
                    content="Community edition features"
                />
                <AccordionItem
                    title="5. &nbsp; Burpsuite Browser"
                    content="Manual Setup"
                />
                <AccordionItem
                    title="6. &nbsp; Scoping"
                    content="Manual Setup"
                />
                <AccordionItem
                    title="7. &nbsp; Sitemap"
                    content="Manual Setup"
                />
                <AccordionItem
                    title="8. &nbsp; Burpsuite Extension"
                    content="Manual Setup"
                />

            </div>
        </div>
    );
}

export default Accordion;