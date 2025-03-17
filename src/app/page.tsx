import React from 'react'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify'


const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r bg-white overflow-x-clip'>
      <Navbar />
      <Main />
      <Footer />
      <ToastContainer theme='dark' />
      
    </div>
  )
}

export default Home
