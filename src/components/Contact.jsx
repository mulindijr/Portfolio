import { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { BsPhone } from 'react-icons/bs';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5165c909-4623-47d9-b845-289d701649df");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
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

        <form onSubmit={onSubmit} className="md:w-2/3 bg-purple-300 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-6 mb-4">
            <input
              className="w-full px-4 text-black py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:outline-none"
              placeholder="Your Name"
              type="text"
              id="name"
              name="name"
              required
            />

            <input
              className="w-full px-4 text-black py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:outline-none"
              placeholder="Your Email"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <input
            className="w-full px-4 text-black py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 ring-purple-700 focus:outline-none"
            placeholder="Subject"
            type="text"
            id="subject"
            name="subject"
            required
          />

          <textarea
            className="w-full px-4 text-black py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 ring-purple-700 focus:outline-none"
            placeholder="Message"
            id="message"
            name="message"
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

export default Contact;