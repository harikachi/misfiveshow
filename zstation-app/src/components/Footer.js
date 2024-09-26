import React from 'react';
import '../css/Footer.css';
import logo from '../images/z_logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="contact-btn-container">
          <img src={logo} alt="Logo" className="footer-logo"/>
        </div>

        <div className="footer-bottom">
        <div className="footer-lists">
            <ul className="footer-links menu-2">
                <li className="footer-links-h5">Products and Services</li>
                <li>At the Station</li>
                <li>Z App</li>
                <li>Rewards and Promotion</li>
            </ul>
            <ul className="footer-links menu-3">
                <li className="footer-links-h5">For businesses</li>
                <li>Z Business fuel card</li>
                <li>Fuel and services</li>
                <li>Business tips and stories</li>
            </ul>
            <ul className="footer-links menu-4">
                <li className="footer-links-h5">About Z</li>
                <li>Our Story</li>
                <li>Our People</li>
                <li>What we stand for</li>
                <li>Sustainability</li>
                <li>News</li>
                <li>Careers at Z</li>
                <li>Corporate centre</li>
            </ul>
        </div>
      </div>

        <div className="contact-btn-container menu-5">
          <button className="contact-btn">Contact Us
            <span className="button__circle">
                <span className="button__arrow"><svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 16.125C4.125 14.0938 0.5 9.25 0.5 6.5C0.5 3.1875 3.15625 0.5 6.5 0.5C9.8125 0.5 12.5 3.1875 12.5 6.5C12.5 9.25 8.84375 14.0938 7.21875 16.125C6.84375 16.5938 6.125 16.5938 5.75 16.125ZM6.5 8.5C7.59375 8.5 8.5 7.625 8.5 6.5C8.5 5.40625 7.59375 4.5 6.5 4.5C5.375 4.5 4.5 5.40625 4.5 6.5C4.5 7.625 5.375 8.5 6.5 8.5Z" fill="currentColor"></path></svg></span>
            </span>
          </button>
        </div>
    </div>
    <div className="border-with-line"></div>
    <div className="footer-icons-container">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
    </div>

    <div className="footer-bottom-low">
        <div className="footer__container container">
            <ul className="footer__utility">
                <li className="footer__utility-item">Privacy</li>
                <li className="footer__utility-item">Terms of use</li>
                <li className="footer__utility-item">Fuel Safety Data Sheets </li>
                <li className="footer__utility-item">Investor relations</li>
            </ul>
            <div className="footer__bottom-left">
                <img alt="shielded" className="footer__shield" id="shielded-logo" src="https://shielded.co.nz/img/custom-logo.png" height="28" width="28"/>
                    <span className="footer__utility-item">© Z Energy Limited. All trademarks are used under license.</span>
            </div>
        </div>
    </div>
    </footer>
  );
}

export default Footer;
