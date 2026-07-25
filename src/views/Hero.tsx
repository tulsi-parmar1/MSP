import { ArrowRight, Phone } from "lucide-react";
import "./HomeHero.css";

const HomeHero = () => {
  return (
    <section className="hero-section">
      {/* Background Overlay */}
      <div className="hero-overlay"></div>

      {/* Floating Bubbles */}
      <div className="bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* LEFT CONTENT */}
      <div className="hero-content">
        <p className="hero-subtitle">30+ YEARS OF TRUST & QUALITY</p>

        <h1>
          Powerful <span> Submersible Pumps </span>
          For Every Water Need
        </h1>

        <p className="hero-description">
          Delivering high-performance water pump solutions for agriculture, i
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore Products
            <ArrowRight size={18} />
          </button>

          <button className="secondary-btn">
            <Phone size={18} />
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
