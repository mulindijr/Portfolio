import React from 'react';

const servicesData = [
  {
    title: "Web Development",
    description: "I specialize in front-end and back-end development, ensuring that your website is functional, user-friendly, and visually appealing."
  },
  {
    title: "Graphic Design",
    description: "Designing captivating visuals, logos, and promotional materials that perfectly represent your brand and capture your audience’s attention."
  },
  {
    title: "Content Writing",
    description: "Producing high-quality, engaging, and SEO-friendly content that resonates with your audience and supports your brand goals."
  },
  {
    title: "AI Solutions",
    description: "I can help you leverage AI to drive growth and innovation, from chatbots and virtual assistants to predictive analytics and machine learning solutions that transform your business."
  },
  {
    title: "Digital Marketing",
    description: "Helping your business grow by leveraging SEO, PPC, email campaigns, and analytics to boost online visibility and drive results."
  },
  {
    title: "Social Media Management",
    description: "Elevating your social media presence through strategic planning, content creation, and community engagement to grow your brand online."
  }
];

const Services = () => {
  return (
    <div id='services' className='mt-6 mx-8 sm:mt-24 sm:mx-44'>
      <h1 className='text-center mb-4 sm:mb-10 text-2xl font-bold'>Services</h1>
      <p className='text-start sm:text-center text-white'>
        I provide high-quality services, from building stunning websites to creating engaging content and cutting-edge AI solutions. Let’s explore how I can help bring your ideas to life.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 mt-10'>
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className='py-4 px-2 border border-gray-700 rounded-xl shadow-sm bg-gray-800 transition-transform transform hover:border-gray-500 hover:shadow-md'
          >
            <h2 className='mb-2 text-2xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>
              {service.title}
            </h2>
            <p className='text-white'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;