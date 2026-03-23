import React from 'react';
import './Header.css'


const Header = () => {
  return <header className='p-4 mb-3'>
    <div className='container mx-auto'>
      <div className='flex items-center justify-between'>
        <div data-text="Awesome" className="btn-logo text-base sm:text-2xl">
          <span className="actual-text">&nbsp;M.Hosni&nbsp;</span>
          <span className="hover-text" aria-hidden="true">&nbsp;M.Hosni&nbsp;</span>
        </div>
      <a className='btn-contact  px-5 py-2 text-sm sm:px-7 sm:py-2.7 sm:text-base '  href='#contact'>Contact Me</a>
      </div>
    </div>
</header>;
};

export default Header;
