import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Uvelaphi-Designs</h3>

            <p> Uvelaphi-Designs is a platform that allows you to create posters and invitation cards based on your culture or tribe while also showcasing the diverse cultures and tribes of South Africa, its simply a gateway to the rich tapestry of South African cultures. </p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Clan Names</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: appmaniazar@gmail.com</p>
          <p>Phone: +2767-248-8896</p>
          <div className="social-links">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">All rights reserved &copy; 2024</p>
        <p className="copyright"><i>Appmaniazar</i></p>
      </div>
    </footer>
  );
};

export default Footer;
