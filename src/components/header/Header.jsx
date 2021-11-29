import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="Header">
      <h1 
          onClick={() => window.location.reload()} 
          style={{ cursor: 'pointer' }}
        >
            Hero Rolodex
          </h1>

      <div className="links">
        {/* <a href="#">
          Log in
        </a> */}
      </div>
    </div>
  )
}

export default Header
