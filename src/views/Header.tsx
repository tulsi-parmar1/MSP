import React, { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";

import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ position: "sticky" }}>
      {/* ===== TOP BAR ===== */}
      <div className="top-bar">
        <div className="top-left">
          <div className="top-item">
            <Phone size={15} />
            <span>+91 8141070768</span>
          </div>

          <div className="top-item">
            <Mail size={15} />
            <span>vivekrathod15@gmail.com</span>
          </div>
        </div>

        <div className="top-right">
          <div className="top-item">
            <MapPin size={15} />
            <span>Botad, Gujarat</span>
          </div>
        </div>
      </div>


      <nav className="navbar">
        {/* ===== LOGO ===== */}
        <div className="logo-container">
          <img src="/logo.png" alt="" height={50} />
          {/* <div className="logo-circle">MSP</div> */}

          <div className="logo-text">
            <h1>Maruti Submersible Pump</h1>
            <p>Water Pump Solutions</p>
          </div>
        </div>

        {/* ===== DESKTOP NAV ===== */}
        <div className="nav-links">
          <a href="/">Home</a>

          <a href="#about">About</a>

          {/* ===== DROPDOWN ===== */}
          <div className="dropdown">
            <button className="dropdown-btn">
              Products <ChevronDown size={16} />
            </button>

            <div className="dropdown-menu">
              <a href="/">Borewell Submersible Pumps</a>
              <a href="/">Openwell Pumps</a>
              <a href="/">Agricultural Pumps</a>
              <a href="/">Domestic Water Pumps</a>
            </div>
          </div>

          <a href="#gallery">Gallery</a>

          <a href="#contact">Contact</a>
        </div>

        {/* ===== DESKTOP BUTTON ===== */}
        <div className="desktop-btn">
          <button className="quote-btn">Get Quote</button>
        </div>

        {/* ===== MOBILE MENU BUTTON ===== */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X size={30} color="#0B3C5D" />
          ) : (
            <Menu size={30} color="#0B3C5D" />
          )}
        </button>
      </nav>

      {/* ===== MOBILE MENU ===== */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <a href="/">Home</a>

        <a href="#about">About us</a>

        <a href="#products">Products</a>

        <a href="#gallery">Gallery</a>

        <a href="#contact">Contact</a>

        <button className="quote-btn">Get Quote</button>
      </div>
    </header>
  );
};

export default Header;
