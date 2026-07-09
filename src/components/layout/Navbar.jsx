import { useState, useEffect } from 'react'
import { navLinks } from '@/constants'
import { HiMenuAlt3, HiX } from "react-icons/hi"
import '@/styles/nav.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activePath = window.location.pathname

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="/" className="logo">HSL Studio<sup>®</sup></a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={`nav-link${activePath === link.path ? ' nav-link--active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button className="btn-glass btn-glass--nav">Start Your Project</button>
        <button className="hamburger" onClick={() => setMenuOpen(prev => !prev)} aria-label="Toggle menu">
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <a
                href={link.path}
                className={activePath === link.path ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  setMenuOpen(false)
                  setTimeout(() => { window.location.href = link.path }, 250)
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
    </>
  )
}