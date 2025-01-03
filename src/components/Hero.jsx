import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter';
import Profile from '../assets/Profile.jpg';

const Hero = () => {
  return (
    <div className="flex items-center justify-around mt-36 mx-44">
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

        <h1 className="text-4xl font-bold leading-tight">
          Hello, I'm <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Mulindi Jr.</span>
        </h1>
        <div className="text-3xl font-bold text-pink-500 font-outfit" style={{ height: '50px' }} >
          <Typewriter
            words={['Fullstack Developer 💻', 'MERN Stack Engineer 🌐', 'Tech Enthusiast 🚀', 'Cross-Platform Dev 📱']}
            loop={Infinity}          
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        
        <div className="flex space-x-4">
          <button className="py-3 px-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l hover:from-red-500 hover:to-green-500 transition text-white text-lg">
            Connect with me
          </button>

          <a href="Mulindi.pdf" download = "Mulindi.pdf">
            <button className="py-3 px-6 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-lg">
              Get Resume
            </button>
          </a>
        </div>
      </div>

      <div className='flex items-center justify-center shadow-custom-white rounded-full h-[320px] w-[320px] ml-[100px]'>
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
