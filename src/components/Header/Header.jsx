// EventPlanner.js
import background from "../../assets/background.jpg"
import React from 'react';
import './Header.css'

const Header = () => {
  const designEvent = () => {
    // Functionality for designing event goes here
    console.log('Event designed!');
  };

  return (
    <div className="background-image-wrapper">
      <img className="background-image" src={background} alt="Background" />
    <div className="header-container">
      <h1>Are you planning a cultural event?</h1>
      <h2>Let Velaphi Designs bring your vision to life. Choose Event Type and Culture/Tribe below, and watch our platform work its magic!</h2>
      <div className="dropdowns">
        <div className="dropdown">
          <select id="event-type-dropdown">
            <option value="Default">Select Event Type</option>
            <option value="Music Concert">Music Concert</option>
            <option value="Art Exhibition">Art Exhibition</option>
            <option value="Theater Performance">Theater Performance</option>
          </select>
        </div>
        <div className="dropdown">
          <select id="culture-tribe-dropdown">
            <option value="Default">Select Culture / Tribe</option>
            <option value="African">African</option>
            <option value="Asian">Asian</option>
            <option value="European">European</option>
          </select>
        </div>
      </div>
      <button className="button" onClick={designEvent}>Design</button>
    </div>
    </div>
  );
};

export default Header;
