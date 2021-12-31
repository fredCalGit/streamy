import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import logo from '../images/stream.png';

const Header = () => {
  return (
    <div className="ui sencondary pointing menu">
      <Link to="/" className="item">
        <img
          src={logo}
          alt="Streamy Logo"
          style={{ height: '40px', width: 'auto' }}
        />
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
