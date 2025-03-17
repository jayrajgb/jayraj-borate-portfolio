"use client"

import React, { useEffect, useState } from 'react'
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

    useEffect(() => {
        setOpen(false);
    }, []);

    return (
        <>
            <div className={'w-7/12 md:w-1/2 h-screen fixed top-0 left-0 bg-white border-b border-neutral-600 flex flex-col shadow-[2px_0_5px_rgba(0,0,0,0.25)] z-50 p-2 gap-y-1.5 transition duration-200' + `${isOpen ? "" : " -translate-x-[105%]"}`}>
                <div className='w-full h-16 px-2 rounded-md flex justify-between items-center'>
                    <div className='size-[64px] flex justify-start'>
                        <img src="/assets/JR.png" alt='JR' className='h-full object-contain'></img>
                    </div>
                    <div><X className='size-4 rounded-full hover:ring-2 hover:ring-offset-1 hover:ring-mypurpleglow' onClick={handleClose} /></div>
                </div>

                <div className='w-full h-10 flex items-center rounded-md'>
                    <button onClick={handleClose} className='w-full'>
                        <Link href="/" className='p-1 rounded-lg bebas text-lg md:text-2xl text-center flex justify-center bg-white text-black focus:bg-neutral-200 hover:bg-neutral-200'>
                            Home
                        </Link>
                    </button>
                </div>

                <div className='w-full h-10 flex items-center rounded-md'>
                    <button onClick={handleClose} className='w-full'>
                        <Link href="/#about" className='p-1 rounded-lg bebas text-lg md:text-2xl text-center flex justify-center bg-white text-black focus:bg-neutral-200 hover:bg-neutral-200'>
                            About
                        </Link>
                    </button>
                </div>

                <div className='w-full h-10 flex items-center rounded-md'>
                    <button onClick={handleClose} className='w-full'>
                        <Link href="/#skills" className='p-1 rounded-lg bebas text-lg md:text-2xl text-center flex justify-center bg-white text-black focus:bg-neutral-200 hover:bg-neutral-200'>
                            Portfolio
                        </Link>
                    </button>
                </div>

                <div className='w-full h-10 flex items-center rounded-md'>
                    <button onClick={handleClose} className='w-full'>
                        <Link href="/Jayraj_Borate_Resume.pdf" target='_blank'  className='p-1 rounded-lg bebas text-lg md:text-2xl text-center flex justify-center bg-white text-black focus:bg-neutral-200 hover:bg-neutral-200'>
                            Resume
                        </Link>
                    </button>
                </div>

                <div className='w-full h-10 rounded-md'>
                    <button onClick={handleClose} className='w-full'>
                        <Link href="/#footer"  className='bebas text-lg md:text-2xl rounded-lg px-5 py-1 flex justify-center bg-mypurpleglow hover:bg-mypurple text-white'>
                            Contact Me
                        </Link>
                    </button>
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