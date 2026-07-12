import { Link } from 'react-router-dom'
import { navLinks } from '@/constants'
import { services } from '@/constants'
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiMail, FiArrowUpRight } from 'react-icons/fi'
import '@/styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bg" />

      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <a href="/" className="footer-logo">HSL Studio<sup>®</sup></a>
            <p className="footer-desc">
              We build the systems behind growing businesses. Custom websites, school management platforms,
              POS systems, and AI automation.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="GitHub"><FiGithub /></a>
              <a href="#" className="social-link" aria-label="Twitter"><FiTwitter /></a>
              <a href="#" className="social-link" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="#" className="social-link" aria-label="Instagram"><FiInstagram /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              {services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link to="/services" className="footer-link">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Get in Touch</h4>
            <ul className="footer-list">
              <li>
                <a href="mailto:hello@nurex.dev" className="footer-link footer-contact-link">
                  <FiMail className="contact-icon" />
                  hello@nurex.dev
                </a>
              </li>
              <li>
                <Link to="/contact" className="footer-link footer-cta">
                  Send a Message <FiArrowUpRight />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NUREX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
