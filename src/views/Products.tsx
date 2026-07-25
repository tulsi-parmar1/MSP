// Products.jsx

import React from "react";
import "./Products.css";

import pump1 from "/homepage.jpeg";
import pump2 from "/homepage.jpeg";
import pump3 from "/homepage.jpeg";
import pump4 from "/homepage.jpeg";

const products = [
  {
    image: pump1,
    title: "Borewell\nSubmersible Pumps",
    desc: "High performance for deep borewells.",
  },
  {
    image: pump2,
    title: "Openwell\nSubmersible Pumps",
    desc: "Reliable solutions for openwell applications.",
  },
  {
    image: pump3,
    title: "Sewage & Effluent\nPumps",
    desc: "Heavy-duty pumps for dirty water and sewage.",
  },
  {
    image: pump4,
    title: "Agricultural\nPumps",
    desc: "Powerful pumps for agriculture & irrigation.",
  },
];

const Products = () => {
  return (
    <section className="products-section">
      <div className="products-container">
        <p className="small-heading">OUR PRODUCTS</p>

        <h1 className="main-heading">Built For Every Need</h1>

        <div className="slider-wrapper">
          {/* Left Button */}
          <button className="arrow-btn left-btn">❮</button>

          {/* Cards */}
          <div className="products-grid">
            {products.map((item, index) => (
              <div className="product-card" key={index}>
                <div className="image-box">
                  <img src={item.image} alt="" />
                </div>

                <h2>
                  {item.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h2>

                <p>{item.desc}</p>

                <a href="/">
                  Explore <span>→</span>
                </a>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button className="arrow-btn right-btn">❯</button>
        </div>

        <button className="view-btn">View All Products</button>
      </div>
    </section>
  );
};

export default Products;
