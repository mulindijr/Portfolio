import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center mt-5 mx-44'>
      <h1 className='cursor-pointer text-4xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>Mulindi Jr.</h1>
      <ul className='flex space-x-10 text-[20px]'>
        <li className='cursor-pointer hover:text-pink-300'>Home</li>
        <li className='cursor-pointer hover:text-pink-300'>About</li>
        <li className='cursor-pointer hover:text-pink-300'>Services</li>
        <li className='cursor-pointer hover:text-pink-300'>Portfolio</li>
        <li className='cursor-pointer hover:text-pink-300'>Contact</li>
      </ul>
      <button className='py-4 px-8 rounded-[50px] text-[20px] bg-gradient-to-r from-pink-500 to-purple-500'>Connect With Me</button>
    </div>
  )
}

export default Navbar