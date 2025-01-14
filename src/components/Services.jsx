import React from 'react'

const Services = () => {
  return (
    <div id='services' className='mt-6 mx-8 sm:mt-24 sm:mx-44'>
      <h1 className='text-center mb-4 sm:mb-10 text-2xl'>Services</h1>
      <p className='text-start sm:text-center'>I provide high-quality services, from building stunning websites to creating engaging content and cutting-edge AI solutions. Let’s explore how I can help bring your ideas to life.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 mt-10'>
        <div>
          <h2 className='mb-2 text-2xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>Web Development</h2>
          <p>I specialize in front-end and back-end development, ensuring that your website is functional, user-friendly, and visually appealing.</p>
        </div>
        <div>
          <h2 className='mb-2 text-2xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>Graphic Design</h2>
          <p>Designing captivating visuals, logos, and promotional materials that perfectly represent your brand and capture your audience’s attention.</p>
        </div>
        <div>
          <h2 className='mb-2 text-2xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>Content Writing</h2>
          <p>Producing high-quality, engaging, and SEO-friendly content that resonates with your audience and supports your brand goals.</p>
        </div>
        <div>
          <h2 className='mb-2 text-2xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>AI Solutions</h2>
          <p>I can help you leverage AI to drive growth and innovation, from chatbots and virtual assistants to predictive analytics and machine learning solutions that transform your business.</p>
        </div>
        <div>
          <h2 className='mb-2 text-2xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>Digital Marketing</h2>
          <p>Helping your business grow by leveraging SEO, PPC, email campaigns, and analytics to boost online visibility and drive results.</p>
        </div>
        <div>
          <h2 className='mb-2 text-2xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>Social Media Management</h2>
          <p>Elevating your social media presence through strategic planning, content creation, and community engagement to grow your brand online.</p>
        </div>
      </div>
    </div>
  )
}

export default Services