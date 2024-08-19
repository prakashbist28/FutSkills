import React from 'react'
import logoimg from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=' bg-black '>
        <div className='flex justify-between items-center min-h-16 p-2 md:p-4 md:px-40'>
            <div className='flex gap-2'>
            <img src={logoimg} alt='logo' className=' h-4 md:h-6 rounded-md my-[2px]'/>
            <div className='text-white font-nine font-semibold text-[12px] md:text-[18px]'>Abstract </div>
             <a href='/'  className='text-white border-l-2 pl-2 font-normal text-[12px] md:text-[18px]'>Help Center</a>
            </div>
        <Link to='/addcard' className='text-white border p-2 font-nine text-[8px] md:text-[14px] rounded-lg bg-gradient-to-b from-gray-600 shadow-lg shadow-white/40 hover:shadow-lg hover:shadow-white hover:bg-gradient-to-t transition duration-500 to-black'>Submit a request</Link>
        </div>
    </div>
  )
}

export default Header