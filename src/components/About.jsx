import { useState } from 'react'
import Potrait from '../assets/Potrait.jpg' 

const About = () => {

  const [activeTab, setActiveTab] = useState('skills');

  return (
    <div className='mt-24 mx-44'>
      <h1 className='text-center mb-10 text-2xl'>About Me</h1>
      <div className='flex gap-2'>
        <div className=''>
          <img src={Potrait} alt="Mulindi Jr." className='h-[420px] w-96 rounded-md'/>
        </div>
        <div className='w-1/2 rounded-md'>
        <p className='text-xl'>I'm a full-stack developer specializing in the MERN stack (MongoDB, Express, React, Node.js). I build scalable and dynamic web applications, focusing on creating seamless user experiences. I'm always looking to learn and grow while contributing to exciting projects.</p>       
        
        <div className='flex mb-4 mt-4'>
          <button
            className={`px-4 py-2 mr-2 rounded-full ${
              activeTab === 'skills' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-black'
            }`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === 'education' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-black'
            }`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>

        {activeTab === 'skills' && (
            <div>
              <div className="mb-4">
                <p>JavaScript (ES6+)</p>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-purple-500 h-1 rounded-full"
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
              <div className="mb-4">
                <p>React and Redux</p>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-purple-500 h-1 rounded-full"
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>
              <div className="mb-4">
                <p>Node.js and Express</p>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-purple-500 h-1 rounded-full"
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
              <div className="mb-4">
                <p>MongoDB</p>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-purple-500 h-1 rounded-full"
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>
              <div className="mb-4">
                <p>Tailwind CSS</p>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-purple-500 h-1 rounded-full"
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default About