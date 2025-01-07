import React from 'react'

const Services = () => {
  return (
    <div className='mt-24 mx-44'>
      <h1 className='text-center mb-10 text-2xl'>Services</h1>
      <p className='text-center'>I specialize in providing high-quality services tailored to meet your needs. From building stunning websites to creating engaging content and implementing cutting-edge AI solutions, I’m here to bring your ideas to life. Let’s explore my services and discover how I can help you achieve your goals.</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
        <div>
          <h2 className='mb-2'>Web Development</h2>
          <p>I specialize in front-end and back-end development, ensuring that your website is functional, user-friendly, and visually appealing.</p>
        </div>
        <div>
          <h2>Graphic Design</h2>
          <p>Designing captivating visuals, logos, and promotional materials that perfectly represent your brand and capture your audience’s attention.</p>
        </div>
        <div>
          <h2>Content Writing</h2>
          <p>Producing high-quality, engaging, and SEO-friendly content that resonates with your audience and supports your brand goals.</p>
        </div>
        <div>
          <h2>AI Solutions</h2>
          <p>I can help you leverage AI to drive growth and innovation, from chatbots and virtual assistants to predictive analytics and machine learning solutions that transform your business.</p>
        </div>
        <div>
          <h2>Digital Marketing</h2>
          <p>Helping your business grow by leveraging SEO, PPC, email campaigns, and analytics to boost online visibility and drive results.</p>
        </div>
        <div>
          <h2>Social Median Management</h2>
          <p>Elevating your social media presence through strategic planning, content creation, and community engagement to grow your brand online.</p>
        </div>
      </div>
    </div>
  )
}

export default Services