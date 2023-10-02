import React, {useState} from 'react';
import './navbar.css';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.jpeg';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
      <div className="navbar-container">
            <div className="navbar-logo">
                <h2 className='logo'>COFFEE Connection</h2>
            </div>
            <div>
                <ul className="navbar-links">
                    <li><a href="#about-us">ABOUT US</a></li>
                    <li><a href="#coffee">COFFEE</a></li>
                    <li><a href="/">MENU</a></li>
                    <li><a href="#gallery">GALLERY</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    <li><button type='submit'>Order NOW!</button></li>
                </ul>
            </div>
            {/* hamburger navbar */}
            <div className={`navbar-toggle ${toggleMenu ? 'active' : ''}`} onClick={handleToggle}>
                {toggleMenu ? <RiCloseLine size={25} color='white'/> : <RiMenuLine size={25} color='white'/>}
                {toggleMenu && (
                <nav className="navbar-menu-mobile">
                    <ul>
                        <li><a href="#about-us">ABOUT US</a></li>
                        <li><a href="#coffee">COFFEE</a></li>
                        <li><a href="/">MENU</a></li>
                        <li><a href="#gallery">GALLERY</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                        <li><button type='submit'>Order NOW!</button></li>
                    </ul>
                </nav>
                )}
            </div>
      </div>
  )
}

export default Navbar
