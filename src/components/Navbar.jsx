import React, { useState } from 'react'

const Navbar = () => {
  const [menu, setMenu] = useState('home')

  return (
    <div className='flex justify-between items-center mt-5 mx-44'>
      <h1 className='cursor-pointer text-4xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>Mulindi Jr.</h1>
      <ul className='flex space-x-10 text-[20px]'>
        <li className={`cursor-pointer ${menu==='home' ? 'text-pink-500' : 'text-white'}`}onClick={() => setMenu('home')}>Home</li>
        <li className={`cursor-pointer ${menu==='about' ? 'text-pink-500' : 'text-white'}`}onClick={() => setMenu('about')}>About</li>
        <li className={`cursor-pointer ${menu==='services' ? 'text-pink-500' : 'text-white'}`}onClick={() => setMenu('services')}>Services</li>
        <li className={`cursor-pointer ${menu==='portfolio' ? 'text-pink-500' : 'text-white'}`}onClick={() => setMenu('portfolio')}>Portfolio</li>
        <li className={`cursor-pointer ${menu==='contact' ? 'text-pink-500' : 'text-white'}`}onClick={() => setMenu('contact')}>Contact</li>
      </ul>
      <button className='py-4 px-8 rounded-[50px] text-[20px] bg-gradient-to-r from-pink-500 to-purple-500'>Connect With Me</button>
    </div>
  )
}

export default Navbar