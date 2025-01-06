// npm install @react-aria/button @react-aria/menu @react-aria/menu-button @react-aria/visually-hidden @react-aria/focus-ring

// import { Button, Menu, MenuButton,  } from "react-aria-components"

import { useState, useEffect } from 'react'
import { Link } from 'react-aria-components'

const Navbar = () => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate opacity based on scroll position
      // Start at 50px, complete by 100px
      const scrollProgress = (window.scrollY - 50) / 50
      const newOpacity = Math.min(Math.max(scrollProgress, 0), 1)
      setOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="navbar_container fixed top-0 w-screen z-50 text-xl p-6 transition-all duration-300"
      style={{
        backgroundColor: `rgba(30, 27, 75, ${opacity * 1})`,
        color: opacity > 0.5 ? '#ffffff' : '#1e1b4b'
      }}
    >
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
        <li className='px-2'>
          <Link className="nav-link p-2 hover:text-[#3b3769] active:shadow-inner" href="/products">OUR PRODUCTS</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
