// npm install @react-aria/button @react-aria/menu @react-aria/menu-button @react-aria/visually-hidden @react-aria/focus-ring

// import { Button, Menu, MenuButton,  } from "react-aria-components"

import {Link} from 'react-aria-components'


const Navbar = () => {
  return (
    <nav className='navbar_container bg-inherit text-[#1e1b4b] font-semibold p-6  fixed top-0 w-screen z-50 text-xl'>
      <ul className='flex flex-col sm:flex-row justify-center'>
        <li className='px-2'>
          <Link className="nav-link p-2 hover:text-[#3b3769] active:shadow-inner" href="/">HOME</Link>
        </li>
        <li className='px-2'>
          <Link className="nav-link p-2 hover:text-[#3b3769] active:shadow-inner" href="/about">ABOUT</Link>
        </li>
        <li className='px-2'>
          <Link className="nav-link p-2 hover:text-[#3b3769] active:shadow-inner" href="/contact">CONTACT</Link>
        </li>
        {/* <li className='px-2'>
          <Link className="nav-link p-2 hover:text-[] active:shadow-inner" href="#services">SERVICES</Link>
        </li> */}
        <li className='px-2'>
          <Link className="nav-link p-2 hover:text-[#3b3769] active:shadow-inner" href="/products">OUR PRODUCTS</Link>
        </li>
      
      </ul>
    </nav>
  );
};

export default Navbar;
