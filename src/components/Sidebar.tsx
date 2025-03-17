"use client";

import React, { useState, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/assets/JR.png";
import { X } from 'lucide-react';

type SidebarProps = {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar: React.FC<SidebarProps> = ({ setOpen, isOpen }) => {

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <div className={'w-7/12 md:w-1/2 h-screen fixed top-0 left-0 bg-white border-b border-neutral-600 flex flex-col shadow-[2px_0_5px_rgba(0,0,0,0.25)] z-50 p-2 gap-y-1.5 transition duration-200' + `${isOpen ? "" : " -translate-x-[105%]"}`}>
                <div className='w-full h-16 px-2 rounded-md flex justify-between items-center'>
                    <div className='size-[50px] flex justify-start'>
                        <Image src={Logo} alt='suryaprabha logo' className='h-full object-contain'></Image>
                    </div>
                    <div><X className='size-4' onClick={handleClose} /></div>
                </div>

                <div className='w-full h-10 flex items-center rounded-md'>
                    <Link href="/" className='w-full'>
                        <button className='w-full flex justify-start bg-white text-black focus:bg-neutral-200 hover:bg-neutral-200'>
                            Home
                        </button>
                    </Link>
                </div>

                <div className='w-full h-10 flex items-center rounded-md'>
                    <Link href="/#SERVICES" className='w-full'>
                        <button className='w-full flex justify-start bg-white text-black focus:bg-neutral-200 hover:bg-neutral-200'>
                            Services
                        </button>
                    </Link>
                </div>

                

                <div className='w-full h-10 rounded-md mt-4'>
                    <Link href="/contact">
                        <button className='rounded-lg px-5 py-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white hover:from-orange-500 hover:to-orange-700 w-full'>
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
