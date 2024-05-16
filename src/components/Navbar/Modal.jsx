// Modal.js
import React, { useState } from 'react';
import './Modal.css';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'; // Import Firebase Authentication

const Modal = ({ isOpen, closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [activeTab, setActiveTab] = useState('Login');

  const handleSignIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // You can redirect to a different page upon successful sign-in
        alert("You can redirect to a different page upon successful sign-up");
        closeModal(); // Close modal after successful sign-in
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Display error message to the user");
        console.error(errorMessage);
        // Handle errors, e.g., display error message to the user
      });
  };

  const handleSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // You can redirect to a different page upon successful sign-up
        alert("You can redirect to a different page upon successful sign-up");
        closeModal(); // Close modal after successful sign-up
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
        // Handle errors, e.g., display error message to the user
        alert("Display error message to the user");
      });
  };

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="custom-modal" className="custom-modal" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="custom-modal-content">
        <span className="custom-close" onClick={closeModal}>&times;</span>
        <div className="custom-container">
          <div className="custom-tabs">
            <button className={`custom-tablink ${activeTab === 'Login' ? 'active' : ''}`} onClick={() => openTab('Login')}>Login</button>
            <button className={`custom-tablink ${activeTab === 'Signup' ? 'active' : ''}`} onClick={() => openTab('Signup')}>Signup</button>
          </div>
          <div id="Login" className="custom-tabcontent" style={{ display: activeTab === 'Login' ? 'block' : 'none' }}>
            <h2>Login</h2>
            <form>
              <input className="custom-input" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input className="custom-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button className="custom-button" type="button" onClick={handleSignIn}>Login</button>
            </form>
          </div>
          <div id="Signup" className="custom-tabcontent" style={{ display: activeTab === 'Signup' ? 'block' : 'none' }}>
            <h2>Signup</h2>
            <form>
              <input className="custom-input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
              <input className="custom-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input className="custom-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button className="custom-button" type="button" onClick={handleSignUp}>Signup</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
