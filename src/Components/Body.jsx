import React from 'react'

const Body = () => {
  return (
    <div className='space-y-4 lg:flex'>
      <div className='flex items-center justify-center lg:flex-1 lg:order-2' >
        <img src='./Resources/car left.png' alt='left car ' className='w-48 md:w-80 lg:w-[450px]'  ></img>
        <img src='./Resources/car right.png' alt='right car'  className='w-48 md:w-80 lg:w-[450px]'></img>
      </div>
      <div className='lg:flex-1 lg:order-1 '>
        <h1 className='text text-5xl font-bold font-serif  leading-tight'>We Provide the most practical reviews</h1>
        <p className='font-mono text-zinc-800'> If you are a car enthusiast and want to stay updated with latest automobile trends, you are at rhe right place. </p>
        <p className='font-bold'>Subscribe to our newsletter!</p>
        <form action='' className='flex flex-col gap-4 md:flex-row'>
          <input className='rounded-md px-4 py-3 placeholder:text-red-600' type='email' placeholder='Enter e-mail address'/>
          <button className='rounded-md px-4 py-3 bg-blue-500 hover:bg-slate-400 font-semibold text-white'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Body