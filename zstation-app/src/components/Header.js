import React, { useState } from 'react';
import '../css/Header.css';
import logo from '../images/z_logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleSubMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index); // Toggle submenu
  };

    return (
        <header className="header">
          <div className="top-section">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="logo" />
              <div className="buttons">
                <button className="btn primary-btn">For personal</button>
                <button className="btn secondary-btn">For business</button>
              </div>
            </div>
            <div className="search-items">
                <label className="header-label">Z App</label>
                <label className="header-label">About Z</label>
            </div>
            <div className="search-items search-items-mobile">
              <div className="search-icon"><FontAwesomeIcon icon={faSearch}  /></div>
              <div className="hamburger-menu search-items-mobile" onClick={toggleMenu}>
                  <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="hamburger-icon" />
              </div>
            </div>
          </div>
          <div className="border-with-line"></div>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <ul className="outer-list">
              <li className="dropdown"> At the Station <span className="arrow" onClick={() => toggleSubMenu(1)}>▼</span>
                <ul className={`dropdown-menu ${openMenu === 1 ? 'show' : ''}`}>
                  <li className="inner-item">Food and Drink</li>
                  <li className="inner-item">Shopping</li>
                  <li className="inner-item">Services</li>
                  <li className="inner-item">Events</li>
                </ul>
              </li>
              <li className="dropdown">Power <span className="arrow">▼</span>
                <ul className="dropdown-menu">
                    <li>Charging</li>
                    <li>Power Banks</li>
                </ul>
              </li>
              <li className="dropdown">Rewards and Promotions<span className="arrow">▼</span>
                <ul className="dropdown-menu">
                    <li>Rewards</li>
                    <li>Promotions</li>
                </ul>
              </li>
              <li>Locations</li>
              <li className="dropdown">
              <label className="border-with-line"></label>
              </li>
              <li className="dropdown">
                  <label className="header-label-mobile">Z App</label>
              </li>
              <li className="dropdown">
              <label className="header-label-mobile">About Z</label>
              </li>
            </ul>
          </nav>
        </header>
      );
}

export default Header;
