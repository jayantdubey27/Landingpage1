import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row justify-between'>
      <ul className='flex gap-10 text-slate-400 font-semibold'>
        <li>
          <a href='https://youtube.com/@360automobiles6?feature=shared' target='blank'> Youtube</a>
        </li>
        <li>
          <a href='#'> Instagram</a>
        </li>
      </ul>
      <div>
        <p className='text-black font-medium'> <a href="mailto:jayantdubey27@gmail.com?subject= Visited your webpage">Contact Us?</a></p>
      </div>
    </div>
  )
}

export default Footer