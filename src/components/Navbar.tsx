"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { X } from 'lucide-react';

// Sidebar component moved inline to avoid circular dependency
const Sidebar = ({
    isOpen,
    setOpen
}: {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <div className={'w-7/12 md:w-1/2 h-screen fixed top-0 left-0 bg-white border-b border-neutral-600 flex flex-col shadow-[2px_0_5px_rgba(0,0,0,0.25)] z-50 p-2 gap-y-1.5 transition duration-200' + `${isOpen ? "" : " -translate-x-[105%]"}`}>
                <div className='w-full h-16 px-2 rounded-md flex justify-between items-center'>
                    <div className='size-[64px] flex justify-start'>
                        <img src="/assets/JR.png" alt='suryaprabha logo' className='h-full object-contain'></img>
                    </div>
                    <div><X className='size-4 rounded-full hover:ring-2 hover:ring-offset-1 hover:ring-mypurpleglow' onClick={handleClose} /></div>
                </div>

                <div className='w-full h-10 flex items-center rounded-md'>
                    <Link href="/" className='w-full'>
                        <button onClick={handleClose} className='p-1 rounded-lg bebas text-lg md:text-2xl text-center w-full bg-white text-black focus:bg-neutral-200 hover:bg-neutral-200'>
                            Home
                        </button>
                    </Link>
                </div>

                <div className='w-full h-10 flex items-center rounded-md'>
                    <Link href="/#about" className='w-full'>
                        <button onClick={handleClose} className='p-1 rounded-lg bebas text-lg md:text-2xl text-center w-full bg-white text-black focus:bg-neutral-200 hover:bg-neutral-200'>
                            About
                        </button>
                    </Link>
                </div>

                <div className='w-full h-10 flex items-center rounded-md'>
                    <Link href="/#skills" className='w-full'>
                        <button onClick={handleClose} className='p-1 rounded-lg bebas text-lg md:text-2xl text-center w-full bg-white text-black focus:bg-neutral-200 hover:bg-neutral-200'>
                            Portfolio
                        </button>
                    </Link>
                </div>

                <div className='w-full h-10 flex items-center rounded-md'>
                    <Link href="/Jayraj_Borate_Resume.pdf" target='_blank' className='w-full'>
                        <button onClick={handleClose} className='p-1 rounded-lg bebas text-lg md:text-2xl text-center w-full bg-white text-black focus:bg-neutral-200 hover:bg-neutral-200'>
                            Resume
                        </button>
                    </Link>
                </div>

                <div className='w-full h-10 rounded-md'>
                    <Link href="/#footer">
                        <button onClick={handleClose} className='bebas text-lg md:text-2xl rounded-lg px-5 py-1 w-full bg-mypurpleglow hover:bg-mypurple text-white'>
                            Contact Me
                        </button>
                    </Link>
                </div>

            </div>
        </>
    );
};

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleOpenSidebar = () => {
        setSidebarOpen(true);
    };

    return (
        <>
            <Sidebar isOpen={isSidebarOpen} setOpen={setSidebarOpen} />
            <div className='nav bg-white/85 backdrop-blur-lg bebas top-0'>
                <div className="nav-left">
                    <div className="hamburger" onClick={handleOpenSidebar}>
                        <Image src="/assets/hamburger.svg" alt="hamburger" className="svg" width={24} height={24} />
                    </div>
                </div>
                <div className="nav-right">
                    <ul className='hidden md:flex md:justify-center md:gap-x-[2.5rem]'>
                        <li className=""><Link href="/#">HOME</Link></li>
                        <li className=""><Link href="/#about">ABOUT</Link></li>
                        <li className=""><Link href="/#skills">PORTFOLIO</Link></li>
                        <li className=""><Link href="/Jayraj_Borate_Resume.pdf" target="_blank">RESUME</Link></li>
                        <li className=""><Link href="#footer">CONTACT</Link></li>
                    </ul>
                    <div className='md:hidden'>
                        <img src="/assets/JR.png" alt="JR" className='h-5' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar