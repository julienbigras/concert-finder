import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="logoContainer"></div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/mylist">My List</Link>
      </nav>
    </div>
  );
};

export default Header;
