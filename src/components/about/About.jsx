import React from 'react';
import './about.css';
import cafe from '../../assets/cafe.jpg'

const About = () => {
  return (
    <div className="about-container" id='about-us'>
          <div className="about-title">
            <hr /><h2>ABOUT OUR COFFEE HOUSE</h2>
          </div>
          <div className="about-details">
              <div className="about-details-left">
                  <h3>What We do</h3>
                  <hr />
                  <p>Our story begins in 2019 when we opened our first location in Cumberland, RI. We wanted to create a place where people could come together and enjoy a cup of coffee. We have since expanded to two other locations in Woonsocket and North Park. We are proud to serve our community and look forward to serving you!</p>
                  <button><a href="/">READ MORE</a></button>
              </div>
              <div className="about-details-image">
                  <img src={cafe} alt="" />
              </div>
          </div>
    </div>
  )
}

export default About