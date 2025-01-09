import { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { BsPhone } from 'react-icons/bs';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div id='contact' className='mt-24 mx-44'>
      <h1 className='text-center text-2xl mb-10'>Get in Touch</h1>
      <div className="flex flex-col sm:flex-row justify-between gap-8 mb-12">
        <div className="space-y-8 sm:w-1/3"> 
          <p>I'm currently available to take on new projects. Feel free to send a message about anything that you want me to work on.</p>
          <div className="flex items-center space-x-4 group">
            <div className='p-4 bg-white rounded-full group-hover:bg-purple-500 transition duration-300'>
              <FaMapMarkerAlt className='text-blue-500 text-xl group-hover:text-white' />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Location:</h2>
              <span >2nd Sunrise Ave, Ruiru</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 group">
            <div className='p-4 bg-white rounded-full group-hover:bg-purple-500 transition duration-300'>
              <TfiEmail className='text-blue-500 text-xl group-hover:text-white' />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Email:</h2>
              <a href="mailto:mulindijrn@gmail.com" className="cursor-pointer">mulindijrn@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center space-x-4 group">
            <div className='p-4 bg-white rounded-full group-hover:bg-purple-500 transition duration-300'>
              <BsPhone className='text-blue-500 text-xl group-hover:text-white' />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Call:</h2>
              <span>(713) 62-1330</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="md:w-2/3 bg-purple-300 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-6 mb-4">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:outline-none"
              placeholder="Your Name"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:outline-none"
              placeholder="Your Email"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 ring-purple-700 focus:outline-none"
            placeholder="Subject"
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 ring-purple-700 focus:outline-none"
            placeholder="Message"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>

          <button
            type="submit"
            className="py-3 px-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l hover:from-red-500 hover:to-green-500 transition text-white text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;