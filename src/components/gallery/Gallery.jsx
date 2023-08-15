import React from 'react';
import './gallery.css';
import donut from '../../assets/gallery/donut.jpg';
import brewed from '../../assets/gallery/brewed.jpg';
import coffee from '../../assets/gallery/coffee.jpg';
import coffee2 from '../../assets/gallery/coffee2.jpg';
import cookies from '../../assets/gallery/cookies.jpg';
import pastry from '../../assets/gallery/pastry.jpg';
import pastry2 from '../../assets/gallery/pastry2.jpg';
import pastry3 from '../../assets/gallery/pastry3.jpg';

const Gallery = () => {

  return (
    <div className="gallery-container"id='gallery'>
          <div className="gallery-title">
              <h3>Our Gallery</h3>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque voluptate aut impedit tenetur illo consectetur voluptatum adipisci pariatur</p>
          </div>
          <div className="gallery-details snaps-inline">
              <div className="gallery-image">
                  <img src={donut} alt="Coffee Connection" />
              </div>
              <div className="gallery-image">
                  <img src={brewed} alt="Coffee Connection" />
              </div>
              <div className="gallery-image">
                  <img src={pastry} alt="Coffee Connection" />
              </div>
              <div className="gallery-image">
                  <img src={coffee} alt="Coffee Connection" />
              </div>
              <div className="gallery-image">
                  <img src={pastry2} alt="Coffee Connection" />
              </div>
              <div className="gallery-image">
                  <img src={coffee2} alt="Coffee Connection" />
              </div>
              <div className="gallery-image">
                  <img src={cookies} alt="Coffee Connection" />
              </div>
              <div className="gallery-image">
                  <img src={pastry3} alt="Coffee Connection" />
              </div>
          </div>
    </div>
  )
}

export default Gallery