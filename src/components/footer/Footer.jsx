import React from 'react';
import './footer.css';
import { FiMail } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
      <div className="footer-container" id='contact'>
        <div className="footer">
          <div className="footer__logo">
            <h2 className='logo'>COFFEE Connection</h2>
            <div className="footer__social">
              <a href="https://www.facebook.com/"><FaFacebookF /></a>
              <a href="https://twitter.com/"><FaTwitter /></a>
              <a href="https://www.instagram.com/"><FaInstagram /></a>
              <a href="https://www.youtube.com/"><FaYoutube /></a>
            </div>
          </div>
          <div className="footer__contact">
            <h3>CONTACT US</h3>
            <h4>Address</h4>
            <p>725 Mendon Rd, Cumberland, RI 02864</p>
            <p>401-333-3333</p>
            <p><FiMail /> info@coffeeconnection.com</p>
          </div>
          <div className="footer__links">
            <h3>QUICK LINKS</h3>
            <a href="/">Home</a>
            <a href="#about">About Us</a>
            <a href="#coffee">Coffee</a>
            <a href="/">Menu</a>
            <a href="#gallery">Gallery</a>
          </div>
        </div>
      </div>
  )
}

export default Footer