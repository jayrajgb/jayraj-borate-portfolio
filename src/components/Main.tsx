"use client"

import React from 'react'
import Link from 'next/link';

const Main = () => {
    
    return (
        <div className='w-full px-4 sm:px-10 md:px-12'>
            <main className='px-4 sm:px-6 md:px-8'>
                <div id="home" className="home flex flex-col md:flex-row items-center justify-center pt-20 md:pt-24 min-h-[95vh]">
                    <div className="intro flex flex-col justify-center items-center md:items-center w-full md:w-1/2">
                        <div className='space-y-1 md:space-y-2 text-center md:text-left'>
                            <h1 className='bebas text-5xl sm:text-[5rem] leading-none'>JAYRAJ BORATE</h1>
                            <h2 className='bebas text-2xl sm:text-4xl leading-none'>WEB DEVELOPER</h2>
                            <div className='py-1 space-y-1 text-lg md:text-xl'>
                                <p className='leading-none'>Hello there, I&apos;m Jayraj and I am</p>
                                <p className='leading-none'>a passionate Web Developer.</p>
                            </div>
                            <Link href="/Jayraj_Borate_Resume.pdf" target="_blank">
                                <div className='w-full flex justify-center md:justify-start'>
                                    <button className="cv mt-2 flex items-center gap-x-2 px-4 py-2 text-base">
                                        Download CV <img className="svg download w-4 h-4" src="/assets/download.svg" alt="download" />
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="hero md:flex justify-center items-center w-full md:w-1/2 hidden">
                        <div className="circle size-[15rem] sm:size-[18rem] md:size-[24rem] lg:size-[32rem] relative"></div>
                        <img className="photograph size-[13rem] sm:size-[16rem] md:size-[22rem] lg:size-[30rem] absolute" src="/assets/PROFILE.jpg" alt="photograph" />
                    </div>
                </div>

                <div id="about" className="section min-h-[40vh] pt-24 md:min-h-screen flex flex-col md:flex-row items-center gap-x-8 md:pt-16">
                    <div className="section-image hidden md:flex md:justify-center md:items-center md:w-1/2">
                        <img className="image-style size-[15rem] sm:size-[18rem] md:size-[24rem] lg:size-[32rem] rounded-full" src="/assets/laptop2.jpg" alt="about" />
                    </div>
                    <div className="section-text w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-5xl sm:text-[5rem] font-bold mb-4">ABOUT ME</h1>
                        <p className="intro2 text-md md:text-xl mb-6">
                        I am Jayraj Borate, an Electronics and Telecommunication Engineering student at VIT, Pune, with a strong foundation in Full Stack Web Development. I am proficient in skills including React.js for building dynamic user interfaces and Node.js for backend development. Currently, I am learning Next.js, a full-stack framework to enhance performance and streamline development process. <br />
                        I have a strong passion for UI/UX design and development, and I am skilled in crafting interactive prototypes and creating user-focused designs. My skills in design tools include Adobe XD and Figma, enabling me to bring ideas to life effectively. <br />
                        I am dedicated to continuous learning and I strive to deliver impactful, user-centric solutions by combining technical expertise with a creative approach.
                        </p>
                        <Link href="/#footer">
                        <button className="contact px-4 py-2 text-sm sm:text-base">Contact me</button>
                        </Link>
                    </div>
                </div>

                <div id="skills" className="skills pt-24">
                    <h1 className="header text-5xl sm:text-[5rem] font-bold text-center sm:text-left mb-8">Skills</h1>
                    <div className="skill-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ml-4 md:ml-0">
                        <div className="skill-item flex justify-between items-center p-4 rounded-lg">
                            <div className="w-1/2 skill-left flex items-center gap-3 ">
                                <img src="/assets/html.svg" alt="html" className="w-6 h-6 sm:w-8 sm:h-8" />
                                <p className="text-2xl sm:text-3xl bebas">HTML</p>
                            </div>
                            <div className="w-1/2 justify-center skill-right flex gap-1">
                                {
                                    [...Array(4)].map((_, i) => (
                                        <div key={i} className="dots w-3 h-3 sm:w-4 sm:h-4 rounded-full"></div>
                                    ))
                                }
                                {
                                    [...Array(1)].map((_, i) => (
                                        <div key={i} className="dot2 w-3 h-3 sm:w-4 sm:h-4 rounded-full"></div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="skill-item flex justify-between items-center p-4 rounded-lg ">
                            <div className="w-1/2 skill-left flex items-center gap-3 ">
                                <img src="/assets/css.svg" alt="css" className="w-6 h-6 sm:w-8 sm:h-8" />
                                <p className="text-2xl sm:text-3xl bebas">CSS</p>
                            </div>
                            <div className="w-1/2 justify-center skill-right flex gap-1">
                                {
                                    [...Array(4)].map((_, i) => (
                                        <div key={i} className="dots w-3 h-3 sm:w-4 sm:h-4 rounded-full"></div>
                                    ))
                                }
                                {
                                    [...Array(1)].map((_, i) => (
                                        <div key={i} className="dot2 w-3 h-3 sm:w-4 sm:h-4 rounded-full"></div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="skill-item flex justify-between items-center p-4 rounded-lg">
                            <div className="w-1/2 skill-left flex items-center gap-3">
                                <img src="/assets/js.svg" alt="javascript" className="w-6 h-6 sm:w-8 sm:h-8" />
                                <p className="text-2xl sm:text-3xl bebas">Javascript</p>
                            </div>
                            <div className="w-1/2 justify-center skill-right flex gap-1">
                                {
                                    [...Array(4)].map((_, i) => (
                                        <div key={i} className="dots w-3 h-3 sm:w-4 sm:h-4 rounded-full"></div>
                                    ))
                                }
                                {
                                    [...Array(1)].map((_, i) => (
                                        <div key={i} className="dot2 w-3 h-3 sm:w-4 sm:h-4 rounded-full"></div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="skill-item flex justify-between items-center p-4 rounded-lg">
                            <div className="w-1/2 skill-left flex items-center gap-3">
                                <img src="/assets/cpp.svg" alt="cpp" className="w-6 h-6 sm:w-8 sm:h-8" />
                                <p className="text-2xl sm:text-3xl bebas">C++</p>
                            </div>
                            <div className="w-1/2 justify-center skill-right flex gap-1">
                                {
                                    [...Array(3)].map((_, i) => (
                                        <div key={i} className="dots w-3 h-3 sm:w-4 sm:h-4 rounded-full"></div>
                                    ))
                                }
                                {
                                    [...Array(2)].map((_, i) => (
                                        <div key={i} className="dot2 w-3 h-3 sm:w-4 sm:h-4 rounded-full"></div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="skill-item flex justify-between items-center p-4 rounded-lg">
                            <div className="w-1/2 skill-left flex items-center gap-3">
                                <img src="/assets/java.svg" alt="java" className="w-6 h-6 sm:w8 sm:h-8" />
                                <p className="text-2xl sm:text-3xl bebas">Java</p>
                            </div>
                            <div className="w-1/2 justify-center skill-right flex gap-1">
                                {
                                    [...Array(3)].map((_, i) => (
                                        <div key={i} className="dots w-3 h-3 sm:w-4 sm:h-4 rounded-full"></div>
                                    ))
                                }
                                {
                                    [...Array(2)].map((_, i) => (
                                        <div key={i} className="dot2 w-3 h-3 sm:w-4 sm:h-4 rounded-full"></div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="skill-item flex justify-between items-center p-4 rounded-lg">
                            <div className="w-1/2 skill-left flex items-center gap-3">
                                <img src="/assets/python.svg" alt="python" className="w-6 h-6 sm:w-8 sm:h-8" />
                                <p className="text-2xl sm:text-3xl bebas">Python</p>
                            </div>
                            <div className="w-1/2 justify-center skill-right flex gap-1">
                                {
                                    [...Array(2)].map((_, i) => (
                                        <div key={i} className="dots w-3 h-3 sm:w-4 sm:h-4 rounded-full"></div>
                                    ))
                                }
                                {
                                    [...Array(3)].map((_, i) => (
                                        <div key={i} className="dot2 w-3 h-3 sm:w-4 sm:h-4 rounded-full"></div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="skill-item flex justify-between items-center p-4 rounded-lg">
                            <div className="w-1/2 skill-left flex items-center gap-3">
                                <img src="/assets/mysql.png" alt="mysql" className="w-6 h-6 sm:w-8 sm:h-8" />
                                <p className="text-2xl sm:text-3xl bebas">MySQL</p>
                            </div>
                            <div className="w-1/2 justify-center skill-right flex gap-1">
                                {
                                    [...Array(3)].map((_, i) => (
                                        <div key={i} className="dots w-3 h-3 sm:w-4 sm:h-4 rounded-full"></div>
                                    ))
                                }
                                {
                                    [...Array(2)].map((_, i) => (
                                        <div key={i} className="dot2 w-3 h-3 sm:w-4 sm:h-4 rounded-full"></div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div id="projects" className="projects pt-24">
                    <h1 className="header text-5xl sm:text-[5rem] font-bold text-center sm:text-left mb-16 md:mb-8">Projects</h1>
                    <div className="project-container flex flex-col gap-12">
                        
                        {/* GoRail */}

                        <div className="project-item flex flex-col md:flex-row md:justify-evenly items-start md:items-center">
                            <div className="flex justify-around w-full md:block md:w-auto">
                                <div className='px-4 sm:px-0'>
                                    <h2 className="bebas text-3xl md:text-5xl font-bold">GoRail</h2>
                                    <h4 className="bebas text-2xl md:text-3xl font-bold mb-3">2024</h4>
                                </div>
                                <div>
                                    <ul className="features text-sm pl-2 md:pl-0 md:text-xl">
                                        <li>React | TailwindCSS | Express | Node | MongoDB</li>
                                        <li>Full Stack E-Ticketing System</li>
                                        <li>User/Admin Panel</li>
                                        <li>Multi-Passenger Booking</li>
                                        <li>Booking Cancellation & History</li>
                                        <li>Search, Filters & Train Management</li>
                                    </ul>
                                </div>
                            </div>
                            <img src="/assets/project11.png" alt="project11" className="w-full md:w-3/5 rounded-lg shadow-lg mt-6 mb-10" />
                        </div>   
                        
                        {/* Password Manager App */}

                        {/* <div className="project-item flex flex-col md:flex-row-reverse md:justify-evenly items-start md:items-center">
                            <div className="flex justify-around w-full md:block md:w-auto">
                                <div className='px-4 sm:px-0'>
                                    <h2 className="bebas text-3xl md:text-5xl font-bold">Password Manager App</h2>
                                    <h4 className="bebas text-2xl md:text-3xl font-bold mb-3">2025</h4>
                                </div>
                                <div>
                                    <ul className="features text-sm pl-2 md:pl-0 md:text-xl">
                                        <li>React | TailwindCSS | Express | Node | MongoDB</li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <img src="/assets/project10.png" alt="project10" className="w-full md:w-3/5 rounded-lg shadow-lg mt-6 mb-10" />
                        </div> */}
                        
                        {/* NewsNow */}

                        <div className="project-item flex flex-col md:flex-row md:justify-evenly items-start md:items-center">
                            <div className="flex justify-around w-full md:block md:w-auto">
                                <div className='px-4 sm:px-0'>
                                    <h2 className="bebas text-3xl md:text-5xl font-bold">NewsNow</h2>
                                    <h4 className="bebas text-2xl md:text-3xl font-bold mb-3">2024</h4>
                                </div>
                                <div>
                                    <ul className="features text-sm pl-2 md:pl-0 md:text-xl">
                                        <li>Vite | React | TailwindCSS</li>
                                        <li>Light/Dark Theme</li>
                                        <li>Fetch API</li>
                                        <li>Daily Updates</li>
                                        <li>Countrywise Top Headlines</li>
                                    </ul>
                                </div>
                            </div>
                            <img src="/assets/project9.png" alt="project9" className="w-full md:w-3/5 rounded-lg shadow-lg mt-6 mb-10" />
                        </div>       

                        {/* Meme Generator App */}

                        <div className="project-item flex flex-col md:flex-row-reverse md:justify-evenly items-start md:items-center">
                            <div className="flex justify-around w-full md:block md:w-auto">
                                <div className='px-4 sm:px-0'>
                                    <h2 className="bebas text-3xl md:text-5xl font-bold">Meme Generator App</h2>
                                    <h4 className="bebas text-2xl md:text-3xl font-bold mb-3">2024</h4>
                                </div>
                                <div>
                                    <ul className="features text-sm pl-2 md:pl-0 md:text-xl">
                                        <li>Vite | React | CSS</li>
                                        <li>Fetch API</li>
                                        <li>NPM Packages</li>
                                    </ul>
                                </div>
                            </div>
                            <img src="/assets/project8.png" alt="project8" className="w-full md:w-3/5 rounded-lg shadow-lg mt-6 mb-10" />
                        </div>

                        {/* MindEase */}

                        <div className="project-item flex flex-col md:flex-row md:justify-evenly items-start md:items-center">
                            <div className="flex justify-around w-full md:block md:w-auto">
                                <div className='px-4 sm:px-0'>
                                    <h2 className="bebas text-3xl md:text-5xl font-bold">Mindease</h2>
                                    <h4 className="bebas text-2xl md:text-3xl font-bold mb-3">2024</h4>
                                </div>
                                <div>
                                    <ul className="features text-sm pl-2 md:pl-0 md:text-xl">
                                        <li>React | CSS | Express | Node | MySQL</li>
                                        <li>User/Admin Panel</li>
                                        <li>Quiz Platform</li>
                                        <li>List Mapping</li>
                                    </ul>
                                </div>
                            </div>
                            <img src="/assets/project7.png" alt="project7" className="w-full md:w-3/5 rounded-lg shadow-lg mt-6 mb-10" />
                        </div>                        
                        
                        {/* TicTacToe */}

                        <div className="project-item flex flex-col md:flex-row-reverse md:justify-evenly items-start md:items-center">
                            <div className="flex justify-around w-full md:block md:w-auto">
                                <div className='px-4 sm:px-0'>
                                    <h2 className="bebas text-3xl md:text-5xl font-bold">Tic Tac Toe</h2>
                                    <h4 className="bebas text-2xl md:text-3xl font-bold mb-3">2024</h4>
                                </div>
                                <div>
                                    <ul className="features text-sm pl-2 md:pl-0 md:text-xl">
                                        <li>React | CSS</li>
                                        <li>State Management</li>
                                        <li>Conditional Rendering</li>
                                    </ul>
                                </div>
                            </div>
                            <img src="/assets/project6.png" alt="project6" className="w-full md:w-3/5 rounded-lg shadow-lg mt-6 mb-10" />
                        </div>
                        
                        {/* Weather App */}

                        <div className="project-item flex flex-col md:flex-row md:justify-evenly items-start md:items-center">
                            <div className="flex justify-around w-full md:block md:w-auto">
                                <div className='px-4 sm:px-0'>
                                    <h2 className="bebas text-3xl md:text-5xl font-bold">Weather App</h2>
                                    <h4 className="bebas text-2xl md:text-3xl font-bold mb-3">2024</h4>
                                </div>
                                <div>
                                    <ul className="features text-sm pl-2 md:pl-0 md:text-xl">
                                        <li>HTML | CSS | JS</li>
                                        <li>Day/Night Design</li>
                                        <li>Fetch API</li>
                                    </ul>
                                </div>
                            </div>
                            <img src="/assets/project5.png" alt="project5" className="w-full md:w-3/5 rounded-lg shadow-lg mt-6 mb-10" />
                        </div>
                        
                        {/* To Do List */}

                        <div className="project-item flex flex-col md:flex-row-reverse md:justify-evenly items-start md:items-center">
                            <div className="flex justify-around w-full md:block md:w-auto">
                                <div className='px-4 sm:px-0'>
                                    <h2 className="bebas text-3xl md:text-5xl font-bold">To Do List</h2>
                                    <h4 className="bebas text-2xl md:text-3xl font-bold mb-3">2024</h4>
                                </div>
                                <div>
                                    <ul className="features text-sm pl-2 md:pl-0 md:text-xl">
                                        <li>HTML | CSS | JS</li>
                                        <li>DOM Manipulation</li>
                                        <li>Local Storage</li>
                                    </ul>
                                </div>
                            </div>
                            <img src="/assets/project4.png" alt="project4" className="w-full md:w-3/5 rounded-lg shadow-lg mt-6 mb-10" />
                        </div>
                        
                        {/* Spotify Clone */}

                        <div className="project-item flex flex-col md:flex-row md:justify-evenly items-start md:items-center">
                            <div className="flex justify-around w-full md:block md:w-auto">
                                <div className='px-4 sm:px-0'>
                                    <h2 className="bebas text-3xl md:text-5xl font-bold">Spotify Media Player</h2>
                                    <h4 className="bebas text-2xl md:text-3xl font-bold mb-3">2023</h4>
                                </div>
                                <div>
                                    <ul className="features text-sm pl-2 md:pl-0 md:text-xl">
                                        <li>HTML | CSS | JS</li>
                                        <li>Fully Responsive Design</li>
                                        <li>Fetch API</li>
                                        <li>Dynamic Albums</li>
                                    </ul>
                                </div>
                            </div>
                            <img src="/assets/project3.png" alt="project3" className="w-full md:w-3/5 rounded-lg shadow-lg mt-6 mb-10" />
                        </div>

                        {/* Netflix Clone */}

                        <div className="project-item flex flex-col md:flex-row-reverse md:justify-evenly items-start md:items-center">
                            <div className="flex justify-around w-full md:block md:w-auto">
                                <div className='px-4 sm:px-0'>
                                    <h2 className="bebas text-3xl md:text-5xl font-bold">Netflix Clone</h2>
                                    <h4 className="bebas text-2xl md:text-3xl font-bold mb-3">2023</h4>
                                </div>
                                <div>
                                    <ul className="features text-sm pl-2 md:pl-0 md:text-xl">
                                        <li>HTML | CSS</li>
                                        <li>Responsive Design</li>
                                        <li>Videos</li>
                                        <li>Positions</li>
                                    </ul>
                                </div>
                            </div>
                            <img src="/assets/project2.png" alt="project2" className="w-full md:w-3/5 rounded-lg shadow-lg mt-6 mb-10" />
                        </div>

                        {/* Amazon Clone */}

                        <div className="project-item flex flex-col md:flex-row md:justify-evenly items-start md:items-center">
                            <div className="flex justify-around w-full md:block md:w-auto">
                                <div className='px-4 sm:px-0'>
                                    <h2 className="bebas text-3xl md:text-5xl font-bold">Amazon Clone</h2>
                                    <h4 className="bebas text-2xl md:text-3xl font-bold mb-3">2022</h4>
                                </div>
                                <div>
                                    <ul className="features text-sm pl-2 md:pl-0 md:text-xl">
                                        <li>HTML | CSS</li>
                                        <li>Responsive Design</li>
                                        <li>Flexbox</li>
                                        <li>Hover Effects</li>
                                    </ul>
                                </div>
                            </div>
                            <img src="/assets/project1.png" alt="project1" className="w-full md:w-3/5 rounded-lg shadow-lg mt-6 mb-10" />
                        </div>

                        
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Main