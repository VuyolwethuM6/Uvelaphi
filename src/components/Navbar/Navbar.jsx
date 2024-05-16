// Navbar.js
import React, { useState } from 'react';
import logo from '../../assets/Uvelaphi.png';
import './Navbar.css'; // Import the CSS file
import Modal from './Modal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsMenuOpen(false); // Close the menu
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="logo" className="logo-img" />
        </div>
        <div className="navbar-links">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Clan Names
          </a>
          <a href="#" className="nav-link">
            Resources
          </a>
          <button className="btn-signin" onClick={openModal}>
            Sign In
          </button>
        </div>
        <div className="navbar-mobile-menu">
          <button className="menu-button" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg className="close-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mobile-links">
          <a href="#" className="nav-link-mobile">
            Home
          </a>
          <a href="#" className="nav-link-mobile">
            About
          </a>
          <a href="#" className="nav-link-mobile">
            Clan Names
          </a>
          <a href="#" className="nav-link-mobile">
            Resources
          </a>
          <button className="btn-signin" onClick={openModal}>
            Sign In
          </button>
        </div>
      )}
      <Modal isOpen={isModalOpen} closeModal={closeModal}/>

    </nav>
  );
};

export default Navbar;
