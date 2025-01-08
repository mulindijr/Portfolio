import React from 'react'
import TechHaven from '../assets/TechHaven.PNG'
import Medilab from '../assets/Medilab.PNG'

const Porfolio = () => {
  return (
    <div className='mt-24 mx-44'>
      <h1 className='text-center text-2xl mb-10'>Portfolio</h1>
      <p className='text-center mb-8'>My portfolio showcases a collection of projects that reflect my skills, creativity, and expertise as a full-stack developer. Each project highlights my ability to design and develop user-friendly interfaces, implement robust back-end solutions, and deliver innovative digital experiences. Explore my work to see how I bring ideas to life through technology.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div>
          <img src={TechHaven} alt="Tech Haven"/>
          <div className='bg-purple-800 p-2'>
            <h2 className='mb-2 text-xl'>TechHaven</h2>
            <p>Tech Haven is a one-stop destination for the latest and greatest in electronic devices. Our goal is to   provide you with a seamless shopping experience, offering a wide range of products at competitive prices.</p>
            <div className='flex gap-4'>
              <p className='border rounded-lg p-1 mt-2 bg-purple-950'>React</p>
              <p className='border rounded-lg p-1 mt-2 bg-purple-950'>Tailwind CSS</p>
              <p className='border rounded-lg p-1 mt-2 bg-purple-950'>Express Js</p>
              <p className='border rounded-lg p-1 mt-2 bg-purple-950'>Mongo DB</p>
              <p className='border rounded-lg p-1 mt-2 bg-purple-950'>Node Js</p>
            </div>
            <div className='mt-4 flex justify-between'>
              <a href="https://techhaven-rho.vercel.app/" className='border p-2 rounded-xl cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l hover:from-red-500 hover:to-green-500 transition text-white text-lg'>Live Url</a>
              <a href="https://github.com/mulindijr/Tech-Haven" className='border p-2 rounded-xl cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l hover:from-red-500 hover:to-green-500 transition text-white text-lg'>Github</ a>
            </div>
          </div>
        </div>
        <div>
          <img src={Medilab} alt="Medilab" />
          <div className='bg-purple-800 p-2'>
            <h2 className='mb-2 text-xl'>Medilab</h2>
            <p>MediLab is a modern healthcare platform dedicated to providing reliable medical services, advanced     diagnostics, and personalized care. MediLab ensures accurate results, timely consultations, and a   patient-centered approach to health and wellness. </p>
            <div className='flex gap-4'>
              <p className='border rounded-lg p-1 mt-2 bg-purple-950'>React</p>
              <p className='border rounded-lg p-1 mt-2 bg-purple-950'>Custom CSS</p>
            </div>
            <div className='mt-4 flex justify-between'>
              <a href="https://medilab-hosp.vercel.app/" className='border p-2 rounded-xl cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l hover:from-red-500 hover:to-green-500 transition text-white text-lg'>Live Url</a>
              <a href="https://github.com/mulindijr/Medilab" className='border p-2 rounded-xl cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l hover:from-red-500 hover:to-green-500 transition text-white text-lg'>Github</ a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Porfolio