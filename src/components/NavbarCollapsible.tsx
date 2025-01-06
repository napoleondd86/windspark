import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavbarCollapsible = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  const closeNavbar = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed w-full z-50">
      {/* Header Bar */}
      <div className="transition-all duration-300">
        <div className="flex justify-between items-center">
          {/* Hamburger Button */}
          <div
            className={`z-50 fixed top-12 right-12 h-12 w-12 text-[#1e1b4b] text-4xl font-bold cursor-pointer hover:scale-y-125 ${isOpen ? 'text-white' : 'text-[#1e1b4b]'}`}
            onClick={toggleNavbar}
          >
            {isOpen ? "✕" : "☰"}
          </div>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <div
        className={`
          fixed top-0 left-0 w-full h-full 
          bg-[#1e1b4b] 
          flex flex-col justify-center items-center
          transition-all duration-500
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <div className="flex flex-col gap-8 text-center">
          <Link
            className='text-5xl text-white hover:text-[#504c7e]'
            to="/"
            onClick={closeNavbar}
          >
            Home
          </Link>
          <Link
            className='text-5xl text-white hover:text-[#504c7e]'
            to="/about"
            onClick={closeNavbar}
          >
            About
          </Link>
          <Link
            className='text-5xl text-white hover:text-[#504c7e]'
            to="/products"
            onClick={closeNavbar}
          >
            Products
          </Link>
          <Link
            className='text-5xl text-white hover:text-[#504c7e]'
            to="/#contact"
            onClick={closeNavbar}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavbarCollapsible
