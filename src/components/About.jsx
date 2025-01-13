import { useState } from 'react'
import Potrait from '../assets/Potrait.jpg' 

const About = () => {

  const [activeTab, setActiveTab] = useState('skills');

  return (
    <div id='about' className='mt-0 mx-8 sm:mt-24 sm:mx-44'>
      <h1 className='text-center mb-4 sm:mb-10 text-2xl'>About Me</h1>
      <div className='flex-col sm:flex sm:flex-row gap-2 p-4'>
        <div className=''>
          <img src={Potrait} alt="Mulindi Jr." className='h-80 sm:h-[450px] w-96 rounded-md'/>
        </div>
        <div className='w-full sm:w-1/2 rounded-md'>
        <p className='mt-2 sm:mt-0'>I'm a full-stack developer specializing in the MERN stack (MongoDB, Express, React, Node.js). I build scalable and dynamic web applications, focusing on creating seamless user experiences. I'm always looking to learn and grow while contributing to exciting projects.</p>       
        
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
              <div className="mb-2">
                <p>JavaScript (ES6+)</p>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-purple-500 h-1 rounded-full"
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
              <div className="mb-2">
                <p>React and Redux</p>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-purple-500 h-1 rounded-full"
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>
              <div className="mb-2">
                <p>Node.js and Express</p>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-purple-500 h-1 rounded-full"
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
              <div className="mb-2">
                <p>MongoDB</p>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-purple-500 h-1 rounded-full"
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>
              <div className="mb-2">
                <p>Tailwind CSS</p>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-purple-500 h-1 rounded-full"
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
              <div className="mb-2">
                <p>Next Js</p>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-purple-500 h-1 rounded-full"
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>
              <div className="mb-2">
                <p>Python</p>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-purple-500 h-1 rounded-full"
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'education' && (
            <div className="bg-purple-300 p-4 rounded-lg shadow-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-purple-500 w-4 h-4 rounded-full mt-1 mr-4"></div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      Bachelor's Degree in Information Technology
                    </p>
                    <p className="text-sm text-purple-600">Mount Kenya University</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-500 w-4 h-4 rounded-full mt-1 mr-4"></div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      Certificate in Fullstack Development
                    </p>
                    <p className="text-sm text-purple-600">Moringa School</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-500 w-4 h-4 rounded-full mt-1 mr-4"></div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      Ongoing Learning
                    </p>
                    <p className="text-sm text-purple-600">
                      Online courses and tutorials to enhance skills
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default About