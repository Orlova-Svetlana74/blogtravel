import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Travel Blog</h1>
      <nav>
        <Link to="/">На главную страницу</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">О нас</Link>
        <Link to="/contact">Контакты</Link>
      </nav>
    </header>
  );
};
export default Header;