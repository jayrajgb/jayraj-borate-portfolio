"use client"

import React from 'react'
import Image from 'next/image'

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
                    <li className=""><a href="/#">HOME</a></li>
                    <li className=""><a href="/#about">ABOUT</a></li>
                    <li className=""><a href="/#skills">PORTFOLIO</a></li>
                    <li className=""><a href="/Jayraj_Borate_Resume.pdf" target="_blank">RESUME</a></li>
                    <li className=""><a href="#footer">CONTACT</a></li>
                </ul>
                {/* <Image src="" alt="" /> */}
            </div>
        </div>
    )
}

export default Navbar
