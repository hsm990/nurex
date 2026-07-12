import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { navLinks } from '@/constants'
import { HiMenuAlt3, HiX } from "react-icons/hi"
import '@/styles/nav.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')
  const location = useLocation()

  const isActive = (link) => {
    if (link.path.startsWith('#')) {
      return activeHash === link.path
    }
    if (link.path === '/') {
      return location.pathname === '/' && !activeHash
    }
    return location.pathname === link.path
  }

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

  useEffect(() => {
    const ids = navLinks.filter(l => l.path.startsWith('#')).map(l => l.path.slice(1))
    const targets = ids.map(id => document.getElementById(id)).filter(Boolean)
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHash('#' + entry.target.id)
            return
          }
        }
        setActiveHash('')
      },
      { rootMargin: '-80px 0px -55% 0px' }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
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
              className={`nav-link${isActive(link) ? ' nav-link--active' : ''}`}
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
                className={isActive(link) ? 'active' : ''}
                onClick={(e) => {
                  if (link.path.startsWith('#')) {
                    setMenuOpen(false)
                    const el = document.getElementById(link.path.slice(1))
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                    return
                  }
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