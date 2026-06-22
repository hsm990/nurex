import { useState, useEffect } from 'react'
import { navLinks } from '@/constants'
import logo from '../../assets/images/logo1.png'
import { FaFacebookF, FaInstagram } from "react-icons/fa"
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
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const closeMenu = () => {
    setMenuOpen(false)
  }
  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-container">
          <a href="/" className="logo">
            <img src={logo} alt="Logo" />
          </a>
          <div className="links">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className={
                      activePath === link.path ? 'active' : ''
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-right">
            <div className="social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social-span"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-span"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
            <a href="#contact" className="nav-cta">
              Contact us
            </a>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              {
                menuOpen
                  ? <HiX />
                  : <HiMenuAlt3 />
              }
            </button>
          </div>
        </div>
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
                  setTimeout(() => {
                    window.location.href = link.path
                  }, 250)
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-bottom">
          <div className="social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="social-span"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="social-span"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
          <a
            href="#contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Contact us
          </a>
        </div>
      </div>
      <div
        className={`menu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      />
    </>
  )
}