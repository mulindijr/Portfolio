import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState('home')

  return (
    <div className='flex justify-between items-center mt-5 mx-44'>
      <h1 className='cursor-pointer text-4xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'><AnchorLink href='#home'>Mulindi Jr.</AnchorLink></h1>
      <ul className='flex space-x-10 text-[20px]'>
        <li className={`cursor-pointer ${menu==='home' ? 'text-pink-500' : 'text-white'}`}onClick={() => setMenu('home')}> <AnchorLink href='#home'>Home</AnchorLink></li>
        <li className={`cursor-pointer ${menu==='about' ? 'text-pink-500' : 'text-white'}`}onClick={() => setMenu('about')}> <AnchorLink href='#about' offset={50}>ABout</AnchorLink></li>
        <li className={`cursor-pointer ${menu==='services' ? 'text-pink-500' : 'text-white'}`}onClick={() => setMenu('services')}> <AnchorLink href='#services' offset={50}>Services</AnchorLink></li>
        <li className={`cursor-pointer ${menu==='portfolio' ? 'text-pink-500' : 'text-white'}`}onClick={() => setMenu('portfolio')}> <AnchorLink href='#porfolio' offset={50}>Porfolio</AnchorLink></li>
        <li className={`cursor-pointer ${menu==='contact' ? 'text-pink-500' : 'text-white'}`}onClick={() => setMenu('contact')}> <AnchorLink href='#contact' offset={50}>Contact</AnchorLink></li>
      </ul>
      <AnchorLink href='#contact' offset={50}><button className="py-3 px-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l hover:from-red-500 hover:to-green-500 transition text-white text-lg">Connect With Me</button></AnchorLink>
    </div>
  )
}

export default Navbar