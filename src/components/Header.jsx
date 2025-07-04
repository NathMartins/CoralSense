import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <h1>CoralSense</h1>
    <nav>
      <Link to="/">Início</Link>
      <Link to="/pesquisa">Atribuir Pesquisa</Link>
    </nav>
  </header>
);

export default Header;