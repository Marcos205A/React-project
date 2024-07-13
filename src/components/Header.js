import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Memeflix</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new">Nuevo Video</Link>
    </nav>
  </header>
);

export default Header;
