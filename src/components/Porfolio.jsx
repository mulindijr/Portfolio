import React from 'react';
import { FaReact, FaCss3Alt, FaNodeJs, FaPython, FaGithub, FaLink } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFlask, SiSqlalchemy } from 'react-icons/si';
import TechHaven from '../assets/TechHaven.PNG';
import Medilab from '../assets/Medilab.PNG';
import PizzaRestaurant from '../assets/PizzaRestaurant.PNG';
import BookLibrary from '../assets/BookLibrary.PNG';

const techIcons = {
  React: <FaReact className="text-blue-500 text-2xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400 text-2xl" />,
  "Vanilla CSS": <FaCss3Alt className="text-blue-600 text-2xl" />,
  "Express.js": <SiExpress className="text-gray-700 text-2xl" />,
  "MongoDB": <SiMongodb className="text-green-500 text-2xl" />,
  "Node.js": <FaNodeJs className="text-green-600 text-2xl" />,
  Python: <FaPython className="text-yellow-500 text-2xl" />,
  Flask: <SiFlask className="text-black text-2xl" />,
  SQL: <SiSqlalchemy className="text-orange-500 text-2xl" />,
  SQLAlchemy: <SiSqlalchemy className="text-orange-500 text-2xl" />,
};

const projects = [
  {
    id: 1,
    name: "Tech Haven",
    description:
      "Tech Haven is a one-stop destination for the latest and greatest in electronic devices. Our goal is to provide you with a seamless shopping experience, offering a wide range of products at competitive prices.",
    image: TechHaven,
    technologies: ["React", "Tailwind CSS", "Express.js", "MongoDB", "Node.js"],
    liveUrl: "https://techhaven-rho.vercel.app/",
    githubUrl: "https://github.com/mulindijr/Tech-Haven",
  },
  {
    id: 2,
    name: "Medilab",
    description:
      "MediLab is a modern healthcare platform dedicated to providing reliable medical services, advanced diagnostics, and personalized care. MediLab ensures timely consultations and a patient-centered approach to health and wellness.",
    image: Medilab,
    technologies: ["React", "Vanilla CSS"],
    liveUrl: "https://medilab-hosp.vercel.app/",
    githubUrl: "https://github.com/mulindijr/Medilab",
  },
  {
    id: 3,
    name: "Pizza Restaurant",
    description:
      "This is a full-stack web application for managing pizza restaurants. The application allows users to view a list of restaurants, see details of a specific restaurant, view available pizzas, and create new restaurant-pizza associations.",
    image: PizzaRestaurant,
    technologies: ["React", "Vanilla CSS", "Python", "Flask", "SQL"],
    liveUrl: "https://github.com/mulindijr/Pizza-Restaurants",
    githubUrl: "https://github.com/mulindijr/Pizza-Restaurants",
  },
  {
    id: 4,
    name: "Book Library",
    description:
      "Book Library is a simple command-line application for managing a library of books. Users can add books, view their own books, delete books, delete users, and update user, book, or genre names.Only admins can view all users and their books.",
    image: BookLibrary,
    technologies: ["Python", "SQLAlchemy"],
    liveUrl: "https://github.com/mulindijr/Book-Library",
    githubUrl: "https://github.com/mulindijr/Book-Library",
  },
];

const Portfolio = () => {
  return (
    <div id='portfolio' className='mt-10 mx-8 sm:mt-24 sm:mx-44'>
      <h1 className='text-center text-2xl mb-6 sm:mb-10'>Portfolio</h1>
      <p className='text-start sm:text-center mb-8'>
        My portfolio showcases projects that highlight my skills in creating user-friendly interfaces and robust  back-end solutions. Explore my work to see how I bring ideas to life through technology.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {projects.map((project) => (
          <div key={project.id}>
            <img src={project.image} alt={project.name} loading='lazy' className="h-48 sm:h-64 w-full"/>
            <div className='bg-purple-800 p-2'>
              <h2 className='mb-2 text-xl'>{project.name}</h2>
              <p>{project.description}</p>
              <div className='flex flex-wrap gap-1 sm:gap-4'>
                {project.technologies.map((tech, index) => (
                  <p
                    key={index}
                    className='border rounded-lg p-1 mt-2 bg-slate-100'
                    title={tech} 
                  >
                    {techIcons[tech] || tech}
                  </p>
                ))}
              </div>
              <div className='mt-4 flex justify-between'>
                <a
                  href={project.liveUrl}
                  className='border p-2 rounded-xl cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l hover:from-red-500 hover:to-green-500 transition text-white text-lg flex items-center gap-2'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaLink className="text-lg" />
                  Live
                </a>
                <a
                  href={project.githubUrl}
                  className="border p-2 rounded-xl cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l hover:from-red-500 hover:to-green-500 transition text-white text-lg flex items-center gap-2"
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub className="text-lg" />
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
