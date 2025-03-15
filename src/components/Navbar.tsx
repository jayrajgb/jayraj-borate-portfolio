"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='nav bg-white/85 backdrop-blur-lg bebas top-0'>
            <div className="nav-left">
                <div className="hamburger">
                    <Image src="/assets/hamburger.svg" alt="hamburger" className="svg" width={0} height={0} />
                </div>
                {/* <div className="logo">Jayraj Ganesh Borate</div> */}
            </div>
            <div className="nav-right">
                <ul className='hidden md:flex md:justify-center md:gap-x-[2.5rem]'>
                    <li className=""><Link href="/#">HOME</Link></li>
                    <li className=""><Link href="/#about">ABOUT</Link></li>
                    <li className=""><Link href="/#skills">PORTFOLIO</Link></li>
                    <li className=""><Link href="/Jayraj_Borate_Resume.pdf" target="_blank">RESUME</Link></li>
                    <li className=""><Link href="#footer">CONTACT</Link></li>
                </ul>
                {/* <Image src="" alt="" /> */}
            </div>
        </div>
    )
}

export default Navbar
