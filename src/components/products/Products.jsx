import React from 'react';
import './products.css';
import espresso from '../../assets/products/espresso.jpg';
import cortado from '../../assets/products/cortado.jpg';
import hazelnut from '../../assets/products/hazelnut.jpg';
import frappuccino from '../../assets/products/frappuccino.jpg';
import chai from '../../assets/products/chai.jpg';
import iced from '../../assets/products/iced.jpg';
import almond from '../../assets/products/almond.jpg';
import kids from '../../assets/products/chocolate.jpg';

const Products = () => {
  return (
      <div className="products-container">
          <div className="products-title">
              <h3>Coffee Bean Tour</h3>
              <hr />
              <p>Life is full of flavours. We at Coffee Connection have been passionate about capturing flavours that enlighten our customers' experience!</p>
          </div>
          <div className="products-content">
                <div className="products-content-item">
                    <img src={espresso} alt="coffee" title="Espresso" />
                    <p>Espresso-Based Drinks</p>
                </div>
                <div className="products-content-item">
                    <img src={cortado} alt="coffee" title="Cortado" />
                    <p>Specialty Coffees</p>
                </div>
                <div className="products-content-item">
                    <img src={hazelnut} alt="coffee" title="Hazelnut Latte" />
                    <p>Flavored Lattes</p>
                </div>
                <div className="products-content-item">
                    <img src={frappuccino} alt="coffee" title="Frappuccino" />
                    <p>Blended Drinks</p>
                </div>
                <div className="products-content-item">
                    <img src={chai} alt="coffee" title="Chai Latte" />
                    <p>Tea and Infusions</p>
                </div>
                <div className="products-content-item">
                    <img src={iced} alt="coffee" title="Iced Latte" />
                    <p>Cold Beverages</p>
                </div>
                <div className="products-content-item">
                    <img src={almond} alt="coffee" title="Almond Milk Latte" />
                    <p>Vegan Drinks</p>
                </div>
                <div className="products-content-item">
                    <img src={kids} alt="coffee" title="Chocolate" />
                    <p>Kids' Menu</p>
                </div>
          </div>
    </div>
  )
}

export default Products