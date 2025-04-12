import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='border-t mx-8 sm:mx-44'>
      <div className='text-center p-4'>
        <p>&copy; {currentYear} Mulindi Jr. All Rights Reserved.</p>           
      </div>
    </div>
  );
};

export default Footer;