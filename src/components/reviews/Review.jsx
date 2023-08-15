import React from 'react';
import './review.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';


const Review = () => {

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
      <div className="review-container">
            <div className="review-title">
              <h3>What Our Customers Say</h3>
              <hr />
              <p>Our customers are our biggest supporters. Here's what they have to say about us.</p>
            </div>
            <Carousel responsive={responsive}>
                <Card />
                <Card />
                <Card />
                <Card />
            </Carousel>;
    </div>
  )
}

export default Review
