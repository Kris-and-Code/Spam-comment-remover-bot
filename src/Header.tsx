import React from 'react';
import logo from './youtube-logo-2431.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="YouTube Logo" />
        <h1 className="header-text">YouTube Spam Comment Remover Tool</h1>
      </div>
    </header>
  );
};

export default Header;