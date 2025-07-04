import React from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ nome, status }) => (
  <div className={styles.card}>
    <div className={styles.imagePlaceholder}></div>
    <h3>{nome}</h3>
    <p>Status: {status}</p>
  </div>
);

export default Card;