import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter';
import Profile from '../assets/Profile.jpg';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div id='home' className="flex flex-col mx-8 pt-44 mb-44 sm:flex-row sm:items-center sm:justify-around sm:pt-36 sm:mx-44 sm:mb-48">
      <div className="flex flex-col space-y-6">

        <div className="flex space-x-2 text-xl">
          <a href="https://github.com/mulindijr" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/mulindijr" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/mulindijr" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaXTwitter />
          </a>
          <a href="https://facebook.com/mulindijrn" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaFacebook />
          </a>
          <a href="https://wa.me/254713382707" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaWhatsapp />
          </a>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Hello, I'm <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Mulindi Jr.</span>
        </h1>
        <div className="text-2xl sm:text-3xl font-bold text-pink-500 font-outfit" style={{ height: '50px' }} >
          <Typewriter
            words={['Fullstack Developer 💻', 'MERN Stack Engineer 🌐', 'Tech Enthusiast 🚀', 'Cross-Platform Dev 📱']}
            loop={Infinity}          
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        
        <div className="flex space-x-4">
          <Link to="contact" smooth={true} duration={1500} spy={true} offset={-100}>
            <button className="py-2 px-3 sm:py-3 sm:px-6 text-sm rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l hover:from-red-500 hover:to-green-500 transition text-white sm:text-lg">
              Connect With Me
            </button>
          </Link>
          <a href="Mulindi.pdf" download = "Mulindi.pdf">
            <button className="py-2 px-3 text-sm sm:py-3 sm:px-6 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white sm:text-lg">
              Get Resume
            </button>
          </a>
        </div>
      </div>

      <div className='hidden sm:flex items-center justify-center shadow-custom-white rounded-full h-[320px] w-[320px] ml-[100px]'>
        <img
          src={Profile}
          alt="Mulindi Jr."
          className="rounded-full w-72 h-72 bg-cover bg-no-repeat bg-center"
        />
      </div>
    </div>
  );
};

export default Hero;
