import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

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
      </div>
    </div>
  );
};

export default Hero;
