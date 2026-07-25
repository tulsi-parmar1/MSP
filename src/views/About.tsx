import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      {/* LEFT SIDE */}
      <div className="about-image">
        <img src="/homepage.jpeg" alt="Submersible Pump" />

        <div className="experience-box">
          <h2>30+</h2>
          <p>
            YEARS OF
            <br />
            EXCELLENCE
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="about-content">
        <p className="about-tag">ABOUT US</p>

        <h2>
          Delivering Reliability
          <br />
          For Over <span>30+ Years</span>
        </h2>

        <p className="about-description">
          Since 1993, AquaFlow Pumps has been a trusted name in the submersible
          pump industry. Our commitment to quality, innovation and customer
          satisfaction has made us a preferred choice for thousands of
          customers.
        </p>

        <div className="features">
          <div className="feature">
            <span>✔</span>
            <p>Advanced Technology</p>
          </div>

          <div className="feature">
            <span>✔</span>
            <p>Strict Quality Standards</p>
          </div>

          <div className="feature">
            <span>✔</span>
            <p>Wide Range of Products</p>
          </div>

          <div className="feature">
            <span>✔</span>
            <p>Excellent After-Sales Service</p>
          </div>
        </div>

        <button className="about-btn">Know More About Us</button>
      </div>
    </section>
  );
};

export default About;
