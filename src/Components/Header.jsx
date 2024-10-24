import React from 'react'
import { FaBars } from 'react-icons/fa'
const Header = () => {
  return (
    <div className="flex justify-between">
        <div className="flex items-center justify-center gap-5">
            <img src="./Resources/Logo.jpg" alt="Logo" className='h-10 w-8 md:h-28 w-28 lg:h-44 w-72'/>
            <a href='https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAZ__uuMuJpUNUQyNkExMlpPMVZaV0ZJUlRGRVZCVzBKQy4u' target='blank' ><button className='bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white hover:text-neutral-500 px-2.5 py-1.5 rounded-2xl '>We are hiring</button></a>
        </div>
        <div>
          <ul className='hidden lg:flex justify-between items-center font-bold from-neutral-400 gap-6'>
            <li><a href=''>Plans</a></li>
            <li><a href=''>Why Us?</a></li>
          </ul>
        </div>
        <div className='hidden lg:flex justify-center items-center font-bold gap-6'>
          <a className='text-slate-800' href=''>Sign In</a>
          <button className='rounded-md px-4 py-3 bg-blue-500 hover:bg-slate-400 font-semibold text-white'>Join Us</button>
        </div>
        <div className='lg:hidden'>
        <FaBars />
        </div>
    </div>
  )
}

export default Header