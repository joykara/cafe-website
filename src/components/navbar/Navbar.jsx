import React from 'react'

const Navbar = () => {
    return (
      <div className="navbar-container">
            <div className="navbar-logo">
                <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group" />
            </div>
            <div className="navbar-links">
                <ul>
                    <li><a href="/">ABOUT US</a></li>
                    <li><a href="/">COFFEE</a></li>
                    <li><a href="/">MENU</a></li>
                    <li><a href="/">CAREERS</a></li>
                    <li><a href="/">CONTACT</a></li>
                    <li><button type='submit'>Order NOW!</button></li>
                </ul>
            </div>
      </div>
  )
}

export default Navbar