import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Travel Blog</h1>
      <nav>
        <Link className="text_top" to="/">На главную страницу</Link>
        <Link className="text_top" to="/blog">Blog</Link>
        <Link className="text_top" to="/about">О нас</Link>
        <Link className="text_top" to="/contact">Контакты</Link>
      </nav>
    </header>
  );
};
export default Header;